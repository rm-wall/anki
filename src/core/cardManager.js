import { dbManager, WORD_LIST_STORAGE_KEY, REVIEW_SCOPE_KEY } from '../database/dbManager.js';

export function createCardManager(allCards) {
    return {
        getNowISO: () => new Date().toISOString(),

        load: async function() {
            const res = dbManager.db.exec("SELECT * FROM cards");
            allCards.clear();
            if (res.length > 0) {
                const values = res[0].values;
                values.forEach(row => {
                    const card = {
                        question: row[0],
                        answers: JSON.parse(row[1]),
                        repetitions: row[2],
                        efactor: row[3],
                        interval: row[4],
                        nextReviewDate: row[5],
                        isSuspended: row[6] === 1,
                        isStarred: row[7] === 1,
                        totalMistakes: row[8] || 0,
                    };
                    allCards.set(card.question, card);
                });
            }
            await this.updateDueCount();
        },

        syncFromTextarea: async function(wordListInput, updateTextareaStats) {
            const text = wordListInput.value.trim();
            const lines = text.split('\n');

            if (text) {
                const upsertStmt = dbManager.db.prepare(`
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes)
                    VALUES (?, ?, 0, 2.5, 0, ?, 0, 0, 0)
                    ON CONFLICT(question) DO UPDATE SET answers=excluded.answers;
                `);

                lines.forEach(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return;

                    const parts = line.split('|').map(part => part.trim()).filter(part => part);
                    if (parts.length < 2) return;

                    const question = parts[0];
                    const answers = parts;
                    const now = this.getNowISO();

                    upsertStmt.run([question, JSON.stringify(answers), now]);

                    const existingCard = allCards.get(question);
                    if (existingCard) {
                        existingCard.answers = answers;
                    } else {
                        allCards.set(question, {
                            question: question,
                            answers: answers,
                            repetitions: 0,
                            efactor: 2.5,
                            interval: 0,
                            nextReviewDate: now,
                            isSuspended: false,
                            isStarred: false,
                            totalMistakes: 0,
                        });
                    }
                });
                upsertStmt.free();
            }

            await dbManager.saveDbToIndexedDB();
            await this.updateDueCount();
            updateTextareaStats();
        },

        importFromText: async function(text, importContext = 'active') {
            const lines = text.split('\n');
            let newCardsAdded = 0;
            let updatedCards = 0;

            if (text) {
                const stmt = dbManager.db.prepare(`
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes)
                    VALUES (?, ?, 0, 2.5, 0, ?, ?, ?, 0)
                    ON CONFLICT(question) DO UPDATE SET
                        isSuspended = CASE WHEN excluded.isSuspended = 1 THEN 1 ELSE isSuspended END,
                        isStarred = CASE WHEN excluded.isStarred = 1 THEN 1 ELSE isStarred END;
                `);

                lines.forEach(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return;

                    const parts = line.split('|').map(part => part.trim()).filter(part => part);
                    if (parts.length < 2) return;

                    const question = parts[0];
                    const answers = parts;
                    const isSuspended = importContext === 'suspended' ? 1 : 0;
                    const isStarred = importContext === 'starred' ? 1 : 0;

                    const existingCard = allCards.get(question);
                    if (!existingCard) {
                        newCardsAdded++;
                        const newCard = {
                            question: question,
                            answers: answers,
                            repetitions: 0,
                            efactor: 2.5,
                            interval: 0,
                            nextReviewDate: this.getNowISO(),
                            isSuspended: isSuspended === 1,
                            isStarred: isStarred === 1,
                            totalMistakes: 0,
                        };
                        allCards.set(question, newCard);
                    } else {
                        if ((isSuspended && !existingCard.isSuspended) || (isStarred && !existingCard.isStarred)) {
                            updatedCards++;
                            if (isSuspended) existingCard.isSuspended = true;
                            if (isStarred) existingCard.isStarred = true;
                        }
                    }

                    stmt.run([question, JSON.stringify(answers), this.getNowISO(), isSuspended, isStarred]);
                });
                stmt.free();
            }

            if (newCardsAdded > 0 || updatedCards > 0) {
                await dbManager.saveDbToIndexedDB();
                await this.updateDueCount();
            }
            return newCardsAdded;
        },

        getDueCards: () => {
            const now = new Date();
            const dueCards = Array.from(allCards.values()).filter(card =>
                !card.isSuspended && (new Date(card.nextReviewDate) <= now || card.repetitions === 0)
            );
            return dueCards.sort((a, b) => {
                const mistakesDiff = (b.totalMistakes || 0) - (a.totalMistakes || 0);
                if (mistakesDiff !== 0) return mistakesDiff;
                return a.efactor - b.efactor;
            });
        },

        getAllActiveCards: () => {
            return Array.from(allCards.values()).filter(card => !card.isSuspended);
        },

        update: async function(cardQuestion, isCorrect, srsSettings) {
            const card = allCards.get(cardQuestion);
            if (!card) return;

            const getNextIntervalInMinutes = (setting) => {
                const { value, unit } = setting;
                if (unit === 'days') return value * 24 * 60;
                if (unit === 'hours') return value * 60;
                return value;
            };

            if (isCorrect) {
                card.repetitions += 1;
                if (card.repetitions === 1) {
                    card.interval = getNextIntervalInMinutes(srsSettings.initialInterval);
                } else if (card.repetitions === 2) {
                    card.interval = getNextIntervalInMinutes(srsSettings.secondInterval);
                } else {
                    card.interval = Math.ceil(card.interval * card.efactor);
                }
            } else {
                card.repetitions = 0;
                card.interval = getNextIntervalInMinutes(srsSettings.lapseInterval);
                card.totalMistakes = (card.totalMistakes || 0) + 1;
            }

            const quality = isCorrect ? 5 : 1;
            card.efactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
            if (card.efactor < 1.3) card.efactor = 1.3;

            if (!isCorrect && card.totalMistakes > 5) {
                const mistakePenalty = Math.min((card.totalMistakes - 5) * 0.02, 0.3);
                card.efactor -= mistakePenalty;
                if (card.efactor < 1.3) card.efactor = 1.3;
            }

            const nextReview = new Date();
            nextReview.setMinutes(nextReview.getMinutes() + card.interval);
            card.nextReviewDate = nextReview.toISOString();

            dbManager.db.run(
                "UPDATE cards SET repetitions = ?, efactor = ?, interval = ?, nextReviewDate = ?, totalMistakes = ? WHERE question = ?",
                [card.repetitions, card.efactor, card.interval, card.nextReviewDate, card.totalMistakes, card.question]
            );
            await dbManager.saveDbToIndexedDB();
        },

        suspend: async function(cardQuestion, updateTextareaStats) {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isSuspended = true;
                dbManager.db.run("UPDATE cards SET isSuspended = 1 WHERE question = ?", [cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                await this.updateDueCount();
                updateTextareaStats();
            }
        },

        restore: async function(cardQuestion, updateTextareaStats) {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isSuspended = false;
                card.nextReviewDate = this.getNowISO();
                dbManager.db.run("UPDATE cards SET isSuspended = 0, nextReviewDate = ? WHERE question = ?", [card.nextReviewDate, cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                await this.updateDueCount();
                updateTextareaStats();
            }
        },

        toggleStar: async function(cardQuestion, updateTextareaStats) {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isStarred = !card.isStarred;
                dbManager.db.run("UPDATE cards SET isStarred = ? WHERE question = ?", [card.isStarred ? 1 : 0, cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                updateTextareaStats();
            }
        },

        deleteCard: async function(cardQuestion, wordListInput, updateTextareaStats) {
            if (allCards.has(cardQuestion)) {
                allCards.delete(cardQuestion);
                dbManager.db.run("DELETE FROM cards WHERE question = ?", [cardQuestion]);
                dbManager.db.run("DELETE FROM review_history WHERE question = ?", [cardQuestion]);
                await dbManager.saveDbToIndexedDB();

                const currentText = wordListInput.value;
                const lines = currentText.split('\n');
                const newLines = lines.filter(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return true;

                    const parts = line.split('|').map(part => part.trim());
                    return parts.length === 0 || parts[0] !== cardQuestion;
                });
                const newText = newLines.join('\n');

                if (currentText !== newText) {
                    wordListInput.value = newText;
                    localStorage.setItem(WORD_LIST_STORAGE_KEY, newText);
                }

                await this.updateDueCount();
                updateTextareaStats();
            }
        },

        updateDueCount: async function(getUIElements, translations, cramButton) {
            if (!getUIElements) return;

            const { languageSelect, startButton, wordListInput } = getUIElements();
            const scope = document.querySelector('input[name="review-scope"]:checked').value;

            let dueCards;
            let activeCards;

            if (scope === 'textarea') {
                const text = wordListInput.value.trim();
                const currentIds = new Set(text.split('\n')
                    .filter(line => {
                        const trimmedLine = line.trim();
                        return !trimmedLine.startsWith('#') && trimmedLine !== '';
                    })
                    .map(line => line.split('|')[0].trim()));
                dueCards = this.getDueCards().filter(card => currentIds.has(card.question));
                activeCards = this.getAllActiveCards().filter(card => currentIds.has(card.question));
            } else if (scope === 'starred') {
                dueCards = this.getDueCards().filter(card => card.isStarred);
                activeCards = this.getAllActiveCards().filter(card => card.isStarred);
            } else {
                dueCards = this.getDueCards();
                activeCards = this.getAllActiveCards();
            }

            const dueCount = dueCards.length;
            const lang = languageSelect.value;
            const template = translations[lang].smartReviewButton || 'Smart Review ({dueCount})';
            startButton.textContent = template.replace('{dueCount}', dueCount);
            startButton.disabled = dueCount === 0;

            if (cramButton) {
                cramButton.disabled = activeCards.length === 0;
            }
        }
    };
}
