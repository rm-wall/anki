import { dbManager, WORD_LIST_STORAGE_KEY, LANGUAGE_STORAGE_KEY, REVIEW_SCOPE_KEY } from '../database/dbManager.js';

export function setupEventHandlers(state, elements, cardManager, gameFlow, uiHelpers, fileOps, translations) {
    // Language change
    elements.languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));

    // Modal buttons
    elements.showErrorsButton.addEventListener('click', uiHelpers.showAllCardsModal);

    // Redo button
    elements.redoButton.addEventListener('click', () => {
        if (!state.lastCorrectlyAnsweredCard) return;

        state.isPracticingAgain = true;

        state.sessionCards = state.sessionCards.filter(card => card.question !== state.lastCorrectlyAnsweredCard.question);
        state.sessionCards.unshift(state.lastCorrectlyAnsweredCard);
        state.lastCorrectlyAnsweredCard = null;

        elements.answerInput.value = '';
        elements.answerInput.disabled = false;
        elements.feedbackEl.innerHTML = '&nbsp;';
        elements.feedbackEl.className = '';
        elements.continueButton.style.display = 'none';
        elements.redoButton.style.display = 'none';
        elements.suspendButton.style.display = 'none';
        state.isChecking = false;
        state.isAnswerCorrect = false;

        gameFlow.displayNextCard();
        elements.answerInput.focus();
    });

    // Suspend button
    elements.suspendButton.addEventListener('click', async () => {
        const currentCard = state.cardOnDisplay;
        if (currentCard) {
            await cardManager.suspend(currentCard.question, uiHelpers.updateTextareaStats);
            state.sessionCards = state.sessionCards.filter(card => card.question !== currentCard.question);
            gameFlow.proceedToNextCard();
        }
    });

    // Skip button
    elements.skipButton.addEventListener('click', () => {
        const currentCard = state.cardOnDisplay;
        if (currentCard) {
            state.sessionCards = state.sessionCards.filter(card => card.question !== currentCard.question);
            gameFlow.proceedToNextCard();
        }
    });

    // Continue button
    elements.continueButton.addEventListener('click', gameFlow.proceedToNextCard);

    // Answer input
    function autoResizeTextarea() {
        elements.answerInput.style.height = 'auto';
        elements.answerInput.style.height = Math.min(elements.answerInput.scrollHeight, 200) + 'px';

        if (elements.answerInput.value.trim() === '') {
            elements.answerHint.style.visibility = 'visible';
        } else {
            elements.answerHint.style.visibility = 'hidden';
        }
    }

    elements.answerInput.addEventListener('input', autoResizeTextarea);

    elements.answerInput.addEventListener('keydown', (event) => {
        console.log('answerInput keydown:', {
            key: event.key,
            isChecking: state.isChecking,
            isAnswerCorrect: state.isAnswerCorrect,
            disabled: elements.answerInput.disabled,
            autoAdvance: elements.autoAdvanceCheckbox.checked,
            timestamp: new Date().toISOString()
        });

        if (event.key === 'Enter') {
            event.stopPropagation();
            event.preventDefault();
            gameFlow.checkAnswer();
        }
    });

    // Navigation buttons
    elements.restartButton.addEventListener('click', () => uiHelpers.showSetup(cardManager));
    elements.terminateButton.addEventListener('click', gameFlow.showSummary);

    // Finish round button
    elements.finishRoundButton.addEventListener('click', () => {
        if (!state.pendingGracefulExit) {
            state.pendingGracefulExit = true;
            const lang = elements.languageSelect.value;
            const t = (key, fallback) => translations[lang][key] || fallback;
            elements.finishRoundButton.textContent = t('finishRoundPendingButton', 'Finishing round...');
            elements.finishRoundButton.disabled = true;

            state.sessionCards = state.sessionCards.filter(card => card.hasBeenAttempted);

            if (state.sessionCards.length === 0) {
                gameFlow.showSummary();
            } else {
                gameFlow.updateRemainingCards();
            }
        }
    });

    // Import/Export textarea
    elements.importFromTextareaButton.addEventListener('click', async () => {
        await cardManager.syncFromTextarea(elements.wordListInput, uiHelpers.updateTextareaStats);

        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        const originalText = t('syncButtonLabel', 'Sync');
        elements.importFromTextareaButton.textContent = t('syncSuccessLabel', 'Synced!');
        elements.importFromTextareaButton.disabled = true;
        elements.importFromTextareaButton.style.backgroundColor = '#34c759';

        setTimeout(() => {
            elements.importFromTextareaButton.textContent = originalText;
            elements.importFromTextareaButton.disabled = false;
            elements.importFromTextareaButton.style.backgroundColor = '';
        }, 2000);
    });

    elements.exportTextareaButton.addEventListener('click', () => {
        const textareaContent = elements.wordListInput.value;

        if (!textareaContent.trim()) {
            const lang = elements.languageSelect.value;
            const t = (key, fallback) => translations[lang][key] || fallback;
            alert(t('exportEmptyWarning', 'Textarea is empty, nothing to export.'));
            return;
        }

        const blob = new Blob([textareaContent], { type: 'text/plain;charset=utf-8' });
        const downloadLink = document.createElement('a');
        const fileName = `anki_wordlist_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}.txt`;
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);

        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;
        const originalText = t('exportTextareaButtonLabel', 'Export');
        elements.exportTextareaButton.textContent = t('exportSuccessLabel', 'Exported!');
        elements.exportTextareaButton.disabled = true;
        elements.exportTextareaButton.style.backgroundColor = '#34c759';

        setTimeout(() => {
            elements.exportTextareaButton.textContent = originalText;
            elements.exportTextareaButton.disabled = false;
            elements.exportTextareaButton.style.backgroundColor = '';
        }, 2000);
    });

    // Modal close
    const closeAllCardsModal = () => {
        elements.errorModal.style.display = 'none';
        cardManager.updateDueCount();
    };

    elements.closeModalButton.addEventListener('click', closeAllCardsModal);

    // Track mouse down for modal close
    let mouseDownTarget = null;
    window.addEventListener('mousedown', (event) => {
        mouseDownTarget = event.target;
    });

    window.addEventListener('click', (event) => {
        if (event.target == elements.errorModal && mouseDownTarget == elements.errorModal) closeAllCardsModal();
        if (event.target == elements.settingsModal && mouseDownTarget == elements.settingsModal) elements.settingsModal.style.display = 'none';
        if (event.target == elements.editCardModal && mouseDownTarget == elements.editCardModal) elements.editCardModal.style.display = 'none';
        if (event.target == elements.historyModal && mouseDownTarget == elements.historyModal) closeHistoryModal();
    });

    // Wordlist input
    elements.wordListInput.addEventListener('input', async () => {
        localStorage.setItem(WORD_LIST_STORAGE_KEY, elements.wordListInput.value);
    });

    // Modal actions
    elements.modalIncorrectListEl.addEventListener('click', async (event) => {
        const target = event.target;
        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        if (target.matches('.tab-btn')) {
            const activeViewBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
            const activeFilterBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');

            let viewType = activeViewBtn ? activeViewBtn.dataset.view : 'current';
            let filterType = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';

            if (target.dataset.view) viewType = target.dataset.view;
            if (target.dataset.filter) filterType = target.dataset.filter;

            uiHelpers.renderAllCardsModal(viewType, filterType);

        } else if (target.matches('.action-btn')) {
            const scrollContainer = elements.modalIncorrectListEl.querySelector('.table-scroll-container');
            const previousScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

            const action = target.dataset.action;
            const cardId = target.dataset.cardId;
            if (action === 'edit') {
                await openEditModal(cardId);
                return;
            } else if (action === 'suspend') await cardManager.suspend(cardId, uiHelpers.updateTextareaStats);
            else if (action === 'restore') await cardManager.restore(cardId, uiHelpers.updateTextareaStats);
            else if (action === 'toggleStar') await cardManager.toggleStar(cardId, uiHelpers.updateTextareaStats);
            else if (action === 'viewHistory') {
                openHistoryModal(cardId);
                return;
            }
            else if (action === 'delete') {
                if (confirm(t('confirmDeleteCard', 'Are you sure you want to permanently delete this card?'))) {
                    await cardManager.deleteCard(cardId, elements.wordListInput, uiHelpers.updateTextareaStats);
                }
            }

            const activeViewBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
            const activeFilterBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
            uiHelpers.renderAllCardsModal(
                activeViewBtn ? activeViewBtn.dataset.view : 'current',
                activeFilterBtn ? activeFilterBtn.dataset.filter : 'active'
            );

            const newScrollContainer = elements.modalIncorrectListEl.querySelector('.table-scroll-container');
            if (newScrollContainer) {
                newScrollContainer.scrollTop = previousScrollTop;
            }
        }
    });

    // Star button
    elements.starButton.addEventListener('click', async () => {
        if (state.cardOnDisplay) {
            await cardManager.toggleStar(state.cardOnDisplay.question, uiHelpers.updateTextareaStats);
            state.cardOnDisplay.isStarred = !state.cardOnDisplay.isStarred;
            elements.starButton.textContent = state.cardOnDisplay.isStarred ? '★' : '☆';
            elements.starButton.classList.toggle('starred', state.cardOnDisplay.isStarred);
            elements.answerInput.focus();
        }
    });

    // File import
    elements.importFileButton.addEventListener('click', () => elements.fileInput.click());

    const containerEl = document.querySelector('.container');
    ['dragover', 'dragleave', 'drop'].forEach(eventName => {
        window.addEventListener(eventName, e => e.preventDefault());
        if (containerEl) containerEl.addEventListener(eventName, e => e.preventDefault());
    });
    if (containerEl) {
        containerEl.addEventListener('dragover', () => containerEl.classList.add('dragover'));
        containerEl.addEventListener('dragleave', () => containerEl.classList.remove('dragover'));
        containerEl.addEventListener('drop', (event) => {
            containerEl.classList.remove('dragover');
            if (event.dataTransfer.files.length > 0) fileOps.handleFile(event.dataTransfer.files[0], uiHelpers.updateTextareaStats);
        });
    }
    elements.fileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) fileOps.handleFile(event.target.files[0], uiHelpers.updateTextareaStats);
    });

    // Export/import cards modal
    elements.errorModal.addEventListener('click', (event) => {
        if (event.target.matches('#export-cards-button')) fileOps.exportCards();
        if (event.target.matches('#import-cards-button')) {
            const importInput = elements.errorModal.querySelector('#import-cards-input');
            if (importInput) importInput.click();
        }
    });
    elements.errorModal.addEventListener('change', (event) => {
        if (event.target.matches('#import-cards-input')) fileOps.importCards(event, uiHelpers.renderAllCardsModal);
    });

    // Settings
    elements.settingsButton.addEventListener('click', () => {
        populateSettingsModal();
        elements.settingsModal.style.display = 'flex';
    });
    elements.settingsModalCloseButton.addEventListener('click', () => elements.settingsModal.style.display = 'none');
    elements.saveSettingsButton.addEventListener('click', async () => {
        await saveSettings();
        elements.settingsModal.style.display = 'none';
    });
    elements.resetSettingsButton.addEventListener('click', async () => {
        Object.assign(state.srsSettings, state.defaultSrsSettings);
        populateSettingsModal();
        await saveSettings();
    });
    elements.clearCacheButton.addEventListener('click', async () => {
        if (confirm(translations[elements.languageSelect.value].confirmClearCache)) {
            try {
                await dbManager.clearAllData();
                alert(translations[elements.languageSelect.value].cacheClearedAlert);
                location.reload();
            } catch (error) {
                console.error("Failed to clear data:", error);
                alert("Error clearing data. See console for details.");
            }
        }
    });

    // Database import/export
    const exportDatabaseButton = document.getElementById('export-database-button');
    const importDatabaseButton = document.getElementById('import-database-button');
    const importDatabaseInput = document.getElementById('import-database-input');

    if (exportDatabaseButton) {
        exportDatabaseButton.addEventListener('click', fileOps.exportDatabase);
    }
    if (importDatabaseButton) {
        importDatabaseButton.addEventListener('click', () => {
            importDatabaseInput.click();
        });
    }
    if (importDatabaseInput) {
        importDatabaseInput.addEventListener('change', (e) => fileOps.importDatabase(e, uiHelpers.updateTextareaStats));
    }

    // Global keyboard
    document.addEventListener('keydown', (event) => {
        console.log('document keydown:', {
            key: event.key,
            continueButtonVisible: elements.continueButton.style.display !== 'none',
            isAnswerCorrect: state.isAnswerCorrect,
            modalOpen: elements.errorModal.style.display === 'block' || elements.settingsModal.style.display === 'flex',
            timestamp: new Date().toISOString()
        });

        if ((event.metaKey || event.ctrlKey) && event.key === 's') {
            event.preventDefault();
            elements.importFromTextareaButton.click();
            return;
        }

        if (elements.errorModal.style.display === 'block' || elements.settingsModal.style.display === 'flex') return;
        if (event.key === 'Enter' && elements.continueButton.style.display !== 'none') {
            event.preventDefault();
            if (state.isAnswerCorrect) gameFlow.proceedToNextCard();
        }
    });

    // Edit card modal
    async function openEditModal(cardQuestion) {
        const card = state.allCards.get(cardQuestion);
        if (!card) return;

        state.currentEditingCard = cardQuestion;
        elements.editQuestionInput.value = card.question;
        elements.editAnswersInput.value = card.answers.slice(1).join(' | ');
        elements.editCardModal.style.display = 'flex';
        elements.editQuestionInput.focus();
    }

    async function saveCardEdit() {
        if (!state.currentEditingCard) return;

        const newQuestion = elements.editQuestionInput.value.trim();
        const answersStr = elements.editAnswersInput.value.trim();

        if (!newQuestion || !answersStr) {
            alert('问题和答案不能为空！');
            return;
        }

        const answerParts = answersStr.split('|').map(a => a.trim()).filter(a => a);
        const newAnswers = [newQuestion, ...answerParts];

        const card = state.allCards.get(state.currentEditingCard);
        if (card) {
            const oldQuestion = card.question;

            if (oldQuestion !== newQuestion) {
                dbManager.db.run("DELETE FROM cards WHERE question = ?", [oldQuestion]);
                dbManager.db.run("DELETE FROM review_history WHERE question = ?", [oldQuestion]);
                dbManager.db.run(
                    "INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    [newQuestion, JSON.stringify(newAnswers), card.repetitions, card.efactor, card.interval, card.nextReviewDate, card.isSuspended ? 1 : 0, card.isStarred ? 1 : 0, card.totalMistakes || 0]
                );
                state.allCards.delete(oldQuestion);
                card.question = newQuestion;
                state.allCards.set(newQuestion, card);
            } else {
                dbManager.db.run("UPDATE cards SET answers = ? WHERE question = ?", [JSON.stringify(newAnswers), newQuestion]);
            }

            card.answers = newAnswers;
            await dbManager.saveDbToIndexedDB();

            const currentText = elements.wordListInput.value;
            const lines = currentText.split('\n');
            const newLines = lines.map(line => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('#')) return line;

                const parts = line.split('|').map(part => part.trim());
                if (parts.length > 0 && parts[0] === oldQuestion) {
                    return newAnswers.join(' | ');
                }
                return line;
            });
            const newText = newLines.join('\n');

            if (currentText !== newText) {
                elements.wordListInput.value = newText;
                localStorage.setItem(WORD_LIST_STORAGE_KEY, newText);
            }

            if (state.cardOnDisplay && state.cardOnDisplay.question === oldQuestion) {
                state.cardOnDisplay.question = newQuestion;
                state.cardOnDisplay.answers = newAnswers;
                elements.questionEl.textContent = newQuestion;
            }

            elements.editCardModal.style.display = 'none';
            state.currentEditingCard = null;

            if (elements.errorModal.style.display === 'flex' || elements.errorModal.style.display === 'block') {
                const scrollContainer = elements.modalIncorrectListEl.querySelector('.table-scroll-container');
                const previousScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

                const activeViewBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
                const activeFilterBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
                uiHelpers.renderAllCardsModal(
                    activeViewBtn ? activeViewBtn.dataset.view : 'current',
                    activeFilterBtn ? activeFilterBtn.dataset.filter : 'active'
                );

                const newScrollContainer = elements.modalIncorrectListEl.querySelector('.table-scroll-container');
                if (newScrollContainer) {
                    newScrollContainer.scrollTop = previousScrollTop;
                }
            }

            uiHelpers.updateTextareaStats();
        }
    }

    function closeEditModal() {
        elements.editCardModal.style.display = 'none';
        state.currentEditingCard = null;
    }

    elements.editCardButton.addEventListener('click', () => {
        if (state.cardOnDisplay) {
            openEditModal(state.cardOnDisplay.question);
        }
    });

    elements.editCardModalCloseButton.addEventListener('click', closeEditModal);
    elements.cancelEditButton.addEventListener('click', closeEditModal);
    elements.saveEditButton.addEventListener('click', saveCardEdit);

    // History modal
    function openHistoryModal(cardQuestion) {
        const card = state.allCards.get(cardQuestion);
        if (!card) return;

        const history = dbManager.getReviewHistory(cardQuestion);
        const t = (key, fallback) => translations[elements.languageSelect.value][key] || fallback;

        elements.historyCardInfo.textContent = `${card.question} (${card.answers.slice(1).join(' | ')})`;

        if (history.length === 0) {
            elements.historyList.innerHTML = `<p>${t('noHistoryFound', 'No review history found')}</p>`;
        } else {
            const historyHTML = `
                <table class="cards-table">
                    <thead>
                        <tr>
                            <th>${t('historyDate', 'Date')}</th>
                            <th>${t('historyResult', 'Result')}</th>
                            <th>${t('historyInterval', 'Interval(d)')}</th>
                            <th>${t('historyEfactor', 'E-Factor')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${history.map(h => {
                            const date = new Date(h.reviewDate);
                            const dateStr = date.toLocaleString(elements.languageSelect.value === 'zh-CN' ? 'zh-CN' : elements.languageSelect.value === 'ja' ? 'ja-JP' : 'en-US');
                            const resultText = h.isCorrect ? t('historyCorrect', 'Correct') : t('historyIncorrect', 'Incorrect');
                            const resultClass = h.isCorrect ? 'correct' : 'incorrect';
                            const intervalDays = ((h.intervalAtReview || 0) / 1440).toFixed(1);
                            return `
                                <tr>
                                    <td>${dateStr}</td>
                                    <td class="${resultClass}">${resultText}</td>
                                    <td>${intervalDays}</td>
                                    <td>${(h.efactorAtReview || 2.5).toFixed(2)}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            `;
            elements.historyList.innerHTML = historyHTML;
        }

        elements.historyModal.style.display = 'flex';
    }

    function closeHistoryModal() {
        elements.historyModal.style.display = 'none';
    }

    elements.historyModalCloseButton.addEventListener('click', closeHistoryModal);

    // Settings helpers
    function populateSettingsModal() {
        elements.initialIntervalValueInput.value = state.srsSettings.initialInterval.value;
        elements.initialIntervalUnitInput.value = state.srsSettings.initialInterval.unit;
        elements.secondIntervalValueInput.value = state.srsSettings.secondInterval.value;
        elements.secondIntervalUnitInput.value = state.srsSettings.secondInterval.unit;
        elements.lapseIntervalValueInput.value = state.srsSettings.lapseInterval.value;
        elements.lapseIntervalUnitInput.value = state.srsSettings.lapseInterval.unit;
        elements.requiredStreakInput.value = state.srsSettings.requiredStreak;
        elements.penaltyInput.value = state.srsSettings.penalty;
    }

    async function saveSettings() {
        state.srsSettings.initialInterval.value = parseInt(elements.initialIntervalValueInput.value, 10) || state.defaultSrsSettings.initialInterval.value;
        state.srsSettings.initialInterval.unit = elements.initialIntervalUnitInput.value;
        state.srsSettings.secondInterval.value = parseInt(elements.secondIntervalValueInput.value, 10) || state.defaultSrsSettings.secondInterval.value;
        state.srsSettings.secondInterval.unit = elements.secondIntervalUnitInput.value;
        state.srsSettings.lapseInterval.value = parseInt(elements.lapseIntervalValueInput.value, 10) || state.defaultSrsSettings.lapseInterval.value;
        state.srsSettings.lapseInterval.unit = elements.lapseIntervalUnitInput.value;
        state.srsSettings.requiredStreak = parseInt(elements.requiredStreakInput.value, 10) || state.defaultSrsSettings.requiredStreak;
        state.srsSettings.penalty = parseInt(elements.penaltyInput.value, 10) || state.defaultSrsSettings.penalty;

        dbManager.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", ['srsSettings', JSON.stringify(state.srsSettings)]);
        await dbManager.saveDbToIndexedDB();
    }

    // Language
    async function setLanguage(lang) {
        const translation = translations[lang];
        if (!translation) return;

        const container = document.querySelector('.container');

        if (container) {
            container.style.opacity = '0';
        }

        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translation[key]) el.innerHTML = translation[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translation[key]) el.placeholder = translation[key];
        });
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        elements.languageSelect.value = lang;
        await cardManager.updateDueCount();
        updateLastUpdatedTime(lang);
        uiHelpers.updateTextareaStats();
        gameFlow.updateRemainingCards();

        setTimeout(() => {
            try {
                if (typeof window.adjustTextareaHeight === 'function') {
                    window.adjustTextareaHeight(false);
                }
            } catch (error) {
                console.error('Error adjusting textarea height:', error);
            } finally {
                if (container) {
                    container.style.opacity = '1';
                }
            }
        }, 100);
    }

    function updateLastUpdatedTime(lang) {
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
            const lastModified = new Date(document.lastModified);
            const currentLang = translations[lang] ? lang : 'en';
            const locale = currentLang.replace('_', '-');
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const dateString = lastModified.toLocaleDateString(locale, options);
            const label = translations[currentLang].lastUpdatedLabel;
            lastUpdatedElement.textContent = `${label} ${dateString}`;
        }
    }

    // Scope change
    elements.scopeAllRadio.addEventListener('change', () => {
        localStorage.setItem(REVIEW_SCOPE_KEY, 'all');
        cardManager.updateDueCount();
    });
    elements.scopeTextareaRadio.addEventListener('change', () => {
        localStorage.setItem(REVIEW_SCOPE_KEY, 'textarea');
        cardManager.updateDueCount();
    });
    elements.scopeStarredRadio.addEventListener('change', () => {
        localStorage.setItem(REVIEW_SCOPE_KEY, 'starred');
        cardManager.updateDueCount();
    });
}
