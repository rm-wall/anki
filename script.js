document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const feedbackEl = document.getElementById('feedback');
    
    const translations = {
        'zh-CN': {
            title: '暗记程序',
            languageLabel: '语言:',
            mainHeading: '暗记程序',
            listHeading: '输入单词列表',
            instructions: '每行一个词条，格式为：<b>问题, 答案1, 答案2...</b>，例如：',
            startButton: '开始学习',
            showErrorsButton: '查看错题',
            practiceErrorsButton: '练习错题',
            answerPlaceholder: '输入答案后按回车',
            continueButton: '继续',
            terminateButton: '终止测验',
            summaryHeading: '完成！',
            correctLabel: '正确',
            incorrectLabel: '错误',
            incorrectWordsHeading: '答错的单词 (方便复习)',
            restartButton: '重新开始',
            errorModalHeading: '答错的单词记录',
            correctFeedback: '正确!',
            incorrectFeedback: '错误! 答案: {answers}',
            emptyListAlert: '单词列表为空或格式不正确。',
            noErrorsAlert: '没有错题可以练习！',
            noErrorHistoryAlert: '没有发现错题记录。'
        },
        'en': {
            title: 'Anki Program',
            languageLabel: 'Language:',
            mainHeading: 'Anki Program',
            listHeading: 'Enter Word List',
            instructions: 'One entry per line, format: <b>Question, Answer 1, Answer 2...</b>, e.g.:',
            startButton: 'Start Learning',
            showErrorsButton: 'View Incorrect',
            practiceErrorsButton: 'Practice Incorrect',
            answerPlaceholder: 'Type answer and press Enter',
            continueButton: 'Continue',
            terminateButton: 'End Test',
            summaryHeading: 'Finished!',
            correctLabel: 'Correct',
            incorrectLabel: 'Incorrect',
            incorrectWordsHeading: 'Incorrect Words (for review)',
            restartButton: 'Restart',
            errorModalHeading: 'Incorrect Word History',
            correctFeedback: 'Correct!',
            incorrectFeedback: 'Incorrect! The answer is: {answers}',
            emptyListAlert: 'The word list is empty or formatted incorrectly.',
            noErrorsAlert: 'No incorrect words to practice!',
            noErrorHistoryAlert: 'No incorrect word history found.'
        },
        'ja': {
            title: '暗記プログラム',
            languageLabel: '言語:',
            mainHeading: '暗記プログラム',
            listHeading: '単語リストを入力',
            instructions: '各行に1つのエントリ、形式：<b>問題, 答え1, 答え2...</b>、例：',
            startButton: '学習開始',
            showErrorsButton: '間違いを確認',
            practiceErrorsButton: '間違いを練習',
            answerPlaceholder: '答えを入力してEnterキーを押す',
            continueButton: '次へ',
            terminateButton: 'テスト終了',
            summaryHeading: '完了！',
            correctLabel: '正解',
            incorrectLabel: '不正解',
            incorrectWordsHeading: '間違った単語（復習用）',
            restartButton: '再開',
            errorModalHeading: '間違った単語の記録',
            correctFeedback: '正解！',
            incorrectFeedback: '不正解！答えは: {answers}',
            emptyListAlert: '単語リストが空か、形式が正しくありません。',
            noErrorsAlert: '練習する間違いはありません！',
            noErrorHistoryAlert: '間違いの記録が見つかりません。'
        }
    };
    
    // Screen elements
    const setupEl = document.getElementById('setup');
    const cardEl = document.getElementById('card');
    const summaryEl = document.getElementById('summary');

    // Buttons and inputs
    const startButton = document.getElementById('start-button');
    const wordListInput = document.getElementById('word-list-input');
    const restartButton = document.getElementById('restart-button');
    const terminateButton = document.getElementById('terminate-button');
    const showErrorsButton = document.getElementById('show-errors-button');
    const practiceErrorsButton = document.getElementById('practice-errors-button');
    const continueButton = document.getElementById('continue-button');

    // Summary stats
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const incorrectWordsContainer = document.getElementById('incorrect-words-container');
    const incorrectWordsListEl = document.getElementById('incorrect-words-list');

    // Modal elements
    const errorModal = document.getElementById('error-modal');
    const closeModalButton = document.querySelector('.close-button');
    const modalIncorrectListEl = document.getElementById('modal-incorrect-list');

    // App state
    let words = [];
    let currentWordIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let isPracticeMode = false;
    let sessionIncorrectWords = [];
    const ALL_TIME_INCORRECT_KEY = 'allTimeIncorrectWords';
    const WORD_LIST_STORAGE_KEY = 'wordListContent';
    const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
    let isChecking = false;

    // --- Game Flow Functions ---

    // 1. Starts a normal game from the textarea
    function initializeGame() {
        const text = wordListInput.value;
        localStorage.setItem(WORD_LIST_STORAGE_KEY, text);

        const parsedWords = text.trim().split('\n').map(line => {
            const parts = line.split(',').map(part => part.trim()).filter(part => part);
            if (parts.length === 0) return null;
            return { question: parts[0], answers: parts };
        }).filter(word => word);

        if (parsedWords.length === 0) {
            alert(translations[languageSelect.value].emptyListAlert);
            return;
        }
        words = parsedWords;
        isPracticeMode = false;
        setupEl.style.display = 'none';
        startGame();
    }

    // 2. Starts a practice game from localStorage
    function startPracticeGame() {
        const incorrectWords = JSON.parse(localStorage.getItem(ALL_TIME_INCORRECT_KEY) || '[]');
        if (incorrectWords.length === 0) {
            alert(translations[languageSelect.value].noErrorsAlert);
            return;
        }
        words = incorrectWords;
        isPracticeMode = true;
        setupEl.style.display = 'none';
        startGame();
    }

    // 3. Core game setup (for both normal and practice)
    function startGame() {
        currentWordIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        sessionIncorrectWords = [];
        shuffle(words);
        summaryEl.style.display = 'none';
        cardEl.style.display = 'block';
        answerInput.disabled = false;
        answerInput.value = '';
        feedbackEl.textContent = '';
        feedbackEl.className = '';
        continueButton.style.display = 'none';
        displayNextWord();
    }

    // 4. Displays the next word or ends the game
    function displayNextWord() {
        if (currentWordIndex < words.length) {
            questionEl.textContent = words[currentWordIndex].question;
            answerInput.value = '';
            answerInput.focus();
        } else {
            showSummary();
        }
    }

    // 5. Shows the summary screen
    function showSummary() {
        correctCountEl.textContent = correctCount;
        incorrectCountEl.textContent = incorrectCount;
        cardEl.style.display = 'none';
        summaryEl.style.display = 'block';
        continueButton.style.display = 'none';

        if (sessionIncorrectWords.length > 0) {
            incorrectWordsListEl.innerHTML = sessionIncorrectWords.map(word => `<div>${word.answers.join(', ')}</div>`).join('');
            incorrectWordsContainer.style.display = 'block';
        } else {
            incorrectWordsContainer.style.display = 'none';
        }
    }

    // --- Answer Checking ---

    function checkAnswer() {
        if (isChecking) return;

        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === '') return;

        isChecking = true;
        const currentWord = words[currentWordIndex];
        const lowerCaseAnswers = currentWord.answers.map(a => a.toLowerCase());
        
        answerInput.disabled = true;

        if (lowerCaseAnswers.includes(userAnswer)) {
            handleCorrectAnswer(currentWord);
            setTimeout(proceedToNextWord, 1500);
            answerInput.blur();
        } else {
            handleIncorrectAnswer(currentWord);
            continueButton.style.display = 'inline-block';
            answerInput.blur();
        }
    }

    function proceedToNextWord() {
        isChecking = false;
        currentWordIndex++;
        feedbackEl.textContent = '';
        feedbackEl.className = '';
        answerInput.disabled = false;
        continueButton.style.display = 'none';
        displayNextWord();
    }

    function handleCorrectAnswer(word) {
        feedbackEl.textContent = translations[languageSelect.value].correctFeedback;
        feedbackEl.className = 'correct';
        correctCount++;
        if (isPracticeMode) {
            removeWordFromIncorrectList(word);
        }
    }

    function handleIncorrectAnswer(word) {
        const feedbackText = translations[languageSelect.value].incorrectFeedback;
        feedbackEl.textContent = feedbackText.replace('{answers}', word.answers.join(' / '));
        feedbackEl.className = 'incorrect';
        incorrectCount++;
        sessionIncorrectWords.push(word);
        addWordToIncorrectList(word);
    }

    function retryQuestion() {
        isChecking = false;
        feedbackEl.textContent = '';
        feedbackEl.className = '';
        answerInput.disabled = false;
        answerInput.value = '';
        continueButton.style.display = 'none';
        answerInput.focus();
    }

    // --- LocalStorage Management ---

    function addWordToIncorrectList(word) {
        const incorrectWords = JSON.parse(localStorage.getItem(ALL_TIME_INCORRECT_KEY) || '[]');
        if (!incorrectWords.some(w => w.question === word.question)) {
            incorrectWords.push(word);
            localStorage.setItem(ALL_TIME_INCORRECT_KEY, JSON.stringify(incorrectWords));
        }
    }

    function removeWordFromIncorrectList(word) {
        let incorrectWords = JSON.parse(localStorage.getItem(ALL_TIME_INCORRECT_KEY) || '[]');
        incorrectWords = incorrectWords.filter(w => w.question !== word.question);
        localStorage.setItem(ALL_TIME_INCORRECT_KEY, JSON.stringify(incorrectWords));
    }

    function loadWordListFromStorage() {
        const savedWordList = localStorage.getItem(WORD_LIST_STORAGE_KEY);
        if (savedWordList) {
            wordListInput.value = savedWordList;
        }
    }

    // --- UI and Utility Functions ---

    function showSetup() {
        summaryEl.style.display = 'none';
        cardEl.style.display = 'none';
        setupEl.style.display = 'block';
        checkIncorrectWordsStatus();
    }

    function showErrorModal() {
        const incorrectWords = JSON.parse(localStorage.getItem(ALL_TIME_INCORRECT_KEY) || '[]');
        if (incorrectWords.length > 0) {
            modalIncorrectListEl.innerHTML = incorrectWords.map(word => `<div>${word.answers.join(', ')}</div>`).join('');
            errorModal.style.display = 'block';
        } else {
            alert(translations[languageSelect.value].noErrorHistoryAlert);
        }
    }

    function checkIncorrectWordsStatus() {
        const incorrectWords = JSON.parse(localStorage.getItem(ALL_TIME_INCORRECT_KEY) || '[]');
        const hasIncorrectWords = incorrectWords.length > 0;
        showErrorsButton.disabled = !hasIncorrectWords;
        practiceErrorsButton.disabled = !hasIncorrectWords;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --- Language Functions ---
    function setLanguage(lang) {
        const translation = translations[lang];
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translation[key]) {
                el.innerHTML = translation[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translation[key]) {
                el.placeholder = translation[key];
            }
        });
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        languageSelect.value = lang;
    }

    // --- Event Listeners ---
    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    startButton.addEventListener('click', initializeGame);
    practiceErrorsButton.addEventListener('click', startPracticeGame);
    continueButton.addEventListener('click', proceedToNextWord);
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            checkAnswer();
        }
    });
    restartButton.addEventListener('click', showSetup);
    terminateButton.addEventListener('click', showSummary);
    showErrorsButton.addEventListener('click', showErrorModal);
    closeModalButton.addEventListener('click', () => {
        errorModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == errorModal) {
            errorModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && continueButton.style.display !== 'none') {
            retryQuestion();
        }
    });

    // Initial check when the page loads
    loadWordListFromStorage();
    checkIncorrectWordsStatus();

    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const browserLang = navigator.language.split('-')[0];

    if (savedLang) {
        setLanguage(savedLang);
    } else if (translations[navigator.language]) {
        setLanguage(navigator.language);
    } else if (translations[browserLang]) {
        setLanguage(browserLang);
    } else {
        setLanguage('en'); // Default to English
    }
});
