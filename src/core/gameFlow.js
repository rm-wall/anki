import { dbManager } from '../database/dbManager.js';
import { calculateEditDistance, highlightAnswerDifferences, shuffle, detectStringType } from '../utils/algorithms.js';

export function createGameFlow(state, elements, cardManager, translations) {
    const {
        sessionCards,
        sessionCorrectCount,
        sessionIncorrectCount,
        sessionIncorrectCards,
        reviewAgainPile,
        isChecking,
        pendingGracefulExit,
        isAnswerCorrect,
        isCramming,
        allCards,
        cardOnDisplay,
        lastCorrectlyAnsweredCard,
        isPracticingAgain,
        lastIncorrectAnswer,
        srsSettings
    } = state;

    async function startSession(cards) {
        if (cards.length === 0) {
            const alertKey = state.isCramming ? 'noCardsToCram' : 'noDueCards';
            alert(translations[elements.languageSelect.value][alertKey]);
            return;
        }

        if (elements.randomOrderCheckbox.checked) shuffle(cards);

        const requiredStreakSetting = state.srsSettings.requiredStreak;
        state.sessionCards.length = 0;
        state.sessionCards.push(...cards.map(card => ({
            ...card,
            correctStreak: 0,
            sessionRequiredStreak: requiredStreakSetting,
            hasBeenAttempted: false
        })));
        state.currentCardIndex = 0;
        state.sessionCorrectCount = 0;
        state.sessionIncorrectCount = 0;
        state.sessionIncorrectCards.length = 0;
        state.pendingGracefulExit = false;

        state.isChecking = false;
        state.isAnswerCorrect = false;

        elements.setupEl.style.display = 'none';
        elements.summaryEl.style.display = 'none';
        elements.cardEl.style.display = 'block';
        elements.answerInput.disabled = false;
        elements.feedbackEl.innerHTML = '&nbsp;';
        elements.feedbackEl.className = '';
        elements.continueButton.style.display = 'none';

        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;
        elements.finishRoundButton.textContent = t('finishRoundButton', 'Finish Round');
        elements.finishRoundButton.disabled = false;

        displayNextCard();
    }

    async function startSmartReview(updateTextareaStats) {
        state.isCramming = false;
        await cardManager.syncFromTextarea(elements.wordListInput, updateTextareaStats);

        let dueCards;
        if (elements.scopeTextareaRadio.checked) {
            const text = elements.wordListInput.value.trim();
            const currentIds = new Set(text.split('\n')
                .filter(line => {
                    const trimmedLine = line.trim();
                    return !trimmedLine.startsWith('#') && trimmedLine !== '';
                })
                .map(line => line.split('|')[0].trim()));
            dueCards = cardManager.getDueCards().filter(card => currentIds.has(card.question));
        } else if (elements.scopeStarredRadio.checked) {
            dueCards = cardManager.getDueCards().filter(card => card.isStarred);
        } else {
            dueCards = cardManager.getDueCards();
        }

        await startSession(dueCards);
    }

    async function startCramSession(updateTextareaStats) {
        state.isCramming = true;
        await cardManager.syncFromTextarea(elements.wordListInput, updateTextareaStats);

        let activeCards;
        if (elements.scopeTextareaRadio.checked) {
            const text = elements.wordListInput.value.trim();
            const textareaOrder = text.split('\n')
                .filter(line => {
                    const trimmedLine = line.trim();
                    return !trimmedLine.startsWith('#') && trimmedLine !== '';
                })
                .map(line => line.split('|')[0].trim());
            const currentIds = new Set(textareaOrder);
            activeCards = Array.from(state.allCards.values()).filter(card => !card.isSuspended && currentIds.has(card.question));

            if (!elements.randomOrderCheckbox.checked) {
                activeCards.sort((a, b) => textareaOrder.indexOf(a.question) - textareaOrder.indexOf(b.question));
            }
        } else if (elements.scopeStarredRadio.checked) {
            activeCards = Array.from(state.allCards.values()).filter(card => !card.isSuspended && card.isStarred);
        } else {
            activeCards = cardManager.getAllActiveCards();
        }

        await startSession(activeCards);
    }

    function updateProgress(card) {
        const progress = Math.max(0, (card.correctStreak || 0) / card.sessionRequiredStreak);
        elements.progressBar.style.width = `${progress * 100}%`;
        elements.progressText.textContent = `${card.correctStreak || 0}/${card.sessionRequiredStreak}`;

        if (progress < 1) {
            elements.progressBar.classList.remove('celebrating');
        }

        console.log('[Progress Update]', {
            question: card.question,
            correctStreak: card.correctStreak || 0,
            sessionRequiredStreak: card.sessionRequiredStreak,
            progressPercentage: `${(progress * 100).toFixed(1)}%`
        });
    }

    function updateRemainingCards() {
        if (state.sessionCards.length > 0) {
            const uniqueCardsRemaining = new Set(state.sessionCards.map(card => card.question)).size;
            const lang = elements.languageSelect.value;
            const remainingText = translations[lang].remainingCards.replace('{count}', uniqueCardsRemaining);
            elements.remainingCardsEl.textContent = remainingText;
        }
    }

    function displayNextCard() {
        state.isChecking = false;
        state.isAnswerCorrect = false;

        if (state.sessionCards.length > 0) {
            state.cardOnDisplay = state.sessionCards[0];
            elements.questionEl.textContent = state.cardOnDisplay.question;
            elements.answerInput.value = '';
            elements.answerInput.style.height = 'auto';
            elements.answerHint.style.visibility = 'visible';
            setTimeout(() => elements.answerInput.focus(), 0);

            elements.starButton.textContent = state.cardOnDisplay.isStarred ? '★' : '☆';
            elements.starButton.classList.toggle('starred', state.cardOnDisplay.isStarred);

            updateProgress(state.cardOnDisplay);
            updateRemainingCards();
        } else {
            state.cardOnDisplay = null;
            if (state.pendingGracefulExit) {
                state.pendingGracefulExit = false;
            }
            showSummary();
        }
    }

    async function showSummary() {
        state.isChecking = false;
        state.isAnswerCorrect = false;

        if (!state.isCramming && state.sessionIncorrectCards.length > 0) {
            for (const card of state.sessionIncorrectCards) {
                const cardData = state.allCards.get(card.question);
                if (cardData) {
                    await cardManager.update(card.question, false, state.srsSettings);
                }
            }
        }

        elements.correctCountEl.textContent = state.sessionCorrectCount;
        elements.incorrectCountEl.textContent = state.sessionIncorrectCount;
        elements.cardEl.style.display = 'none';
        elements.summaryEl.style.display = 'block';
        elements.continueButton.style.display = 'none';

        if (state.sessionIncorrectCards.length > 0) {
            elements.incorrectWordsListEl.innerHTML = state.sessionIncorrectCards.map(card => `<div>${card.answers.join(' | ')}</div>`).join('');
            elements.incorrectWordsContainer.style.display = 'block';
        } else {
            elements.incorrectWordsContainer.style.display = 'none';
        }
        await cardManager.updateDueCount();
    }

    async function checkAnswer() {
        console.log('checkAnswer called:', {
            inputValue: elements.answerInput.value,
            currentCard: state.cardOnDisplay,
            isChecking: state.isChecking,
            autoAdvance: elements.autoAdvanceCheckbox.checked,
            timestamp: new Date().toISOString()
        });

        if (state.isChecking) {
            console.log('checkAnswer aborted: already checking');
            return;
        }
        const userAnswer = elements.answerInput.value.trim();
        if (userAnswer === '') return;

        state.isChecking = true;
        elements.answerInput.disabled = true;

        const currentCard = state.cardOnDisplay;
        const processedUserAnswer = userAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();
        const processedAnswers = currentCard.answers.map(a => a.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase());
        const penalty = parseInt(elements.penaltyInput.value, 10) || 2;

        currentCard.hasBeenAttempted = true;

        if (processedAnswers.includes(processedUserAnswer)) {
            state.isAnswerCorrect = true;
            state.lastCorrectlyAnsweredCard = currentCard;
            state.lastIncorrectAnswer = null;

            if (!state.isPracticingAgain) {
                currentCard.correctStreak = (currentCard.correctStreak || 0) + 1;
                if (currentCard.correctStreak > currentCard.sessionRequiredStreak) {
                    currentCard.correctStreak = currentCard.sessionRequiredStreak;
                }
            }

            updateProgress(currentCard);

            await handleCorrectAnswer(currentCard, state.isPracticingAgain);

            state.isPracticingAgain = false;

            const cardIndex = state.sessionCards.findIndex(c => c.question === currentCard.question);
            if (cardIndex !== -1) {
                state.sessionCards.splice(cardIndex, 1);
            }

            if (currentCard.correctStreak < currentCard.sessionRequiredStreak) {
                state.sessionCards.push(currentCard);
            } else {
                if (!state.isPracticingAgain) {
                    celebrateCompletion();
                }
            }

            if (elements.autoAdvanceCheckbox.checked) {
                setTimeout(proceedToNextCard, 1500);
            } else {
                elements.continueButton.style.display = 'inline-block';
                elements.redoButton.style.display = 'inline-block';
                elements.suspendButton.style.display = 'inline-block';
            }
        } else {
            state.isAnswerCorrect = false;

            const isSameIncorrectAnswer = state.lastIncorrectAnswer !== null &&
                                         state.lastIncorrectAnswer.cardQuestion === currentCard.question &&
                                         state.lastIncorrectAnswer.answer === processedUserAnswer;

            if (!state.isPracticingAgain && !isSameIncorrectAnswer) {
                currentCard.sessionRequiredStreak += penalty;
            }

            state.lastIncorrectAnswer = {
                cardQuestion: currentCard.question,
                answer: processedUserAnswer
            };

            updateProgress(currentCard);

            await handleIncorrectAnswer(currentCard, state.isPracticingAgain);

            state.isChecking = false;
            elements.answerInput.disabled = false;
            elements.answerInput.focus();
        }
    }

    function proceedToNextCard() {
        console.log('proceedToNextCard called:', {
            currentCardIndex: state.currentCardIndex,
            sessionCardsLength: state.sessionCards.length,
            isChecking: state.isChecking,
            isAnswerCorrect: state.isAnswerCorrect,
            autoAdvance: elements.autoAdvanceCheckbox.checked,
            timestamp: new Date().toISOString()
        });

        state.isChecking = false;
        state.isAnswerCorrect = false;
        elements.feedbackEl.innerHTML = '&nbsp;';
        elements.feedbackEl.className = '';
        elements.answerInput.disabled = false;
        elements.continueButton.style.display = 'none';
        elements.redoButton.style.display = 'none';
        elements.suspendButton.style.display = 'none';
        displayNextCard();
    }

    function celebrateCompletion() {
        const currentWidth = elements.progressBar.style.width;
        if (currentWidth === '100%') {
            elements.progressBar.classList.add('celebrating');
        }
    }

    async function handleCorrectAnswer(card, skipCountUpdate = false) {
        const feedbackText = translations[elements.languageSelect.value].correctFeedback;
        const answersHtml = '<div>&nbsp;</div>' + card.answers.slice(1).map(ans => `<div>${ans}</div>`).join('');
        elements.feedbackEl.innerHTML = feedbackText.replace('{answers}', answersHtml);
        elements.feedbackEl.className = 'correct';

        if (!skipCountUpdate) {
            state.sessionCorrectCount++;
        }

        if (!state.isCramming && !skipCountUpdate) {
            const cardData = state.allCards.get(card.question);
            if (cardData) {
                await dbManager.addReviewHistory(card.question, true, cardData);
            }

            if (card.correctStreak >= state.srsSettings.requiredStreak) {
                await cardManager.update(card.question, true, state.srsSettings);
            }
        }
    }

    async function handleIncorrectAnswer(card, skipCountUpdate = false) {
        const feedbackText = translations[elements.languageSelect.value].incorrectFeedback;
        const userAnswer = elements.answerInput.value.trim();

        let closestAnswer = card.answers[1];
        let minDistance = Infinity;

        const normalizedUser = userAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

        // Detect the type of user's input (romaji or CJK)
        const userType = detectStringType(userAnswer);

        // First pass: try to find the closest answer of the SAME type
        let sameTypeAnswers = [];
        for (let i = 1; i < card.answers.length; i++) {
            const ans = card.answers[i];
            const ansType = detectStringType(ans);

            if (ansType === userType) {
                sameTypeAnswers.push({ index: i, answer: ans });
            }
        }

        // If we have same-type answers, find the closest among them
        if (sameTypeAnswers.length > 0) {
            for (const { answer: ans } of sameTypeAnswers) {
                const normalizedAns = ans.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();
                const distance = calculateEditDistance(normalizedUser, normalizedAns);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestAnswer = ans;
                }
            }
        } else {
            // Fallback: if no same-type answers, use all answers
            for (let i = 1; i < card.answers.length; i++) {
                const ans = card.answers[i];
                const normalizedAns = ans.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

                const distance = calculateEditDistance(normalizedUser, normalizedAns);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestAnswer = ans;
                }
            }
        }

        const answersHtml = '<div>&nbsp;</div>' + card.answers.slice(1).map(ans => {
            if (ans === closestAnswer) {
                const { userResult, correctResult } = highlightAnswerDifferences(userAnswer, ans);
                return `<div><div>${correctResult}</div></div>`;
            } else {
                return `<div>${ans}</div>`;
            }
        }).join('');

        elements.feedbackEl.innerHTML = feedbackText.replace('{answers}', answersHtml);
        elements.feedbackEl.className = 'incorrect';

        if (!skipCountUpdate) {
            state.sessionIncorrectCount++;
            if (!state.sessionIncorrectCards.some(c => c.question === card.question)) {
                state.sessionIncorrectCards.push(card);
            }
            if (!state.isCramming && !state.reviewAgainPile.some(c => c.question === card.question)) {
                state.reviewAgainPile.push(card);
            }
        }

        if (!state.isCramming && !skipCountUpdate) {
            const cardData = state.allCards.get(card.question);
            if (cardData) {
                await dbManager.addReviewHistory(card.question, false, cardData);
            }

            await cardManager.update(card.question, false, state.srsSettings);
        }
    }

    return {
        startSession,
        startSmartReview,
        startCramSession,
        displayNextCard,
        showSummary,
        checkAnswer,
        proceedToNextCard,
        updateProgress,
        updateRemainingCards
    };
}
