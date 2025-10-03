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
        clearCacheButton: '清空所有本地数据',
        cacheClearedAlert: '所有本地数据已清空！',
        confirmClearCache: '确定要清空所有本地数据吗？这将删除所有卡片记录和设置。此操作不可撤销。',
        answerPlaceholder: '输入答案后按回车',
        continueButton: '继续',
        redoButton: '重新练习',
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
        suspendButton: '暂停',
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
        dangerZoneHeading: '危险区域',
        exportButton: '导出词表',
        importButton: '导入词表',
        confirmImport: '确定要导入新的单词列表吗？这只会添加文件中不存在的新卡片，不会影响文本框中的列表。',
        importSuccess: '词表导入成功！{count}张新卡片已添加。',
        importFailed: '导入失败。请检查文件是否为纯文本格式。',
        dbInitializing: '正在初始化数据库...',
        totalWordsLabel: '总共: {count}',
        newWordsLabel: '新: {count}',
        learnedWordsLabel: '已学: {count}',
        suspendedWordsLabel: '暂停: {count}',
        exportPrompt: '要导出哪种类型的卡片？',
        exportActive: '活动卡片',
        exportSuspended: '暂停卡片',
        exportStatusActive: '活动',
        exportStatusSuspended: '暂停',
        exportStatusStarred: '星标',
        starredWordsLabel: '星标: {count}',
        scopeStarredLabel: '星标单词',
        starredCards: '星标卡片',
        deleteButtonLabel: '删除',
        confirmDeleteCard: '确定要永久删除这张卡片吗？此操作不可撤销。',
        requiredStreakLabel: '掌握所需连对次数',
        penaltyLabel: '答错扣除连对次数',
        syncButtonLabel: '同步',
        syncSuccessLabel: '已同步'
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
        clearCacheButton: 'Clear All Local Data',
        cacheClearedAlert: 'All local data cleared!',
        confirmClearCache: 'Are you sure you want to clear all local data? This will delete all card history and settings. This action cannot be undone.',
        answerPlaceholder: 'Type answer and press Enter',
        continueButton: 'Continue',
        redoButton: 'Practice Again',
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
        suspendButton: 'Suspend',
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
        dangerZoneHeading: 'Danger Zone',
        exportButton: 'Export List',
        importButton: 'Import List',
        confirmImport: 'Are you sure you want to import a new word list? This will only add new cards from the file that do not already exist and will not affect the list in the textarea.',
        importSuccess: 'Word list imported successfully! {count} new cards have been added.',
        importFailed: 'Import failed. Please ensure the file is a plain text file.',
        dbInitializing: 'Initializing Database...', 
        totalWordsLabel: 'Total: {count}',
        newWordsLabel: 'New: {count}',
        learnedWordsLabel: 'Learned: {count}',
        suspendedWordsLabel: 'Suspended: {count}',
        exportPrompt: 'Which type of cards do you want to export?',
        exportActive: 'Active Cards',
        exportSuspended: 'Suspended Cards',
        exportStatusActive: 'active',
        exportStatusSuspended: 'suspended',
        exportStatusStarred: 'starred',
        starredWordsLabel: 'Starred: {count}',
        scopeStarredLabel: 'Starred Words',
        starredCards: 'Starred Cards',
        deleteButtonLabel: 'Delete',
        confirmDeleteCard: 'Are you sure you want to permanently delete this card? This action cannot be undone.',
        requiredStreakLabel: 'Required Streak',
        penaltyLabel: 'Incorrect Penalty',
        syncButtonLabel: 'Sync',
        syncSuccessLabel: 'Synced!'
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
        clearCacheButton: '全ローカルデータをクリア',
        cacheClearedAlert: '全ローカルデータがクリアされました！',
        confirmClearCache: '本当にすべてのローカルデータをクリアしますか？これには、すべてのカード記録と言語設定が含まれます。この操作は元に戻せません。',
        answerPlaceholder: '答えを入力してEnterキーを押す',
        continueButton: '次へ',
        redoButton: '再練習',
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
        suspendButton: '一時停止',
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
        dangerZoneHeading: '危険区域',
        exportButton: 'リストをエクスポート',
        importButton: 'リストをインポート',
        confirmImport: '新しい単語リストをインポートしてもよろしいですか？これにより、ファイルに存在する新しいカードのみが追加され、テキストエリアのリストには影響しません。',
        importSuccess: '単語リストが正常にインポートされました！{count}枚の新しいカードが追加されました。',
        importFailed: 'インポートに失敗しました。ファイルがプレーンテキスト形式であることを確認してください。',
        dbInitializing: 'データベースを初期化しています...',
        totalWordsLabel: '合計: {count}',
        newWordsLabel: '新規: {count}',
        learnedWordsLabel: '学習済み: {count}',
        suspendedWordsLabel: '一時停止: {count}',
        exportPrompt: 'どのタイプのカードをエクスポートしますか？',
        exportActive: 'アクティブなカード',
        exportSuspended: '一時停止中のカード',
        exportStatusActive: 'アクティブ',
        exportStatusSuspended: '一時停止中',
        exportStatusStarred: 'スター付き',
        starredWordsLabel: 'スター付き: {count}',
        scopeStarredLabel: 'スター付き単語',
        starredCards: 'スター付きカード',
        deleteButtonLabel: '削除',
        confirmDeleteCard: 'このカードを完全に削除してもよろしいですか？この操作は元に戻せません。',
        requiredStreakLabel: '習得に必要な連続正解数',
        penaltyLabel: '不正解時のペナルティ',
        syncButtonLabel: '同期',
        syncSuccessLabel: '同期完了'
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    // --- DOM Elements ---
    const setupEl = document.getElementById('setup');
    const cardEl = document.getElementById('card');
    const summaryEl = document.getElementById('summary');
    const languageSelect = document.getElementById('language-select');
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const feedbackEl = document.getElementById('feedback');
    const startButton = document.getElementById('start-button');

    const randomOrderCheckbox = document.getElementById('random-order-checkbox');
    const savedRandomOrder = localStorage.getItem('randomOrder');
    if (savedRandomOrder !== null) {
        randomOrderCheckbox.checked = savedRandomOrder === 'true';
    }
    randomOrderCheckbox.addEventListener('change', () => {
        localStorage.setItem('randomOrder', randomOrderCheckbox.checked);
    });

    const wordListInput = document.getElementById('word-list-input');
    const restartButton = document.getElementById('restart-button');
    const terminateButton = document.getElementById('terminate-button');
    const showErrorsButton = document.getElementById('show-errors-button');
    const clearCacheButton = document.getElementById('clear-cache-button');
    const continueButton = document.getElementById('continue-button');
    const redoButton = document.getElementById('redo-button');
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
    const requiredStreakInput = document.getElementById('required-streak-input');
    const penaltyInput = document.getElementById('penalty-input');
    const settingsModalCloseButton = settingsModal.querySelector('.close-button');
    const textareaStatsEl = document.getElementById('textarea-stats');
    const totalWordsStatEl = document.getElementById('total-words-stat');
    const newWordsStatEl = document.getElementById('new-words-stat');
    const learnedWordsStatEl = document.getElementById('learned-words-stat');
    const suspendedWordsStatEl = document.getElementById('suspended-words-stat');
    const starredWordsStatEl = document.getElementById('starred-words-stat');
    const scopeAllRadio = document.getElementById('scope-all');
    const scopeTextareaRadio = document.getElementById('scope-textarea');
    const scopeStarredRadio = document.getElementById('scope-starred');
    const starButton = document.getElementById('star-button');
    const suspendButton = document.getElementById('suspend-button');
    const progressBar = document.getElementById('progress-bar');
    const importFromTextareaButton = document.getElementById('import-from-textarea-button');

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
    let isCramming = false;
    let allCards = new Map();
    let cardOnDisplay = null;
    let lastCorrectlyAnsweredCard = null;
    let srsSettings = {};
    const defaultSrsSettings = {
        initialInterval: { value: 1, unit: 'days' },
        secondInterval: { value: 6, unit: 'days' },
        lapseInterval: { value: 10, unit: 'minutes' },
        requiredStreak: 2,
        penalty: 2,
    };

    // --- Storage Keys ---
    const WORD_LIST_STORAGE_KEY = 'wordListContent';
    const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
    const REVIEW_SCOPE_KEY = 'reviewScope';

    // --- Database Manager ---
    const dbManager = {
        db: null,
        init: async () => {
            try {
                const SQL = await initSqlJs({ locateFile: file => `lib/sql.js/${file}` });
                const dbFile = await dbManager.loadDbFromIndexedDB();

                if (dbFile) {
                    dbManager.db = new SQL.Database(dbFile);
                    // Simple migration check
                    const res = dbManager.db.exec("PRAGMA table_info(cards);");
                    const columns = res[0].values.map(row => row[1]);
                    if (!columns.includes('isStarred')) {
                        dbManager.db.run("ALTER TABLE cards ADD COLUMN isStarred INTEGER DEFAULT 0");
                    }
                } else {
                    dbManager.db = new SQL.Database();
                    dbManager.createSchema();
                }
                await dbManager.saveDbToIndexedDB();
            } catch (err) {
                console.error("Database initialization failed:", err);
                alert("Failed to initialize the database. Please try refreshing the page.");
            }
        },
        loadDbFromIndexedDB: () => {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open("AnkiAppDB", 1);
                request.onerror = e => reject("IndexedDB error: " + e.target.errorCode);
                request.onsuccess = e => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains('files')) {
                        db.close();
                        resolve(null);
                        return;
                    }
                    const tx = db.transaction('files', 'readonly');
                    const store = tx.objectStore('files');
                    const getReq = store.get('anki.sqlite');
                    getReq.onsuccess = () => resolve(getReq.result);
                    getReq.onerror = () => reject("Failed to get DB file from IndexedDB");
                    tx.oncomplete = () => db.close();
                    tx.onerror = () => db.close();
                };
                request.onupgradeneeded = e => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains('files')) {
                        db.createObjectStore('files');
                    }
                };
            });
        },
        saveDbToIndexedDB: async () => {
            if (!dbManager.db) return;
            const data = dbManager.db.export();
            return new Promise((resolve, reject) => {
                const request = indexedDB.open("AnkiAppDB", 1);
                request.onerror = e => reject("IndexedDB error: " + e.target.errorCode);
                request.onsuccess = e => {
                    const db = e.target.result;
                    try {
                        const tx = db.transaction('files', 'readwrite');
                        const store = tx.objectStore('files');
                        store.put(data, 'anki.sqlite');
                        tx.oncomplete = () => {
                            db.close();
                            resolve();
                        };
                        tx.onerror = () => {
                            db.close();
                            reject("Failed to save DB file to IndexedDB");
                        };
                    } catch (err) {
                        db.close();
                        reject(err);
                    }
                };
            });
        },
        createSchema: () => {
            dbManager.db.run (` 
                CREATE TABLE cards (
                    question TEXT PRIMARY KEY,
                    answers TEXT,
                    repetitions INTEGER,
                    efactor REAL,
                    interval INTEGER,
                    nextReviewDate TEXT,
                    isSuspended INTEGER,
                    isStarred INTEGER DEFAULT 0
                );
            `);
            dbManager.db.run (`
                CREATE TABLE settings (
                    key TEXT PRIMARY KEY,
                    value TEXT
                );
            `);
        },
        clearAllData: async () => {
            if (dbManager.db) {
                dbManager.db.close();
                dbManager.db = null;
            }
            return new Promise((resolve, reject) => {
                const request = indexedDB.deleteDatabase("AnkiAppDB");
                request.onsuccess = () => {
                    localStorage.removeItem(WORD_LIST_STORAGE_KEY);
                    localStorage.removeItem(LANGUAGE_STORAGE_KEY);
                    localStorage.removeItem(REVIEW_SCOPE_KEY);
                    resolve();
                };
                request.onerror = (e) => reject("Error deleting database: " + e.target.error);
                request.onblocked = (e) => {
                    console.warn('Database deletion blocked.', e);
                    reject("Database deletion blocked. Please reload the page and try again.");
                };
            });
        }
    };

    // --- Spaced Repetition Logic ---
    const cardManager = {
        getNowISO: () => new Date().toISOString(),

        load: async () => {
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
                    };
                    allCards.set(card.question, card);
                });
            }
            await cardManager.updateDueCount();
        },

        syncFromTextarea: async () => {
            const text = wordListInput.value.trim();
            const lines = text.split('\n');
            
            if (text) {
                const upsertStmt = dbManager.db.prepare(`
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred) 
                    VALUES (?, ?, 0, 2.5, 0, ?, 0, 0) 
                    ON CONFLICT(question) DO UPDATE SET answers=excluded.answers;
                `);

                lines.forEach(line => {
                    const parts = line.split(',').map(part => part.trim()).filter(part => part);
                    if (parts.length < 2) return;

                    const question = parts[0];
                    const answers = parts;
                    const now = cardManager.getNowISO();

                    upsertStmt.run([question, JSON.stringify(answers), now]);

                    // Update in-memory map
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
                        });
                    }
                });
                upsertStmt.free();
            }

            await dbManager.saveDbToIndexedDB();
            await cardManager.updateDueCount();
            updateTextareaStats();
        },

        importFromText: async (text, importContext = 'active') => {
            const lines = text.split('\n');
            let newCardsAdded = 0;
            let updatedCards = 0;

            if (text) {
                const stmt = dbManager.db.prepare(`
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred) 
                    VALUES (?, ?, 0, 2.5, 0, ?, ?, ?)
                    ON CONFLICT(question) DO UPDATE SET
                        isSuspended = CASE WHEN excluded.isSuspended = 1 THEN 1 ELSE isSuspended END,
                        isStarred = CASE WHEN excluded.isStarred = 1 THEN 1 ELSE isStarred END;
                `);

                lines.forEach(line => {
                    const parts = line.split(',').map(part => part.trim()).filter(part => part);
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
                            nextReviewDate: cardManager.getNowISO(),
                            isSuspended: isSuspended === 1,
                            isStarred: isStarred === 1,
                        };
                        allCards.set(question, newCard);
                    } else {
                        if ((isSuspended && !existingCard.isSuspended) || (isStarred && !existingCard.isStarred)) {
                            updatedCards++;
                            if (isSuspended) existingCard.isSuspended = true;
                            if (isStarred) existingCard.isStarred = true;
                        }
                    }
                    
                    stmt.run([question, JSON.stringify(answers), cardManager.getNowISO(), isSuspended, isStarred]);
                });
                stmt.free();
            }

            if (newCardsAdded > 0 || updatedCards > 0) {
                await dbManager.saveDbToIndexedDB();
                await cardManager.updateDueCount();
            }
            return newCardsAdded;
        },

        getDueCards: () => {
            const now = new Date();
            return Array.from(allCards.values()).filter(card =>
                !card.isSuspended && (new Date(card.nextReviewDate) <= now || card.repetitions === 0)
            );
        },

        getAllActiveCards: () => {
            return Array.from(allCards.values()).filter(card => !card.isSuspended);
        },

        update: async (cardQuestion, isCorrect) => {
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
            }

            const quality = isCorrect ? 5 : 1;
            card.efactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
            if (card.efactor < 1.3) card.efactor = 1.3;

            const nextReview = new Date();
            nextReview.setMinutes(nextReview.getMinutes() + card.interval);
            card.nextReviewDate = nextReview.toISOString();

            dbManager.db.run (
                "UPDATE cards SET repetitions = ?, efactor = ?, interval = ?, nextReviewDate = ? WHERE question = ?",
                [card.repetitions, card.efactor, card.interval, card.nextReviewDate, card.question]
            );
            await dbManager.saveDbToIndexedDB();
        },

        suspend: async (cardQuestion) => {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isSuspended = true;
                dbManager.db.run("UPDATE cards SET isSuspended = 1 WHERE question = ?", [cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                await cardManager.updateDueCount();
                updateTextareaStats();
            }
        },

        restore: async (cardQuestion) => {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isSuspended = false;
                card.nextReviewDate = cardManager.getNowISO();
                dbManager.db.run("UPDATE cards SET isSuspended = 0, nextReviewDate = ? WHERE question = ?", [card.nextReviewDate, cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                await cardManager.updateDueCount();
                updateTextareaStats();
            }
        },

        toggleStar: async (cardQuestion) => {
            const card = allCards.get(cardQuestion);
            if (card) {
                card.isStarred = !card.isStarred;
                dbManager.db.run("UPDATE cards SET isStarred = ? WHERE question = ?", [card.isStarred ? 1 : 0, cardQuestion]);
                await dbManager.saveDbToIndexedDB();
                updateTextareaStats();
            }
        },

        deleteCard: async (cardQuestion) => {
            if (allCards.has(cardQuestion)) {
                // Delete from in-memory map and DB
                allCards.delete(cardQuestion);
                dbManager.db.run("DELETE FROM cards WHERE question = ?", [cardQuestion]);
                await dbManager.saveDbToIndexedDB();

                // Remove from textarea if present
                const currentText = wordListInput.value;
                const lines = currentText.split('\n');
                const newLines = lines.filter(line => {
                    const parts = line.split(',').map(part => part.trim());
                    return parts.length === 0 || parts[0] !== cardQuestion;
                });
                const newText = newLines.join('\n');

                if (currentText !== newText) {
                    wordListInput.value = newText;
                    localStorage.setItem(WORD_LIST_STORAGE_KEY, newText);
                }

                // Update UI stats
                await cardManager.updateDueCount();
                updateTextareaStats();
            }
        },

        updateDueCount: async () => {
            const scope = document.querySelector('input[name="review-scope"]:checked').value;

            let dueCards;
            let activeCards;

            if (scope === 'textarea') {
                const text = wordListInput.value.trim();
                const currentIds = new Set(text.split('\n').map(line => line.split(',')[0].trim()));
                dueCards = cardManager.getDueCards().filter(card => currentIds.has(card.question));
                activeCards = cardManager.getAllActiveCards().filter(card => currentIds.has(card.question));
            } else if (scope === 'starred') {
                dueCards = cardManager.getDueCards().filter(card => card.isStarred);
                activeCards = cardManager.getAllActiveCards().filter(card => card.isStarred);
            } else { // scope === 'all'
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
    async function startSession(cards) {
        if (cards.length === 0) {
            const alertKey = isCramming ? 'noCardsToCram' : 'noDueCards';
            alert(translations[languageSelect.value][alertKey]);
            return;
        }

        if (randomOrderCheckbox.checked) shuffle(cards);

        const requiredStreakSetting = parseInt(document.getElementById('required-streak-input').value, 10) || 2;
        sessionCards = cards.map(card => ({ ...card, correctStreak: 0, sessionRequiredStreak: requiredStreakSetting }));
        currentCardIndex = 0;
        sessionCorrectCount = 0;
        sessionIncorrectCount = 0;
        sessionIncorrectCards = [];
        // reviewAgainPile is no longer needed, sessionCards will be a dynamic queue

        // Reset checking state when starting a new session
        isChecking = false;
        isAnswerCorrect = false;

        setupEl.style.display = 'none';
        summaryEl.style.display = 'none';
        cardEl.style.display = 'block';
        answerInput.disabled = false;
        feedbackEl.innerHTML = '&nbsp;';
        feedbackEl.className = '';
        continueButton.style.display = 'none';

        displayNextCard();
    }

    async function startSmartReview() {
        isCramming = false;
        await cardManager.syncFromTextarea();

        let dueCards;
        if (scopeTextareaRadio.checked) {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n').map(line => line.split(',')[0].trim()));
            dueCards = cardManager.getDueCards().filter(card => currentIds.has(card.question));
        } else if (scopeStarredRadio.checked) {
            dueCards = cardManager.getDueCards().filter(card => card.isStarred);
        } else {
            dueCards = cardManager.getDueCards();
        }

        await startSession(dueCards);
    }

    async function startCramSession() {
        isCramming = true;
        await cardManager.syncFromTextarea();

        let activeCards;
        if (scopeTextareaRadio.checked) {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n').map(line => line.split(',')[0].trim()));
            activeCards = Array.from(allCards.values()).filter(card => !card.isSuspended && currentIds.has(card.question));
        } else if (scopeStarredRadio.checked) {
            activeCards = Array.from(allCards.values()).filter(card => !card.isSuspended && card.isStarred);
        } else {
            activeCards = cardManager.getAllActiveCards();
        }

        await startSession(activeCards);
    }

    function displayNextCard() {
        // Reset checking state for the new card
        isChecking = false;
        isAnswerCorrect = false;

        if (sessionCards.length > 0) {
            cardOnDisplay = sessionCards[0]; // Look at the card at the front of the queue
            questionEl.textContent = cardOnDisplay.question;
            answerInput.value = '';
            answerInput.style.height = 'auto'; // Reset textarea height
            setTimeout(() => answerInput.focus(), 0);

            starButton.textContent = cardOnDisplay.isStarred ? '★' : '☆';
            starButton.classList.toggle('starred', cardOnDisplay.isStarred);

            const progress = Math.max(0, (cardOnDisplay.correctStreak || 0) / cardOnDisplay.sessionRequiredStreak);
            progressBar.style.width = `${progress * 100}%`;
        } else {
            cardOnDisplay = null; // Clear the displayed card when the session is over
            // The queue is empty, session is over
            showSummary();
        }
    }

    async function showSummary() {
        // Reset checking state when ending session
        isChecking = false;
        isAnswerCorrect = false;

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
        await cardManager.updateDueCount();
    }

    // --- Answer Checking ---
    async function checkAnswer() {
        console.log('checkAnswer called:', {
            inputValue: answerInput.value,
            currentCard: cardOnDisplay,
            isChecking: isChecking,
            autoAdvance: autoAdvanceCheckbox.checked,
            timestamp: new Date().toISOString()
        });

        if (isChecking) {
            console.log('checkAnswer aborted: already checking');
            return;
        }
        const userAnswer = answerInput.value.trim();
        if (userAnswer === '') return;

        isChecking = true;
        answerInput.disabled = true;

        const currentCard = cardOnDisplay; // Use the card that is currently on display
        const processedUserAnswer = userAnswer.replace(/\s/g, '').toLowerCase();
        const processedAnswers = currentCard.answers.map(a => a.replace(/\s/g, '').toLowerCase());
        const penalty = parseInt(penaltyInput.value, 10) || 2;

        if (processedAnswers.includes(processedUserAnswer)) {
            // --- CORRECT ANSWER ---
            isAnswerCorrect = true;
            lastCorrectlyAnsweredCard = currentCard; // Store the card for 'Practice Again'
            currentCard.correctStreak = (currentCard.correctStreak || 0) + 1;
            
            const progress = Math.min(1, (currentCard.correctStreak || 0) / currentCard.sessionRequiredStreak);
            progressBar.style.width = `${progress * 100}%`;

            await handleCorrectAnswer(currentCard);

            // Now that it's correct, officially remove it from the front
            sessionCards.shift(); 

            // If not yet mastered for the session, put it at the back of the queue
            if (currentCard.correctStreak < currentCard.sessionRequiredStreak) {
                sessionCards.push(currentCard);
            }
            // If mastered, it's "graduated" and we simply don't add it back.

            // Show controls to proceed to the next card
            if (autoAdvanceCheckbox.checked) {
                setTimeout(proceedToNextCard, 1500);
            } else {
                continueButton.style.display = 'inline-block';
                redoButton.style.display = 'inline-block';
                suspendButton.style.display = 'inline-block';
            }
        } else {
            // --- INCORRECT ANSWER ---
            isAnswerCorrect = false;
            currentCard.sessionRequiredStreak += penalty;

            const progress = Math.max(0, (currentCard.correctStreak || 0) / currentCard.sessionRequiredStreak);
            progressBar.style.width = `${progress * 100}%`;

            await handleIncorrectAnswer(currentCard);

            // The card stays at the front of the queue. Prepare for immediate retry.
            isChecking = false;
            answerInput.disabled = false;
            // answerInput.value = '';
            answerInput.focus();
            // Do NOT show the continue button. The user MUST re-answer the current card.
        }
    }

    function proceedToNextCard() {
        console.log('proceedToNextCard called:', {
            currentCardIndex: currentCardIndex,
            sessionCardsLength: sessionCards.length,
            isChecking: isChecking,
            isAnswerCorrect: isAnswerCorrect,
            autoAdvance: autoAdvanceCheckbox.checked,
            timestamp: new Date().toISOString()
        });

        isChecking = false;
        isAnswerCorrect = false;
        feedbackEl.innerHTML = '&nbsp;';
        feedbackEl.className = '';
        answerInput.disabled = false;
        continueButton.style.display = 'none';
        redoButton.style.display = 'none';
        suspendButton.style.display = 'none';
        displayNextCard(); // Directly display the next card in the queue
    }

    async function handleCorrectAnswer(card) {
        const feedbackText = translations[languageSelect.value].correctFeedback;
        feedbackEl.textContent = feedbackText.replace('{answers}', card.answers.join(' / '));
        feedbackEl.className = 'correct';
        sessionCorrectCount++;
        if (!isCramming) {
            // Only update SRS if the card is considered "mastered" according to the main setting
            if (card.correctStreak >= srsSettings.requiredStreak) {
                await cardManager.update(card.question, true);
            }
        }
    }

    async function handleIncorrectAnswer(card) {
        const feedbackText = translations[languageSelect.value].incorrectFeedback;
        feedbackEl.textContent = feedbackText.replace('{answers}', card.answers.join(' / '));
        feedbackEl.className = 'incorrect';
        sessionIncorrectCount++;
        if (!sessionIncorrectCards.some(c => c.question === card.question)) {
            sessionIncorrectCards.push(card);
        }
        if (!isCramming && !reviewAgainPile.some(c => c.question === card.question)) {
            reviewAgainPile.push(card);
        }
        if (!isCramming) {
            await cardManager.update(card.question, false);
        }
    }

    // --- UI and Utility Functions ---
    function updateTextareaStats() {
        const text = wordListInput.value.trim();
        if (!text) {
            textareaStatsEl.style.display = 'none';
            return;
        }

        const lines = text.split('\n').filter(line => line.split(',').map(part => part.trim()).filter(part => part).length >= 2);
        const totalCount = lines.length;
        let newCount = 0;
        let learnedCount = 0;
        let suspendedCount = 0;
        let starredCount = 0;

        lines.forEach(line => {
            const question = line.split(',')[0].trim();
            const card = allCards.get(question);
            if (card) {
                if (card.isStarred) {
                    starredCount++;
                }
                if (card.isSuspended) {
                    suspendedCount++;
                } else if (card.repetitions === 0) {
                    newCount++;
                } else {
                    learnedCount++;
                }
            } else {
                newCount++;
            }
        });

        const lang = languageSelect.value;
        const t = (key) => translations[lang][key] || '';

        totalWordsStatEl.textContent = t('totalWordsLabel').replace('{count}', totalCount);
        newWordsStatEl.textContent = t('newWordsLabel').replace('{count}', newCount);
        learnedWordsStatEl.textContent = t('learnedWordsLabel').replace('{count}', learnedCount);
        suspendedWordsStatEl.textContent = t('suspendedWordsLabel').replace('{count}', suspendedCount);
        starredWordsStatEl.textContent = t('starredWordsLabel').replace('{count}', starredCount);

        textareaStatsEl.style.display = 'flex';
    }

    async function showSetup() {
        summaryEl.style.display = 'none';
        cardEl.style.display = 'none';
        setupEl.style.display = 'block';
        await cardManager.updateDueCount();
        updateTextareaStats();
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
            const currentIds = new Set(text.split('\n').map(line => line.split(',')[0].trim()));
            sourceCards = Array.from(allCards.values()).filter(card => currentIds.has(card.question));
        } else {
            sourceCards = Array.from(allCards.values());
        }

        const activeCount = sourceCards.filter(card => !card.isSuspended).length;
        const suspendedCount = sourceCards.filter(card => card.isSuspended).length;
        const starredCount = sourceCards.filter(card => card.isStarred).length;

        const filteredCards = sourceCards.filter(card => {
            if (filterType === 'suspended') return card.isSuspended;
            if (filterType === 'starred') return card.isStarred;
            return !card.isSuspended;
        });

        const tableHeader = `
            <thead>
                <tr>
                    <th>★</th>
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
            tableBody = `<tbody><tr><td colspan="8" style="text-align: center;">${t('noCardsFound', 'No cards found.')}</td></tr></tbody>`;
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

                    const suspendButton = card.isSuspended
                        ? `<button class="action-btn restore-btn" data-action="restore" data-card-id="${card.question}">${t('restore', 'Restore')}</button>`
                        : `<button class="action-btn suspend-btn" data-action="suspend" data-card-id="${card.question}">${t('suspend', 'Suspend')}</button>`;
                    
                    const deleteButton = `<button class="action-btn delete-btn" data-action="delete" data-card-id="${card.question}">${t('deleteButtonLabel', 'Delete')}</button>`;

                    const intervalInMinutes = card.interval || 0;
                    let intervalDisplay;
                    if (intervalInMinutes < 60) {
                        intervalDisplay = `${intervalInMinutes}m`;
                    } else if (intervalInMinutes < 1440) {
                        intervalDisplay = `${(intervalInMinutes / 60).toFixed(1)}h`;
                    } else {
                        intervalDisplay = `${(intervalInMinutes / 1440).toFixed(1)}d`;
                    }

                    const starDisplay = `<button class="action-btn star-toggle-btn ${card.isStarred ? 'starred' : ''}" data-action="toggleStar" data-card-id="${card.question}">${card.isStarred ? '★' : '☆'}</button>`;

                    return `
                        <tr class="${card.isSuspended ? 'suspended-row' : ''}">
                            <td>${starDisplay}</td>
                            <td>${card.question || ''}</td>
                            <td>${(card.answers || []).slice(1).join(', ')}</td>
                            <td>${formatReviewDate(card.nextReviewDate, lang)}</td>
                            <td>${intervalDisplay}</td>
                            <td>${(card.efactor || 2.5).toFixed(2)}</td>
                            <td>${status}</td>
                            <td>${suspendButton} ${deleteButton}</td>
                        </tr>`;
                }).join('') + `</tbody>`;
        }

        const ioButtonsHTML = viewType === 'all'
            ? `
            <div class="modal-io-buttons">
                <button id="export-cards-button" data-i18n="exportButton">${t('exportButton', 'Export')}</button>
                <button id="import-cards-button" data-i18n="importButton">${t('importButton', 'Import')}</button>
                <input type="file" id="import-cards-input" accept=".txt" style="display: none;">
            </div>`
            : '';

        const toolbarHTML = `
            <div class="modal-toolbar">
                <div class="modal-toolbar-left">
                    <div class="view-tabs">
                        <button class="tab-btn ${viewType === 'current' ? 'active' : ''}" data-view="current">${t('currentListCards', 'Current List')}</button>
                        <button class="tab-btn ${viewType === 'all' ? 'active' : ''}" data-view="all">${t('allTimeCards', 'All Cards')}</button>
                    </div>
                    <div class="filter-tabs">
                        <button class="tab-btn ${filterType === 'active' ? 'active' : ''}" data-filter="active">${t('activeCards', 'Active Cards')} (${activeCount})</button>
                        <button class="tab-btn ${filterType === 'suspended' ? 'active' : ''}" data-filter="suspended">${t('suspendedCards', 'Suspended')} (${suspendedCount})</button>
                        <button class="tab-btn ${filterType === 'starred' ? 'active' : ''}" data-filter="starred">${t('starredCards', 'Starred Cards')} (${starredCount})</button>
                    </div>
                </div>
                ${ioButtonsHTML}
            </div>`;

        modalIncorrectListEl.innerHTML = `${toolbarHTML}<div class="table-scroll-container"><table class="cards-table">${tableHeader}${tableBody}</table></div>`;
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

    async function handleFile(file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            wordListInput.value = e.target.result;
            localStorage.setItem(WORD_LIST_STORAGE_KEY, e.target.result);
            await cardManager.syncFromTextarea();
        };
        reader.readAsText(file);
    }

    // --- I/O Functions ---
    function exportCards() {
        const lang = languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
        const filterType = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';

        let cardsToExport;
        switch (filterType) {
            case 'suspended':
                cardsToExport = Array.from(allCards.values()).filter(card => card.isSuspended);
                break;
            case 'starred':
                cardsToExport = Array.from(allCards.values()).filter(card => card.isStarred);
                break;
            case 'active':
            default:
                cardsToExport = Array.from(allCards.values()).filter(card => !card.isSuspended);
                break;
        }

        if (cardsToExport.length === 0) {
            alert('No cards to export for the selected status.');
            return;
        }

        const cardData = cardsToExport.map(card => `${card.question},${card.answers.slice(1).join(',')}`);
        const data = cardData.join('\n');
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        const now = new Date();
        const pad = (num) => num.toString().padStart(2, '0');
        const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
        
        let statusKey;
        switch (filterType) {
            case 'suspended':
                statusKey = 'exportStatusSuspended';
                break;
            case 'starred':
                statusKey = 'exportStatusStarred';
                break;
            case 'active':
            default:
                statusKey = 'exportStatusActive';
                break;
        }
        const localizedStatus = t(statusKey, filterType);

        a.href = url;
        a.download = `anki_${localizedStatus}_${timestamp}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async function importCards(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            if (confirm(translations[languageSelect.value].confirmImport)) {
                try {
                    const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
                    const importContext = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';

                    const newCardsCount = await cardManager.importFromText(content, importContext);
                    const successMsgTemplate = translations[languageSelect.value].importSuccess;
                    alert(successMsgTemplate.replace('{count}', newCardsCount));

                    renderAllCardsModal('all', importContext);

                } catch (error) {
                    alert(translations[languageSelect.value].importFailed);
                }
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    // --- Language Functions ---
    async function setLanguage(lang) {
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
        await cardManager.updateDueCount();
        updateLastUpdatedTime(lang);
        updateTextareaStats();
    }

    // --- Update Last Updated Time ---
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
    async function loadSettings() {
        const res = dbManager.db.exec("SELECT value FROM settings WHERE key = 'srsSettings'");
        let savedSettings = {};
        if (res.length > 0 && res[0].values.length > 0) {
            savedSettings = JSON.parse(res[0].values[0][0]);
        }
        srsSettings = {
            initialInterval: { ...defaultSrsSettings.initialInterval, ...(savedSettings.initialInterval || {}) },
            secondInterval: { ...defaultSrsSettings.secondInterval, ...(savedSettings.secondInterval || {}) },
            lapseInterval: { ...defaultSrsSettings.lapseInterval, ...(savedSettings.lapseInterval || {}) },
            requiredStreak: savedSettings.requiredStreak || defaultSrsSettings.requiredStreak,
            penalty: savedSettings.penalty || defaultSrsSettings.penalty,
        };
    }

    async function saveSettings() {
        srsSettings.initialInterval.value = parseInt(initialIntervalValueInput.value, 10) || defaultSrsSettings.initialInterval.value;
        srsSettings.initialInterval.unit = initialIntervalUnitInput.value;
        srsSettings.secondInterval.value = parseInt(secondIntervalValueInput.value, 10) || defaultSrsSettings.secondInterval.value;
        srsSettings.secondInterval.unit = secondIntervalUnitInput.value;
        srsSettings.lapseInterval.value = parseInt(lapseIntervalValueInput.value, 10) || defaultSrsSettings.lapseInterval.value;
        srsSettings.lapseInterval.unit = lapseIntervalUnitInput.value;
        srsSettings.requiredStreak = parseInt(requiredStreakInput.value, 10) || defaultSrsSettings.requiredStreak;
        srsSettings.penalty = parseInt(penaltyInput.value, 10) || defaultSrsSettings.penalty;

        dbManager.db.run("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", ['srsSettings', JSON.stringify(srsSettings)]);
        await dbManager.saveDbToIndexedDB();
    }

    function populateSettingsModal() {
        initialIntervalValueInput.value = srsSettings.initialInterval.value;
        initialIntervalUnitInput.value = srsSettings.initialInterval.unit;
        secondIntervalValueInput.value = srsSettings.secondInterval.value;
        secondIntervalUnitInput.value = srsSettings.secondInterval.unit;
        lapseIntervalValueInput.value = srsSettings.lapseInterval.value;
        lapseIntervalUnitInput.value = srsSettings.lapseInterval.unit;
        requiredStreakInput.value = srsSettings.requiredStreak;
        penaltyInput.value = srsSettings.penalty;
    }

    // --- Event Listeners ---
    languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
    showErrorsButton.addEventListener('click', showAllCardsModal);

    redoButton.addEventListener('click', () => {
        if (!lastCorrectlyAnsweredCard) return;

        // Put the last correct card back at the front of the queue
        sessionCards.unshift(lastCorrectlyAnsweredCard);
        lastCorrectlyAnsweredCard = null; // Clear it after use

        // Reset UI for re-practice
        answerInput.value = '';
        answerInput.disabled = false;
        feedbackEl.innerHTML = '&nbsp;';
        feedbackEl.className = '';
        continueButton.style.display = 'none';
        redoButton.style.display = 'none';
        suspendButton.style.display = 'none';
        isChecking = false;
        isAnswerCorrect = false;
        
        displayNextCard();
        answerInput.focus();
    });

        suspendButton.addEventListener('click', async () => {
            const currentCard = cardOnDisplay; // Get the card that is currently on display
            if (currentCard) {
                await cardManager.suspend(currentCard.question);
                // Remove the suspended card from the session queue
                sessionCards = sessionCards.filter(card => card.question !== currentCard.question);
                proceedToNextCard();
            }
        });
    
        continueButton.addEventListener('click', proceedToNextCard);

        // Auto-resize textarea based on content
        function autoResizeTextarea() {
            answerInput.style.height = 'auto';
            answerInput.style.height = Math.min(answerInput.scrollHeight, 200) + 'px';
        }

        answerInput.addEventListener('input', autoResizeTextarea);

        answerInput.addEventListener('keydown', (event) => {
            console.log('answerInput keydown:', {
                key: event.key,
                isChecking: isChecking,
                isAnswerCorrect: isAnswerCorrect,
                disabled: answerInput.disabled,
                autoAdvance: autoAdvanceCheckbox.checked,
                timestamp: new Date().toISOString()
            });

            if (event.key === 'Enter') {
                event.stopPropagation();
                event.preventDefault();
                checkAnswer();
            }
        });
        restartButton.addEventListener('click', showSetup);
        terminateButton.addEventListener('click', showSummary);
    
        importFromTextareaButton.addEventListener('click', async () => {
            await cardManager.syncFromTextarea();
            
            const lang = languageSelect.value;
            const t = (key, fallback) => translations[lang][key] || fallback;
    
            // Provide feedback
            const originalText = t('syncButtonLabel', 'Sync');
            importFromTextareaButton.textContent = t('syncSuccessLabel', 'Synced!');
            importFromTextareaButton.disabled = true;
            importFromTextareaButton.style.backgroundColor = '#34c759'; // Green for success
    
            setTimeout(() => {
                importFromTextareaButton.textContent = originalText;
                importFromTextareaButton.disabled = false;
                importFromTextareaButton.style.backgroundColor = ''; // Revert to original color from CSS
            }, 2000);
        });
    
        const closeAllCardsModal = () => {
            errorModal.style.display = 'none';
            cardManager.updateDueCount();
        };
    
        closeModalButton.addEventListener('click', closeAllCardsModal);
        window.addEventListener('click', (event) => {
            if (event.target == errorModal) closeAllCardsModal();
            if (event.target == settingsModal) settingsModal.style.display = 'none';
        });
        wordListInput.addEventListener('input', async () => {
            localStorage.setItem(WORD_LIST_STORAGE_KEY, wordListInput.value);
        });
    
        modalIncorrectListEl.addEventListener('click', async (event) => {
            const target = event.target;
            const lang = languageSelect.value;
            const t = (key, fallback) => translations[lang][key] || fallback;
    
            if (target.matches('.tab-btn')) {
                const activeViewBtn = modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
                const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
    
                let viewType = activeViewBtn ? activeViewBtn.dataset.view : 'current';
                let filterType = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';
    
                if (target.dataset.view) viewType = target.dataset.view;
                if (target.dataset.filter) filterType = target.dataset.filter;
    
                renderAllCardsModal(viewType, filterType);
    
            } else if (target.matches('.action-btn')) {
                const scrollContainer = modalIncorrectListEl.querySelector('.table-scroll-container');
                const previousScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
    
                const action = target.dataset.action;
                const cardId = target.dataset.cardId;
                if (action === 'suspend') await cardManager.suspend(cardId);
                else if (action === 'restore') await cardManager.restore(cardId);
                else if (action === 'toggleStar') await cardManager.toggleStar(cardId);
                else if (action === 'delete') {
                    if (confirm(t('confirmDeleteCard', 'Are you sure you want to permanently delete this card?'))) {
                        await cardManager.deleteCard(cardId);
                    }
                }
    
                const activeViewBtn = modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
                const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
                renderAllCardsModal(
                    activeViewBtn ? activeViewBtn.dataset.view : 'current',
                    activeFilterBtn ? activeFilterBtn.dataset.filter : 'active'
                );
    
                const newScrollContainer = modalIncorrectListEl.querySelector('.table-scroll-container');
                if (newScrollContainer) {
                    newScrollContainer.scrollTop = previousScrollTop;
                }
            }
        });
    
        starButton.addEventListener('click', async () => {
            if (cardOnDisplay) { // Use the card that is currently on display
                await cardManager.toggleStar(cardOnDisplay.question);
                cardOnDisplay.isStarred = !cardOnDisplay.isStarred; // Manually sync the session card's state
                starButton.textContent = cardOnDisplay.isStarred ? '★' : '☆';
                starButton.classList.toggle('starred', cardOnDisplay.isStarred);
                answerInput.focus();
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
    
        errorModal.addEventListener('click', (event) => {
            if (event.target.matches('#export-cards-button')) exportCards();
            if (event.target.matches('#import-cards-button')) {
                const importInput = errorModal.querySelector('#import-cards-input');
                if (importInput) importInput.click();
            }
        });
        errorModal.addEventListener('change', (event) => {
            if (event.target.matches('#import-cards-input')) importCards(event);
        });
    
        settingsButton.addEventListener('click', () => {
            populateSettingsModal();
            settingsModal.style.display = 'flex';
        });
        settingsModalCloseButton.addEventListener('click', () => settingsModal.style.display = 'none');
        saveSettingsButton.addEventListener('click', async () => {
            await saveSettings();
            settingsModal.style.display = 'none';
        });
        resetSettingsButton.addEventListener('click', async () => {
            srsSettings = { ...defaultSrsSettings };
            populateSettingsModal();
            await saveSettings();
        });
        clearCacheButton.addEventListener('click', async () => {
            if (confirm(translations[languageSelect.value].confirmClearCache)) {
                try {
                    await dbManager.clearAllData();
                    alert(translations[languageSelect.value].cacheClearedAlert);
                    location.reload();
                } catch (error) {
                    console.error("Failed to clear data:", error);
                    alert("Error clearing data. See console for details.");
                }
            }
        });
    
        document.addEventListener('keydown', (event) => {
            console.log('document keydown:', {
                key: event.key,
                continueButtonVisible: continueButton.style.display !== 'none',
                isAnswerCorrect: isAnswerCorrect,
                modalOpen: errorModal.style.display === 'block' || settingsModal.style.display === 'flex',
                timestamp: new Date().toISOString()
            });

            if (errorModal.style.display === 'block' || settingsModal.style.display === 'flex') return;
            if (event.key === 'Enter' && continueButton.style.display !== 'none') {
                event.preventDefault();
                if (isAnswerCorrect) proceedToNextCard();
            }
        });
    
            // --- Initialization ---
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
                    errorModal.style.display = 'none';
                    settingsModal.style.display = 'none';
        
                    await dbManager.init();
                    if (!dbManager.db) return; // Stop if DB failed to init
        
                    await loadSettings();
                    populateSettingsModal();
                    setupButtons();
        
                    const savedWordList = localStorage.getItem(WORD_LIST_STORAGE_KEY);
                    if (savedWordList) wordListInput.value = savedWordList;
    
                    const savedScope = localStorage.getItem(REVIEW_SCOPE_KEY);
                    if (savedScope === 'textarea') {
                        scopeTextareaRadio.checked = true;
                    } else if (savedScope === 'starred') {
                        scopeStarredRadio.checked = true;
                    } else {
                        scopeAllRadio.checked = true;
                    }
        
                    await setLanguage(initialLang);
                    await cardManager.load();
                    await cardManager.syncFromTextarea();
                    await showSetup();
        
                    scopeAllRadio.addEventListener('change', () => {
                        localStorage.setItem(REVIEW_SCOPE_KEY, 'all');
                        cardManager.updateDueCount();
                    });
                    scopeTextareaRadio.addEventListener('change', () => {
                        localStorage.setItem(REVIEW_SCOPE_KEY, 'textarea');
                        cardManager.updateDueCount();
                    });
                    scopeStarredRadio.addEventListener('change', () => {
                        localStorage.setItem(REVIEW_SCOPE_KEY, 'starred');
                        cardManager.updateDueCount();
                    });
    
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