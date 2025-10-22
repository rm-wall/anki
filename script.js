import translations from './src/i18n/translations.js';
import { dbManager, WORD_LIST_STORAGE_KEY, LANGUAGE_STORAGE_KEY, REVIEW_SCOPE_KEY } from './src/database/dbManager.js';
import { createCardManager } from './src/core/cardManager.js';
import { createGameFlow } from './src/core/gameFlow.js';
import { createUIHelpers } from './src/ui/uiHelpers.js';
import { createFileOperations } from './src/io/fileOperations.js';
import { setupEventHandlers } from './src/events/eventHandlers.js';

document.addEventListener('DOMContentLoaded', async () => {
    // DOM Elements
    const elements = {
        setupEl: document.getElementById('setup'),
        cardEl: document.getElementById('card'),
        summaryEl: document.getElementById('summary'),
        languageSelect: document.getElementById('language-select'),
        questionEl: document.getElementById('question'),
        answerInput: document.getElementById('answer-input'),
        answerHint: document.getElementById('answer-hint'),
        feedbackEl: document.getElementById('feedback'),
        startButton: document.getElementById('start-button'),
        randomOrderCheckbox: document.getElementById('random-order-checkbox'),
        wordListInput: document.getElementById('word-list-input'),
        restartButton: document.getElementById('restart-button'),
        terminateButton: document.getElementById('terminate-button'),
        showErrorsButton: document.getElementById('show-errors-button'),
        clearCacheButton: document.getElementById('clear-cache-button'),
        continueButton: document.getElementById('continue-button'),
        redoButton: document.getElementById('redo-button'),
        fileInput: document.getElementById('file-input'),
        autoAdvanceCheckbox: document.getElementById('auto-advance-checkbox'),
        correctCountEl: document.getElementById('correct-count'),
        incorrectCountEl: document.getElementById('incorrect-count'),
        incorrectWordsContainer: document.getElementById('incorrect-words-container'),
        incorrectWordsListEl: document.getElementById('incorrect-words-list'),
        errorModal: document.getElementById('error-modal'),
        closeModalButton: document.querySelector('.close-button'),
        modalIncorrectListEl: document.getElementById('modal-incorrect-list'),
        settingsModal: document.getElementById('settings-modal'),
        settingsButton: document.getElementById('settings-button'),
        saveSettingsButton: document.getElementById('save-settings-button'),
        resetSettingsButton: document.getElementById('reset-settings-button'),
        initialIntervalValueInput: document.getElementById('setting-initial-interval-value'),
        initialIntervalUnitInput: document.getElementById('setting-initial-interval-unit'),
        secondIntervalValueInput: document.getElementById('setting-second-interval-value'),
        secondIntervalUnitInput: document.getElementById('setting-second-interval-unit'),
        lapseIntervalValueInput: document.getElementById('setting-lapse-interval-value'),
        lapseIntervalUnitInput: document.getElementById('setting-lapse-interval-unit'),
        requiredStreakInput: document.getElementById('required-streak-input'),
        penaltyInput: document.getElementById('penalty-input'),
        settingsModalCloseButton: document.getElementById('settings-modal').querySelector('.close-button'),
        textareaStatsEl: document.getElementById('textarea-stats'),
        totalWordsStatEl: document.getElementById('total-words-stat'),
        newWordsStatEl: document.getElementById('new-words-stat'),
        learnedWordsStatEl: document.getElementById('learned-words-stat'),
        suspendedWordsStatEl: document.getElementById('suspended-words-stat'),
        starredWordsStatEl: document.getElementById('starred-words-stat'),
        scopeAllRadio: document.getElementById('scope-all'),
        scopeTextareaRadio: document.getElementById('scope-textarea'),
        scopeStarredRadio: document.getElementById('scope-starred'),
        starButton: document.getElementById('star-button'),
        suspendButton: document.getElementById('suspend-button'),
        skipButton: document.getElementById('skip-button'),
        progressBar: document.getElementById('progress-bar'),
        progressText: document.getElementById('progress-text'),
        remainingCardsEl: document.getElementById('remaining-cards'),
        importFileButton: document.getElementById('import-file-button'),
        importFromTextareaButton: document.getElementById('import-from-textarea-button'),
        exportTextareaButton: document.getElementById('export-textarea-button'),
        editCardModal: document.getElementById('edit-card-modal'),
        editCardButton: document.getElementById('edit-card-button'),
        editQuestionInput: document.getElementById('edit-question-input'),
        editAnswersInput: document.getElementById('edit-answers-input'),
        saveEditButton: document.getElementById('save-edit-button'),
        cancelEditButton: document.getElementById('cancel-edit-button'),
        editCardModalCloseButton: document.getElementById('edit-card-modal').querySelector('.close-button'),
        historyModal: document.getElementById('history-modal'),
        historyCardInfo: document.getElementById('history-card-info'),
        historyList: document.getElementById('history-list'),
        historyModalCloseButton: document.getElementById('history-modal').querySelector('.close-button'),
        finishRoundButton: document.getElementById('finish-round-button'),
    };

    let cramButton;

    // App State
    const state = {
        sessionCards: [],
        currentCardIndex: 0,
        sessionCorrectCount: 0,
        sessionIncorrectCount: 0,
        sessionIncorrectCards: [],
        reviewAgainPile: [],
        isChecking: false,
        pendingGracefulExit: false,
        isAnswerCorrect: false,
        isCramming: false,
        allCards: new Map(),
        cardOnDisplay: null,
        lastCorrectlyAnsweredCard: null,
        isPracticingAgain: false,
        lastIncorrectAnswer: null,
        srsSettings: {},
        defaultSrsSettings: {
            initialInterval: { value: 1, unit: 'days' },
            secondInterval: { value: 6, unit: 'days' },
            lapseInterval: { value: 10, unit: 'minutes' },
            requiredStreak: 2,
            penalty: 2,
        },
        currentEditingCard: null,
    };

    // Random order checkbox
    const savedRandomOrder = localStorage.getItem('randomOrder');
    if (savedRandomOrder !== null) {
        elements.randomOrderCheckbox.checked = savedRandomOrder === 'true';
    }
    elements.randomOrderCheckbox.addEventListener('change', () => {
        localStorage.setItem('randomOrder', elements.randomOrderCheckbox.checked);
    });

    // Create modules
    const cardManager = createCardManager(state.allCards);

    // Wrap updateDueCount with closure
    const originalUpdateDueCount = cardManager.updateDueCount;
    cardManager.updateDueCount = async () => {
        return originalUpdateDueCount.call(
            cardManager,
            () => elements,
            translations,
            cramButton
        );
    };

    const uiHelpers = createUIHelpers(state.allCards, elements, translations);
    const fileOps = createFileOperations(state.allCards, elements, translations, cardManager);
    const gameFlow = createGameFlow(state, elements, cardManager, translations);

    // Setup buttons
    function setupButtons() {
        elements.startButton.setAttribute('data-i18n', 'smartReviewButton');

        cramButton = document.createElement('button');
        cramButton.id = 'cram-button';
        cramButton.setAttribute('data-i18n', 'cramButton');
        elements.startButton.parentNode.insertBefore(cramButton, elements.startButton.nextSibling);

        elements.startButton.addEventListener('click', () => gameFlow.startSmartReview(uiHelpers.updateTextareaStats));
        cramButton.addEventListener('click', () => gameFlow.startCramSession(uiHelpers.updateTextareaStats));
    }

    // Settings functions
    async function loadSettings() {
        const res = dbManager.db.exec("SELECT value FROM settings WHERE key = 'srsSettings'");
        let savedSettings = {};
        if (res.length > 0 && res[0].values.length > 0) {
            savedSettings = JSON.parse(res[0].values[0][0]);
        }
        state.srsSettings = {
            initialInterval: { ...state.defaultSrsSettings.initialInterval, ...(savedSettings.initialInterval || {}) },
            secondInterval: { ...state.defaultSrsSettings.secondInterval, ...(savedSettings.secondInterval || {}) },
            lapseInterval: { ...state.defaultSrsSettings.lapseInterval, ...(savedSettings.lapseInterval || {}) },
            requiredStreak: savedSettings.requiredStreak || state.defaultSrsSettings.requiredStreak,
            penalty: savedSettings.penalty || state.defaultSrsSettings.penalty,
        };
    }

    // Language functions
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

    // Initialization
    async function init() {
        const loadingOverlay = document.getElementById('loading-overlay');
        try {
            const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
            const browserLang = navigator.language.split('-')[0];
            let initialLang = 'en';

            if (savedLang && translations[savedLang]) initialLang = savedLang;
            else if (translations[navigator.language]) initialLang = navigator.language;
            else if (translations[browserLang]) initialLang = browserLang;

            document.documentElement.lang = initialLang;

            if (loadingOverlay) {
                loadingOverlay.textContent = translations[initialLang].dbInitializing;
            }

            elements.errorModal.style.display = 'none';
            elements.settingsModal.style.display = 'none';
            elements.editCardModal.style.display = 'none';
            elements.historyModal.style.display = 'none';

            await dbManager.init();
            if (!dbManager.db) return;

            await loadSettings();
            setupButtons();
            setupEventHandlers(state, elements, cardManager, gameFlow, uiHelpers, fileOps, translations);

            const savedWordList = localStorage.getItem(WORD_LIST_STORAGE_KEY);
            if (savedWordList) elements.wordListInput.value = savedWordList;

            const savedScope = localStorage.getItem(REVIEW_SCOPE_KEY);
            if (savedScope === 'textarea') {
                elements.scopeTextareaRadio.checked = true;
            } else if (savedScope === 'starred') {
                elements.scopeStarredRadio.checked = true;
            } else {
                elements.scopeAllRadio.checked = true;
            }

            await setLanguage(initialLang);
            await cardManager.load();
            await cardManager.syncFromTextarea(elements.wordListInput, uiHelpers.updateTextareaStats);
            await uiHelpers.showSetup(cardManager);

            // Textarea height adjustment
            let adjustTextareaHeightTimer = null;
            function adjustTextareaHeight(showContainer = false) {
                const footer = document.getElementById('last-updated');
                const container = document.querySelector('.container');

                if (!footer || !elements.wordListInput || !container) return;

                const viewportHeight = window.innerHeight;
                const minHeight = 140;
                const maxHeight = 1000;

                const originalTransition = elements.wordListInput.style.transition;
                elements.wordListInput.style.transition = 'none';

                elements.wordListInput.style.height = '10px';
                container.offsetHeight;

                const bodyPaddingTop = 10;
                const bodyPaddingBottom = 10;
                const containerRect = container.getBoundingClientRect();
                const textareaRect = elements.wordListInput.getBoundingClientRect();
                const footerRect = footer.getBoundingClientRect();
                const footerMarginTop = 20;

                const containerTopToTextareaTop = textareaRect.top - containerRect.top;
                const textareaBottomToContainerBottom = containerRect.bottom - textareaRect.bottom;

                const availableHeight = viewportHeight
                    - bodyPaddingTop
                    - bodyPaddingBottom
                    - footerRect.height
                    - footerMarginTop
                    - containerTopToTextareaTop
                    - textareaBottomToContainerBottom
                    - 20;

                let newHeight = Math.max(minHeight, Math.min(availableHeight, maxHeight));

                elements.wordListInput.style.height = newHeight + 'px';
                container.offsetHeight;

                elements.wordListInput.style.transition = originalTransition;

                if (showContainer) {
                    requestAnimationFrame(() => {
                        container.classList.add('loaded');
                    });
                }
            }

            function adjustTextareaHeightDebounced(delay = 0) {
                if (adjustTextareaHeightTimer) {
                    clearTimeout(adjustTextareaHeightTimer);
                }
                adjustTextareaHeightTimer = setTimeout(() => {
                    adjustTextareaHeight(false);
                }, delay);
            }

            window.adjustTextareaHeight = adjustTextareaHeight;
            window.adjustTextareaHeightDebounced = adjustTextareaHeightDebounced;

            setTimeout(() => adjustTextareaHeight(true), 100);
            window.addEventListener('resize', () => adjustTextareaHeight(false));

        } catch (error) {
            console.error("Initialization failed:", error);
            if (loadingOverlay) {
                loadingOverlay.textContent = "Error during initialization. Please refresh the page.";
            }
        } finally {
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }
    }

    init();
});
