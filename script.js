document.addEventListener('DOMContentLoaded', () => {
    // --- I18N Translations ---
    const translations = {
        'zh-CN': {
            title: '暗记程序',
            languageLabel: '语言:',
            mainHeading: '暗记程序',
            listHeading: '输入单词列表',
            instructions: '每行一个词条，格式为：<b>问题, 答案1, 答案2...</b>，例如：',
            dropZoneLabel: '将文件拖放到此处，或点击选择文件',
            randomOrderLabel: '随机顺序',
            smartReviewButton: '智能复习 ({dueCount})',
            cramButton: '自由复习',
            reviewing: '学习中...', 
            showAllCardsButton: '查看所有卡片',
            reviewOptionsLegend: '复习选项',
            reviewScopeLegend: '复习范围',
            scopeAllLabel: '所有单词',
            scopeTextareaLabel: '文本框内单词',
            clearCacheButton: '清空缓存',
            cacheClearedAlert: '缓存已清空！',
            confirmClearCache: '确定要清空所有本地数据吗？这将删除所有卡片记录和语言设置。此操作不可撤销。',
            answerPlaceholder: '输入答案后按回车',
            continueButton: '继续',
            terminateButton: '终止测验',
            summaryHeading: '本轮学习完成！',
            correctLabel: '正确',
            incorrectLabel: '错误',
            incorrectWordsHeading: '本轮答错的单词',
            restartButton: '返回主菜单',
            allCardsModalHeading: '所有卡片状态',
            correctFeedback: '正确! 答案: {answers}',
            incorrectFeedback: '错误! 答案: {answers}',
            emptyListAlert: '单词列表为空或格式不正确。',
            noDueCards: '今日无待复习卡片！',
            noCardsToCram: '没有可供自由复习的卡片。',
            autoAdvanceLabel: '自动跳到下一题',
            cardQuestion: '问题',
            cardAnswers: '答案',
            cardNextReview: '下次复习',
            cardInterval: '间隔(天)',
            cardEfactor: '难度系数',
            cardStatus: '状态',
            cardActions: '操作',
            statusNew: '新',
            statusLearning: '学习中',
            statusReview: '复习',
            statusDue: '到期',
            statusSuspended: '已暂停',
            today: '今天',
            noCardsFound: '没有找到任何卡片。',
            suspend: '暂停',
            restore: '恢复',
            activeCards: '活动卡片',
            suspendedCards: '已暂停',
            currentListCards: '当前列表',
            allTimeCards: '所有卡片',
            lastUpdatedLabel: '最后更新于：',
            settingsButton: '设置',
            settingsModalHeading: '算法参数设置',
            initialIntervalLabel: '初次答对后间隔',
            secondIntervalLabel: '再次答对后间隔',
            lapseIntervalLabel: '答错后间隔',
            saveButton: '保存',
            resetButton: '恢复默认',
            minutes: '分钟',
            hours: '小时',
            days: '天',
            dangerZoneHeading: '危险区域'
        },
        'en': {
            title: 'Anki Program',
            languageLabel: 'Language:',
            mainHeading: 'Anki Program',
            listHeading: 'Enter Word List',
            instructions: 'One entry per line, format: <b>Question, Answer 1, Answer 2...</b>, e.g.:',
            dropZoneLabel: 'Drag and drop a file here, or click to select a file',
            randomOrderLabel: 'Random Order',
            smartReviewButton: 'Smart Review ({dueCount})',
            cramButton: 'Cram Session',
            reviewing: 'Reviewing...', 
            showAllCardsButton: 'View All Cards',
            reviewOptionsLegend: 'Review Options',
            reviewScopeLegend: 'Review Scope',
            scopeAllLabel: 'All words',
            scopeTextareaLabel: 'Words in textarea',
            clearCacheButton: 'Clear Cache',
            cacheClearedAlert: 'Cache cleared!',
            confirmClearCache: 'Are you sure you want to clear all local data? This will delete all card history and language settings. This action cannot be undone.',
            answerPlaceholder: 'Type answer and press Enter',
            continueButton: 'Continue',
            terminateButton: 'End Test',
            summaryHeading: 'Session Finished!',
            correctLabel: 'Correct',
            incorrectLabel: 'Incorrect',
            incorrectWordsHeading: 'Incorrect words this session',
            restartButton: 'Return to Main Menu',
            allCardsModalHeading: 'All Cards Status',
            correctFeedback: 'Correct! The answer is: {answers}',
            incorrectFeedback: 'Incorrect! The answer is: {answers}',
            emptyListAlert: 'The word list is empty or formatted incorrectly.',
            noDueCards: 'No cards due for review today!',
            noCardsToCram: 'There are no cards available to cram.',
            autoAdvanceLabel: 'Auto-advance to next question',
            cardQuestion: 'Question',
            cardAnswers: 'Answers',
            cardNextReview: 'Next Review',
            cardInterval: 'Interval(d)',
            cardEfactor: 'E-Factor',
            cardStatus: 'Status',
            cardActions: 'Actions',
            statusNew: 'New',
            statusLearning: 'Learning',
            statusReview: 'Review',
            statusDue: 'Due',
            statusSuspended: 'Suspended',
            today: 'Today',
            noCardsFound: 'No cards found.',
            suspend: 'Suspend',
            restore: 'Restore',
            activeCards: 'Active Cards',
            suspendedCards: 'Suspended',
            currentListCards: 'Current List',
            allTimeCards: 'All Cards',
            lastUpdatedLabel: 'Last updated:',
            settingsButton: 'Settings',
            settingsModalHeading: 'Algorithm Parameters',
            initialIntervalLabel: 'Interval after 1st correct',
            secondIntervalLabel: 'Interval after 2nd correct',
            lapseIntervalLabel: 'Interval after incorrect',
            saveButton: 'Save',
            resetButton: 'Reset to Defaults',
            minutes: 'Minutes',
            hours: 'Hours',
            days: 'Days',
            dangerZoneHeading: 'Danger Zone'
        },
        'ja': {
            title: '暗記プログラム',
            languageLabel: '言語:',
            mainHeading: '暗記プログラム',
            listHeading: '単語リストを入力',
            instructions: '各行に1つのエントリ、形式：<b>問題, 答え1, 答え2...</b>、例：',
            dropZoneLabel: 'ここにファイルをドラッグ＆ドロップするか、クリックしてファイルを選択します',
            randomOrderLabel: 'ランダムな順序',
            smartReviewButton: 'スマートレビュー ({dueCount})',
            cramButton: '集中学習',
            reviewing: '復習中...', 
            showAllCardsButton: '全カード表示',
            reviewOptionsLegend: 'レビュー選択',
            reviewScopeLegend: 'レビュー範囲',
            scopeAllLabel: 'すべての単語',
            scopeTextareaLabel: 'テキストエリアの単語',
            clearCacheButton: 'キャッシュをクリア',
            cacheClearedAlert: 'キャッシュがクリアされました！',
            confirmClearCache: '本当にすべてのローカルデータをクリアしますか？これには、すべてのカード記録と言語設定が含まれます。この操作は元に戻せません。',
            answerPlaceholder: '答えを入力してEnterキーを押す',
            continueButton: '次へ',
            terminateButton: 'テスト終了',
            summaryHeading: 'セッション完了！',
            correctLabel: '正解',
            incorrectLabel: '不正解',
            incorrectWordsHeading: 'このセッションで間違った単語',
            restartButton: 'メインメニューに戻る',
            allCardsModalHeading: '全カードの状態',
            correctFeedback: '正解！答えは: {answers}',
            incorrectFeedback: '不正解！答えは: {answers}',
            emptyListAlert: '単語リストが空か、形式が正しくありません。',
            noDueCards: '今日レビューするカードはありません！',
            noCardsToCram: '集中学習できるカードがありません。',
            autoAdvanceLabel: '正解の場合、自動的に次に進む',
            cardQuestion: '問題',
            cardAnswers: '答え',
            cardNextReview: '次回レビュー',
            cardInterval: '間隔(日)',
            cardEfactor: '難易度係数',
            cardStatus: '状態',
            cardActions: '操作',
            statusNew: '新規',
            statusLearning: '学習中',
            statusReview: '復習',
            statusDue: '期限切れ',
            statusSuspended: '一時停止中',
            today: '今日',
            noCardsFound: 'カードが見つかりません。',
            suspend: '一時停止',
            restore: '再開',
            activeCards: 'アクティブなカード',
            suspendedCards: '一時停止中',
            currentListCards: '現在のリスト',
            allTimeCards: '全カード',
            lastUpdatedLabel: '最終更新日：',
            settingsButton: '設定',
            settingsModalHeading: 'アルゴリズムパラメータ設定',
            initialIntervalLabel: '初回正解後の間隔',
            secondIntervalLabel: '2回目正解後の間隔',
            lapseIntervalLabel: '不正解後の間隔',
            saveButton: '保存',
            resetButton: 'デフォルトに戻す',
            minutes: '分',
            hours: '時間',
            days: '日',
            dangerZoneHeading: '危険区域'
        }
    };

    // --- DOM Elements ---
    const setupEl = document.getElementById('setup');
    const cardEl = document.getElementById('card');
    const summaryEl = document.getElementById('summary');
    const languageSelect = document.getElementById('language-select');
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const feedbackEl = document.getElementById('feedback');
    const startButton = document.getElementById('start-button');
    const wordListInput = document.getElementById('word-list-input');
    const restartButton = document.getElementById('restart-button');
    const terminateButton = document.getElementById('terminate-button');
    const showErrorsButton = document.getElementById('show-errors-button');
    const clearCacheButton = document.getElementById('clear-cache-button');
    const continueButton = document.getElementById('continue-button');
    const randomOrderCheckbox = document.getElementById('random-order-checkbox');
    const fileDropZone = document.getElementById('file-drop-zone');
    const fileInput = document.getElementById('file-input');
    const autoAdvanceCheckbox = document.getElementById('auto-advance-checkbox');
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const incorrectWordsContainer = document.getElementById('incorrect-words-container');
    const incorrectWordsListEl = document.getElementById('incorrect-words-list');
    const errorModal = document.getElementById('error-modal');
    const closeModalButton = document.querySelector('.close-button');
    const modalIncorrectListEl = document.getElementById('modal-incorrect-list');
    const settingsModal = document.getElementById('settings-modal');
    const settingsButton = document.getElementById('settings-button');
    const saveSettingsButton = document.getElementById('save-settings-button');
    const resetSettingsButton = document.getElementById('reset-settings-button');
    const initialIntervalValueInput = document.getElementById('setting-initial-interval-value');
    const initialIntervalUnitInput = document.getElementById('setting-initial-interval-unit');
    const secondIntervalValueInput = document.getElementById('setting-second-interval-value');
    const secondIntervalUnitInput = document.getElementById('setting-second-interval-unit');
    const lapseIntervalValueInput = document.getElementById('setting-lapse-interval-value');
    const lapseIntervalUnitInput = document.getElementById('setting-lapse-interval-unit');
    const settingsModalCloseButton = settingsModal.querySelector('.close-button');

    // New button will be created dynamically, but we need a placeholder in the HTML
    let cramButton; 

    // --- App State ---
    let sessionCards = [];
    let currentCardIndex = 0;
    let sessionCorrectCount = 0;
    let sessionIncorrectCount = 0;
    let sessionIncorrectCards = [];
    let reviewAgainPile = [];
    let isChecking = false;
    let isAnswerCorrect = false;
    let isCramming = false; // New state for cram mode
    let allCards = new Map();
    let srsSettings = {};
    const defaultSrsSettings = {
        initialInterval: { value: 1, unit: 'days' },
        secondInterval: { value: 6, unit: 'days' },
        lapseInterval: { value: 10, unit: 'minutes' },
    };

    // --- Storage Keys ---
    const CARDS_STORAGE_KEY = 'ankiCardsData';
    const WORD_LIST_STORAGE_KEY = 'wordListContent';
    const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
    const SETTINGS_STORAGE_KEY = 'ankiSrsSettings';

    // --- Spaced Repetition Logic ---
    const cardManager = {
        // All dates are now stored as full ISO strings for precision
        getNowISO: () => new Date().toISOString(),

        load: () => {
            const storedCards = JSON.parse(localStorage.getItem(CARDS_STORAGE_KEY) || '[]');
            allCards = new Map(storedCards.map(card => [card.id, card]));

            // --- One-time Data Migration ---
            let needsSave = false;
            allCards.forEach(card => {
                // If date is in old YYYY-MM-DD format, convert it.
                if (card.nextReviewDate && !card.nextReviewDate.includes('T')) {
                    card.nextReviewDate = cardManager.getNowISO();
                    // Also reset interval to be in minutes, assuming old intervals were in days.
                    // This makes it compatible with the new system. A value of 0 is safe.
                    card.interval = 0; 
                    needsSave = true;
                }
            });

            if (needsSave) {
                cardManager.save();
            }
            // --- End Migration ---

            cardManager.updateDueCount();
        },

        save: () => {
            localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(Array.from(allCards.values())));
        },

        syncFromTextarea: () => {
            const text = wordListInput.value.trim();
            const lines = text.split('\n');
            const seenIds = new Set();

            if (text) {
                lines.forEach(line => {
                    const parts = line.split(',').map(part => part.trim()).filter(part => part);
                    if (parts.length < 2) return;

                    const id = parts.join(',');
                    seenIds.add(id);

                    if (!allCards.has(id)) {
                        allCards.set(id, {
                            id: id,
                            question: parts[0],
                            answers: parts,
                            repetitions: 0,
                            efactor: 2.5,
                            interval: 0, // Interval is now a duration in minutes
                            nextReviewDate: cardManager.getNowISO(),
                            isSuspended: false,
                        });
                    }
                });
            }

            const idsToDelete = [];
            allCards.forEach((card, id) => {
                if (!seenIds.has(id) && card.repetitions === 0) {
                    idsToDelete.push(id);
                }
            });
            idsToDelete.forEach(id => allCards.delete(id));

            cardManager.save();
            cardManager.updateDueCount();
        },

        getDueCards: () => {
            const now = new Date();
            return Array.from(allCards.values()).filter(card => 
                !card.isSuspended && new Date(card.nextReviewDate) <= now
            );
        },
        
        getAllActiveCards: () => {
            return Array.from(allCards.values()).filter(card => !card.isSuspended);
        },

        update: (cardId, isCorrect) => {
            const card = allCards.get(cardId);
            if (!card) return;

            const getNextIntervalInMinutes = (setting) => {
                const { value, unit } = setting;
                if (unit === 'days') return value * 24 * 60;
                if (unit === 'hours') return value * 60;
                return value; // minutes
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
            }
            
            const quality = isCorrect ? 5 : 1;
            card.efactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
            if (card.efactor < 1.3) card.efactor = 1.3;

            const nextReview = new Date();
            nextReview.setMinutes(nextReview.getMinutes() + card.interval);
            card.nextReviewDate = nextReview.toISOString();
            
            cardManager.save();
        },

        suspend: (cardId) => {
            const card = allCards.get(cardId);
            if (card) {
                card.isSuspended = true;
                cardManager.save();
                cardManager.updateDueCount();
            }
        },

        restore: (cardId) => {
            const card = allCards.get(cardId);
            if (card) {
                card.isSuspended = false;
                card.nextReviewDate = cardManager.getNowISO();
                cardManager.save();
                cardManager.updateDueCount();
            }
        },

        updateDueCount: () => {
            const scopeIsTextarea = document.getElementById('scope-textarea').checked;
            
            let dueCards;
            let activeCards;

            if (scopeIsTextarea) {
                const text = wordListInput.value.trim();
                const currentIds = new Set(text.split('\n').map(line => line.split(',').map(part => part.trim()).filter(part => part).join(',')));
                dueCards = cardManager.getDueCards().filter(card => currentIds.has(card.id));
                activeCards = cardManager.getAllActiveCards().filter(card => currentIds.has(card.id));
            } else {
                dueCards = cardManager.getDueCards();
                activeCards = cardManager.getAllActiveCards();
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

    // --- Game Flow Functions ---
    function startSession(cards) {
        if (cards.length === 0) {
            const alertKey = isCramming ? 'noCardsToCram' : 'noDueCards';
            alert(translations[languageSelect.value][alertKey]);
            return;
        }

        if (randomOrderCheckbox.checked) shuffle(cards); 
        
        sessionCards = cards;
        currentCardIndex = 0;
        sessionCorrectCount = 0;
        sessionIncorrectCount = 0;
        sessionIncorrectCards = [];
        reviewAgainPile = [];

        setupEl.style.display = 'none';
        summaryEl.style.display = 'none';
        cardEl.style.display = 'block';
        answerInput.disabled = false;
        feedbackEl.innerHTML = '&nbsp;';
        feedbackEl.className = '';
        continueButton.style.display = 'none';
        
        displayNextCard();
    }

    function startSmartReview() {
        isCramming = false;
        cardManager.syncFromTextarea();

        let dueCards;
        if (document.getElementById('scope-textarea').checked) {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n').map(line => line.split(',').map(part => part.trim()).filter(part => part).join(',')));
            dueCards = cardManager.getDueCards().filter(card => currentIds.has(card.id));
        } else {
            dueCards = cardManager.getDueCards();
        }
        
        startSession(dueCards);
    }

    function startCramSession() {
        isCramming = true;
        cardManager.syncFromTextarea();

        let activeCards;
        if (document.getElementById('scope-textarea').checked) {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n').map(line => line.split(',').map(part => part.trim()).filter(part => part).join(',')));
            activeCards = Array.from(allCards.values()).filter(card => !card.isSuspended && currentIds.has(card.id));
        } else {
            activeCards = cardManager.getAllActiveCards();
        }

        startSession(activeCards);
    }

    function displayNextCard() {
        if (currentCardIndex < sessionCards.length) {
            questionEl.textContent = sessionCards[currentCardIndex].question;
            answerInput.value = '';
            answerInput.focus();
        } else {
            // End of a pass. Check if there are incorrect cards to review again.
            if (!isCramming && reviewAgainPile.length > 0) {
                sessionCards = [...reviewAgainPile];
                reviewAgainPile = [];
                currentCardIndex = 0;
                if (randomOrderCheckbox.checked) shuffle(sessionCards);
                displayNextCard(); // Start the next pass
            } else {
                showSummary(); // Session is truly over
            }
        }
    }

    function showSummary() {
        correctCountEl.textContent = sessionCorrectCount;
        incorrectCountEl.textContent = sessionIncorrectCount;
        cardEl.style.display = 'none';
        summaryEl.style.display = 'block';
        continueButton.style.display = 'none';

        if (sessionIncorrectCards.length > 0) {
            incorrectWordsListEl.innerHTML = sessionIncorrectCards.map(card => `<div>${card.answers.join(', ')}</div>`).join('');
            incorrectWordsContainer.style.display = 'block';
        } else {
            incorrectWordsContainer.style.display = 'none';
        }
        cardManager.updateDueCount();
    }

    // --- Answer Checking ---
    function checkAnswer() {
        if (isChecking) return;
        const userAnswer = answerInput.value.trim();
        if (userAnswer === '') return;

        isChecking = true;
        const processedUserAnswer = userAnswer.replace(/\s/g, '').toLowerCase();
        const currentCard = sessionCards[currentCardIndex];
        const processedAnswers = currentCard.answers.map(a => a.replace(/\s/g, '').toLowerCase());
        
        answerInput.disabled = true;

        if (processedAnswers.includes(processedUserAnswer)) {
            isAnswerCorrect = true;
            handleCorrectAnswer(currentCard);
            if (autoAdvanceCheckbox.checked) setTimeout(proceedToNextCard, 1500);
            else continueButton.style.display = 'inline-block';
            answerInput.blur();
        } else {
            isAnswerCorrect = false;
            handleIncorrectAnswer(currentCard);
            continueButton.style.display = 'inline-block';
            answerInput.disabled = false;
            isChecking = false;
            answerInput.focus();
            answerInput.select();
        }
    }

    function proceedToNextCard() {
        currentCardIndex++;
        isChecking = false;
        isAnswerCorrect = false;
        feedbackEl.innerHTML = '&nbsp;';
        feedbackEl.className = '';
        answerInput.disabled = false;
        continueButton.style.display = 'none';
        displayNextCard();
    }

    function handleCorrectAnswer(card) {
        const feedbackText = translations[languageSelect.value].correctFeedback;
        feedbackEl.textContent = feedbackText.replace('{answers}', card.answers.join(' / '));
        feedbackEl.className = 'correct';
        sessionCorrectCount++;
        if (!isCramming) { // Only update SRS data in smart review mode
            cardManager.update(card.id, true);
        }
    }

    function handleIncorrectAnswer(card) {
        const feedbackText = translations[languageSelect.value].incorrectFeedback;
        feedbackEl.textContent = feedbackText.replace('{answers}', card.answers.join(' / '));
        feedbackEl.className = 'incorrect';
        sessionIncorrectCount++;
        if (!sessionIncorrectCards.some(c => c.id === card.id)) {
            sessionIncorrectCards.push(card);
        }
        if (!isCramming && !reviewAgainPile.some(c => c.id === card.id)) {
            reviewAgainPile.push(card);
        }
        if (!isCramming) { // Only update SRS data in smart review mode
            cardManager.update(card.id, false);
        }
    }

    // --- UI and Utility Functions ---
    function showSetup() {
        summaryEl.style.display = 'none';
        cardEl.style.display = 'none';
        setupEl.style.display = 'block';
        cardManager.updateDueCount();
    }

    function formatReviewDate(isoString, lang) {
        const date = new Date(isoString);
        const now = new Date();
        const t = (key, fallback) => translations[lang][key] || fallback;

        const isToday = date.getFullYear() === now.getFullYear() &&
                      date.getMonth() === now.getMonth() &&
                      date.getDate() === now.getDate();

        if (date <= now) {
            return t('statusDue', 'Due');
        }
        if (isToday) {
            return t('today', 'Today') + ' ' + date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
        }
        
        return date.toLocaleString(lang, { 
            year: 'numeric', month: 'short', day: 'numeric', 
            hour: '2-digit', minute: '2-digit' 
        });
    }

    function renderAllCardsModal(viewType = 'current', filterType = 'active') {
        const lang = languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        let sourceCards;
        if (viewType === 'current') {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n').map(line => line.split(',').map(part => part.trim()).filter(part => part).join(',')));
            sourceCards = Array.from(allCards.values()).filter(card => currentIds.has(card.id));
        } else { // 'all'
            sourceCards = Array.from(allCards.values());
        }
        
        const filteredCards = sourceCards.filter(card => {
            return filterType === 'suspended' ? card.isSuspended : !card.isSuspended;
        });

        const tableHeader = `
            <thead>
                <tr>
                    <th>${t('cardQuestion', 'Question')}</th>
                    <th>${t('cardAnswers', 'Answers')}</th>
                    <th>${t('cardNextReview', 'Next Review')}</th>
                    <th>${t('cardInterval', 'Interval')}</th>
                    <th>${t('cardEfactor', 'E-Factor')}</th>
                    <th>${t('cardStatus', 'Status')}</th>
                    <th>${t('cardActions', 'Actions')}</th>
                </tr>
            </thead>`;

        let tableBody;
        if (filteredCards.length === 0) {
            tableBody = `<tbody><tr><td colspan="7" style="text-align: center;">${t('noCardsFound', 'No cards found.')}</td></tr></tbody>`;
        } else {
            tableBody = `<tbody>` + filteredCards
                .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate))
                .map(card => {
                    let status;
                    if (card.isSuspended) {
                        status = `<span class="status-suspended">${t('statusSuspended', 'Suspended')}</span>`;
                    } else if (card.repetitions === 0) {
                        status = `<span class="status-new">${t('statusNew', 'New')}</span>`;
                    } else if (new Date(card.nextReviewDate) <= new Date()) {
                        status = `<span class="status-due">${t('statusDue', 'Due')}</span>`;
                    } else {
                        status = `<span class="status-review">${t('statusReview', 'Review')}</span>`;
                    }

                    const actionButton = card.isSuspended
                        ? `<button class="action-btn restore-btn" data-action="restore" data-card-id="${card.id}">${t('restore', 'Restore')}</button>`
                        : `<button class="action-btn suspend-btn" data-action="suspend" data-card-id="${card.id}">${t('suspend', 'Suspend')}</button>`;

                    const intervalInMinutes = card.interval || 0;
                    let intervalDisplay;
                    if (intervalInMinutes < 60) {
                        intervalDisplay = `${intervalInMinutes}m`;
                    } else if (intervalInMinutes < 1440) {
                        intervalDisplay = `${(intervalInMinutes / 60).toFixed(1)}h`;
                    } else {
                        intervalDisplay = `${(intervalInMinutes / 1440).toFixed(1)}d`;
                    }

                    return `
                        <tr class="${card.isSuspended ? 'suspended-row' : ''}">
                            <td>${card.question || ''}</td>
                            <td>${(card.answers || []).slice(1).join(', ')}</td>
                            <td>${formatReviewDate(card.nextReviewDate, lang)}</td>
                            <td>${intervalDisplay}</td>
                            <td>${(card.efactor || 2.5).toFixed(2)}</td>
                            <td>${status}</td>
                            <td>${actionButton}</td>
                        </tr>`;
                }).join('') + `</tbody>`;
        }
        
        const tabs = `
            <div class="modal-toolbar">
                <div class="view-tabs">
                    <button class="tab-btn ${viewType === 'current' ? 'active' : ''}" data-view="current">${t('currentListCards', 'Current List')}</button>
                    <button class="tab-btn ${viewType === 'all' ? 'active' : ''}" data-view="all">${t('allTimeCards', 'All Cards')}</button>
                </div>
                <div class="filter-tabs">
                    <button class="tab-btn ${filterType === 'active' ? 'active' : ''}" data-filter="active">${t('activeCards', 'Active Cards')}</button>
                    <button class="tab-btn ${filterType === 'suspended' ? 'active' : ''}" data-filter="suspended">${t('suspendedCards', 'Suspended')}</button>
                </div>
            </div>`;

        modalIncorrectListEl.innerHTML = `${tabs}<table class="cards-table">${tableHeader}${tableBody}</table>`;
    }

    function showAllCardsModal() {
        renderAllCardsModal('current', 'active');
        errorModal.style.display = 'flex';
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            wordListInput.value = e.target.result;
            localStorage.setItem(WORD_LIST_STORAGE_KEY, e.target.result);
            cardManager.syncFromTextarea();
        };
        reader.readAsText(file);
    }

    // --- Language Functions ---
    function setLanguage(lang) {
        const translation = translations[lang];
        if (!translation) return;

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
        languageSelect.value = lang;
        cardManager.updateDueCount();
        updateLastUpdatedTime(lang); // Update the footer language
    }

    // --- Update Last Updated Time ---
    function updateLastUpdatedTime(lang) {
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
            const lastModified = new Date(document.lastModified);
            // Fallback to 'en' if the language code is not available in translations
            const currentLang = translations[lang] ? lang : 'en';
            const locale = currentLang.replace('_', '-');
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const dateString = lastModified.toLocaleDateString(locale, options);
            const label = translations[currentLang].lastUpdatedLabel;
            lastUpdatedElement.textContent = `${label} ${dateString}`;
        }
    }
    
    // --- Create and inject Cram Button ---
    function setupButtons() {
        startButton.setAttribute('data-i18n', 'smartReviewButton');
        
        cramButton = document.createElement('button');
        cramButton.id = 'cram-button';
        cramButton.setAttribute('data-i18n', 'cramButton');
        startButton.parentNode.insertBefore(cramButton, startButton.nextSibling);

        startButton.addEventListener('click', startSmartReview);
        cramButton.addEventListener('click', startCramSession);
    }

    // --- Settings Functions ---
    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) || '{}');
        // Deep merge to handle partial saved settings
        srsSettings = {
            initialInterval: { ...defaultSrsSettings.initialInterval, ...(savedSettings.initialInterval || {}) },
            secondInterval: { ...defaultSrsSettings.secondInterval, ...(savedSettings.secondInterval || {}) },
            lapseInterval: { ...defaultSrsSettings.lapseInterval, ...(savedSettings.lapseInterval || {}) },
        };
    }

    function saveSettings() {
        srsSettings.initialInterval.value = parseInt(initialIntervalValueInput.value, 10) || defaultSrsSettings.initialInterval.value;
        srsSettings.initialInterval.unit = initialIntervalUnitInput.value;
        srsSettings.secondInterval.value = parseInt(secondIntervalValueInput.value, 10) || defaultSrsSettings.secondInterval.value;
        srsSettings.secondInterval.unit = secondIntervalUnitInput.value;
        srsSettings.lapseInterval.value = parseInt(lapseIntervalValueInput.value, 10) || defaultSrsSettings.lapseInterval.value;
        srsSettings.lapseInterval.unit = lapseIntervalUnitInput.value;
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(srsSettings));
    }

    function populateSettingsModal() {
        initialIntervalValueInput.value = srsSettings.initialInterval.value;
        initialIntervalUnitInput.value = srsSettings.initialInterval.unit;
        secondIntervalValueInput.value = srsSettings.secondInterval.value;
        secondIntervalUnitInput.value = srsSettings.secondInterval.unit;
        lapseIntervalValueInput.value = srsSettings.lapseInterval.value;
        lapseIntervalUnitInput.value = srsSettings.lapseInterval.unit;
    }

    // --- Event Listeners ---
    languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
    showErrorsButton.addEventListener('click', showAllCardsModal);
    
    continueButton.addEventListener('click', proceedToNextCard);
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            checkAnswer();
        }
    });
    restartButton.addEventListener('click', showSetup);
    terminateButton.addEventListener('click', showSummary);
    closeModalButton.addEventListener('click', () => errorModal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target == errorModal) errorModal.style.display = 'none';
        if (event.target == settingsModal) settingsModal.style.display = 'none';
    });
    wordListInput.addEventListener('input', () => {
        localStorage.setItem(WORD_LIST_STORAGE_KEY, wordListInput.value);
        cardManager.syncFromTextarea();
    });

    modalIncorrectListEl.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('.tab-btn')) {
            const activeViewBtn = modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
            const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
            
            let viewType = activeViewBtn ? activeViewBtn.dataset.view : 'current';
            let filterType = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';

            if (target.dataset.view) {
                viewType = target.dataset.view;
            }
            if (target.dataset.filter) {
                filterType = target.dataset.filter;
            }
            
            renderAllCardsModal(viewType, filterType);

        } else if (target.matches('.action-btn')) {
            const action = target.dataset.action;
            const cardId = target.dataset.cardId;
            if (action === 'suspend') cardManager.suspend(cardId);
            else if (action === 'restore') cardManager.restore(cardId);
            
            const activeViewBtn = modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
            const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
            renderAllCardsModal(
                activeViewBtn ? activeViewBtn.dataset.view : 'current',
                activeFilterBtn ? activeFilterBtn.dataset.filter : 'active'
            );
        }
    });

    fileDropZone.addEventListener('click', () => fileInput.click());
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
            if (event.dataTransfer.files.length > 0) handleFile(event.dataTransfer.files[0]);
        });
    }
    fileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) handleFile(event.target.files[0]);
    });

    // Settings Modal Listeners
    settingsButton.addEventListener('click', () => {
        populateSettingsModal();
        settingsModal.style.display = 'flex';
    });
    settingsModalCloseButton.addEventListener('click', () => settingsModal.style.display = 'none');
    saveSettingsButton.addEventListener('click', () => {
        saveSettings();
        settingsModal.style.display = 'none';
    });
    resetSettingsButton.addEventListener('click', () => {
        srsSettings = { ...defaultSrsSettings };
        populateSettingsModal();
        saveSettings(); // Also save after resetting
    });
    clearCacheButton.addEventListener('click', () => {
        if (confirm(translations[languageSelect.value].confirmClearCache)) {
            localStorage.clear();
            alert(translations[languageSelect.value].cacheClearedAlert);
            location.reload();
        }
    });


    // --- Global Keydown Listener ---
    document.addEventListener('keydown', (event) => {
        if (errorModal.style.display === 'block' || settingsModal.style.display === 'flex') return;

        if (event.key === 'Enter' && continueButton.style.display !== 'none') {
            event.preventDefault();
            if (isAnswerCorrect) {
                proceedToNextCard();
            }
        }
    });

    // --- Initialization ---
    function init() {
        errorModal.style.display = 'none';
        settingsModal.style.display = 'none';
        loadSettings();
        setupButtons();
        const savedWordList = localStorage.getItem(WORD_LIST_STORAGE_KEY);
        if (savedWordList) wordListInput.value = savedWordList;

        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        const browserLang = navigator.language.split('-')[0];
        let initialLang = 'en';

        if (savedLang && translations[savedLang]) initialLang = savedLang;
        else if (translations[navigator.language]) initialLang = navigator.language;
        else if (translations[browserLang]) initialLang = browserLang;
        
        setLanguage(initialLang);
        cardManager.load();
        cardManager.syncFromTextarea();
        showSetup();

        // Add event listeners for scope change
        document.getElementById('scope-all').addEventListener('change', cardManager.updateDueCount);
        document.getElementById('scope-textarea').addEventListener('change', cardManager.updateDueCount);
    }

    init();
});
