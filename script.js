document.addEventListener('DOMContentLoaded', () => {
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const feedbackEl = document.getElementById('feedback');
    
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

    // --- Game Flow Functions ---

    // 1. Starts a normal game from the textarea
    function initializeGame() {
        const text = wordListInput.value;
        const parsedWords = text.trim().split('\n').map(line => {
            const parts = line.split(',').map(part => part.trim()).filter(part => part);
            if (parts.length === 0) return null;
            return { question: parts[0], answers: parts };
        }).filter(word => word);

        if (parsedWords.length === 0) {
            alert('单词列表为空或格式不正确。');
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
            alert('没有错题可以练习！');
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
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === '') return;

        const currentWord = words[currentWordIndex];
        const lowerCaseAnswers = currentWord.answers.map(a => a.toLowerCase());
        
        answerInput.disabled = true;

        if (lowerCaseAnswers.includes(userAnswer)) {
            handleCorrectAnswer(currentWord);
            setTimeout(proceedToNextWord, 1500);
        } else {
            handleIncorrectAnswer(currentWord);
            continueButton.style.display = 'inline-block';
            answerInput.blur();
        }
    }

    function proceedToNextWord() {
        currentWordIndex++;
        feedbackEl.textContent = '';
        feedbackEl.className = '';
        answerInput.disabled = false;
        continueButton.style.display = 'none';
        displayNextWord();
    }

    function handleCorrectAnswer(word) {
        feedbackEl.textContent = '正确!';
        feedbackEl.className = 'correct';
        correctCount++;
        if (isPracticeMode) {
            removeWordFromIncorrectList(word);
        }
    }

    function handleIncorrectAnswer(word) {
        feedbackEl.textContent = `错误! 答案: ${word.answers.join(' / ')}`;
        feedbackEl.className = 'incorrect';
        incorrectCount++;
        sessionIncorrectWords.push(word);
        addWordToIncorrectList(word);
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
            alert('没有发现错题记录。');
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

    // --- Event Listeners ---
    startButton.addEventListener('click', initializeGame);
    practiceErrorsButton.addEventListener('click', startPracticeGame);
    continueButton.addEventListener('click', proceedToNextWord);
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
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

    // Initial check when the page loads
    checkIncorrectWordsStatus();
});
