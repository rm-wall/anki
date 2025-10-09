// --- I18N Translations ---
const translations = {
    'zh-CN': {
        title: '暗记程序',
        languageLabel: '语言:',
        mainHeading: '暗记程序',
        listHeading: '输入单词列表',
        instructions: '格式：<b>问题| 答案1| 答案2...</b>',
        randomOrderLabel: '随机顺序',
        smartReviewButton: '智能复习 ({dueCount})',
        cramButton: '自由学习',
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
        finishRoundButton: '完成本轮',
        finishRoundPendingButton: '正在完成本轮...',
        terminateButton: '终止测验',
        summaryHeading: '本轮学习完成！',
        correctLabel: '正确',
        incorrectLabel: '错误',
        incorrectWordsHeading: '本轮答错的单词',
        restartButton: '返回主菜单',
        allCardsModalHeading: '所有卡片状态',
        correctFeedback: '正确! 答案:{answers}',
        incorrectFeedback: '错误! 答案:{answers}',
        emptyListAlert: '单词列表为空或格式不正确。',
        noDueCards: '今日无待复习卡片！',
        noCardsToCram: '没有可供自由复习的卡片。',
        autoAdvanceLabel: '自动跳到下一题',
        suspendButton: '已掌握',
        skipButton: '跳过',
        cardQuestion: '问题',
        cardAnswers: '答案',
        cardNextReview: '下次复习',
        cardInterval: '间隔(天)',
        cardEfactor: '难度系数',
        cardMistakes: '错误次数',
        cardStatus: '状态',
        cardActions: '操作',
        statusNew: '新',
        statusLearning: '学习中',
        statusReview: '复习',
        statusDue: '到期',
        statusSuspended: '已掌握',
        today: '今天',
        noCardsFound: '没有找到任何卡片。',
        suspend: '已掌握',
        restore: '恢复',
        activeCards: '活动卡片',
        suspendedCards: '已掌握',
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
        backupHeading: '备份与恢复',
        exportDatabaseButton: '导出数据库',
        importDatabaseButton: '导入数据库',
        confirmImportDatabase: '确定要导入数据库吗？这将覆盖当前的所有数据（包括学习进度、历史记录等）。建议先导出当前数据库作为备份。',
        importDatabaseSuccess: '数据库导入成功！',
        importDatabaseFailed: '数据库导入失败。请确保文件是有效的数据库文件。',
        exportButton: '导出词表',
        importButton: '导入词表',
        confirmImport: '确定要导入新的单词列表吗？这只会添加文件中不存在的新卡片，不会影响文本框中的列表。',
        importSuccess: '词表导入成功！{count}张新卡片已添加。',
        importFailed: '导入失败。请检查文件是否为纯文本格式。',
        dbInitializing: '正在初始化数据库...',
        totalWordsLabel: '总共: {count}',
        newWordsLabel: '新: {count}',
        learnedWordsLabel: '已学: {count}',
        suspendedWordsLabel: '已掌握: {count}',
        exportPrompt: '要导出哪种类型的卡片？',
        exportActive: '活动卡片',
        exportSuspended: '已掌握卡片',
        exportStatusActive: '活动',
        exportStatusSuspended: '已掌握',
        exportStatusStarred: '星标',
        starredWordsLabel: '星标: {count}',
        scopeStarredLabel: '星标单词',
        starredCards: '星标卡片',
        deleteButtonLabel: '删除',
        confirmDeleteCard: '确定要永久删除这张卡片吗？此操作不可撤销。',
        requiredStreakLabel: '掌握所需连对次数',
        penaltyLabel: '答错扣除连对次数',
        syncButtonLabel: '同步',
        syncSuccessLabel: '已同步',
        importFileButtonLabel: '导入',
        exportTextareaButtonLabel: '导出',
        exportSuccessLabel: '已导出',
        exportEmptyWarning: '文本框为空，无内容可导出。',
        remainingCards: '剩余 {count} 题',
        editCardModalHeading: '编辑卡片',
        editQuestionLabel: '问题',
        editAnswersLabel: '答案 (用 | 分隔)',
        cancelButton: '取消',
        editButtonLabel: '编辑',
        cardUpdatedSuccess: '卡片已更新！',
        viewHistoryButton: '历史',
        reviewHistoryHeading: '复习历史',
        historyDate: '时间',
        historyResult: '结果',
        historyInterval: '间隔(天)',
        historyEfactor: '难度系数',
        historyCorrect: '正确',
        historyIncorrect: '错误',
        noHistoryFound: '暂无复习历史',
        yourAnswer: '你的答案',
        correctAnswer: '正确答案'
    },
    'en': {
        title: 'Anki Program',
        languageLabel: 'Language:',
        mainHeading: 'Anki Program',
        listHeading: 'Enter Word List',
        instructions: 'Format: <b>Question| Answer 1| Answer 2...</b>',
        randomOrderLabel: 'Random Order',
        smartReviewButton: 'Smart Review ({dueCount})',
        cramButton: 'Free Study',
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
        finishRoundButton: 'Finish Round',
        finishRoundPendingButton: 'Finishing round...',
        terminateButton: 'End Test',
        summaryHeading: 'Session Finished!',
        correctLabel: 'Correct',
        incorrectLabel: 'Incorrect',
        incorrectWordsHeading: 'Incorrect words this session',
        restartButton: 'Return to Main Menu',
        allCardsModalHeading: 'All Cards Status',
        correctFeedback: 'Correct! The answer is:{answers}',
        incorrectFeedback: 'Incorrect! The answer is:{answers}',
        emptyListAlert: 'The word list is empty or formatted incorrectly.',
        noDueCards: 'No cards due for review today!',
        noCardsToCram: 'There are no cards available to cram.',
        autoAdvanceLabel: 'Auto-advance to next question',
        suspendButton: 'Known',
        skipButton: 'Skip',
        cardQuestion: 'Question',
        cardAnswers: 'Answers',
        cardNextReview: 'Next Review',
        cardInterval: 'Interval(d)',
        cardEfactor: 'E-Factor',
        cardMistakes: 'Mistakes',
        cardStatus: 'Status',
        cardActions: 'Actions',
        statusNew: 'New',
        statusLearning: 'Learning',
        statusReview: 'Review',
        statusDue: 'Due',
        statusSuspended: 'Known',
        today: 'Today',
        noCardsFound: 'No cards found.',
        suspend: 'Known',
        restore: 'Restore',
        activeCards: 'Active Cards',
        suspendedCards: 'Known',
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
        backupHeading: 'Backup & Restore',
        exportDatabaseButton: 'Export Database',
        importDatabaseButton: 'Import Database',
        confirmImportDatabase: 'Are you sure you want to import the database? This will overwrite all current data (including learning progress, history, etc.). It is recommended to export your current database as a backup first.',
        importDatabaseSuccess: 'Database imported successfully!',
        importDatabaseFailed: 'Database import failed. Please ensure the file is a valid database file.',
        exportButton: 'Export List',
        importButton: 'Import List',
        confirmImport: 'Are you sure you want to import a new word list? This will only add new cards from the file that do not already exist and will not affect the list in the textarea.',
        importSuccess: 'Word list imported successfully! {count} new cards have been added.',
        importFailed: 'Import failed. Please ensure the file is a plain text file.',
        dbInitializing: 'Initializing Database...', 
        totalWordsLabel: 'Total: {count}',
        newWordsLabel: 'New: {count}',
        learnedWordsLabel: 'Learned: {count}',
        suspendedWordsLabel: 'Known: {count}',
        exportPrompt: 'Which type of cards do you want to export?',
        exportActive: 'Active Cards',
        exportSuspended: 'Known Cards',
        exportStatusActive: 'active',
        exportStatusSuspended: 'known',
        exportStatusStarred: 'starred',
        starredWordsLabel: 'Starred: {count}',
        scopeStarredLabel: 'Starred Words',
        starredCards: 'Starred Cards',
        deleteButtonLabel: 'Delete',
        confirmDeleteCard: 'Are you sure you want to permanently delete this card? This action cannot be undone.',
        requiredStreakLabel: 'Required Streak',
        penaltyLabel: 'Incorrect Penalty',
        syncButtonLabel: 'Sync',
        syncSuccessLabel: 'Synced!',
        importFileButtonLabel: 'Import',
        exportTextareaButtonLabel: 'Export',
        exportSuccessLabel: 'Exported!',
        exportEmptyWarning: 'Textarea is empty, nothing to export.',
        remainingCards: '{count} cards remaining',
        editCardModalHeading: 'Edit Card',
        editQuestionLabel: 'Question',
        editAnswersLabel: 'Answers (separated by |)',
        cancelButton: 'Cancel',
        editButtonLabel: 'Edit',
        cardUpdatedSuccess: 'Card updated!',
        viewHistoryButton: 'History',
        reviewHistoryHeading: 'Review History',
        historyDate: 'Date',
        historyResult: 'Result',
        historyInterval: 'Interval(d)',
        historyEfactor: 'E-Factor',
        historyCorrect: 'Correct',
        historyIncorrect: 'Incorrect',
        noHistoryFound: 'No review history found',
        yourAnswer: 'Your answer',
        correctAnswer: 'Correct answer'
    },
    'ja': {
        title: '暗記プログラム',
        languageLabel: '言語:',
        mainHeading: '暗記プログラム',
        listHeading: '単語リストを入力',
        instructions: '形式：<b>問題| 答え1| 答え2...</b>',
        randomOrderLabel: 'ランダムな順序',
        smartReviewButton: 'スマートレビュー ({dueCount})',
        cramButton: '自由学習',
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
        finishRoundButton: 'ラウンド完了',
        finishRoundPendingButton: 'ラウンドを完了中...',
        terminateButton: 'テスト終了',
        summaryHeading: 'セッション完了！',
        correctLabel: '正解',
        incorrectLabel: '不正解',
        incorrectWordsHeading: 'このセッションで間違った単語',
        restartButton: 'メインメニューに戻る',
        allCardsModalHeading: '全カードの状態',
        correctFeedback: '正解！答えは:{answers}',
        incorrectFeedback: '不正解！答えは:{answers}',
        emptyListAlert: '単語リストが空か、形式が正しくありません。',
        noDueCards: '今日レビューするカードはありません！',
        noCardsToCram: '集中学習できるカードがありません。',
        autoAdvanceLabel: '正解の場合、自動的に次に進む',
        suspendButton: '既知',
        skipButton: 'スキップ',
        cardQuestion: '問題',
        cardAnswers: '答え',
        cardNextReview: '次回レビュー',
        cardInterval: '間隔(日)',
        cardEfactor: '難易度係数',
        cardMistakes: 'ミス回数',
        cardStatus: '状態',
        cardActions: '操作',
        statusNew: '新規',
        statusLearning: '学習中',
        statusReview: '復習',
        statusDue: '期限切れ',
        statusSuspended: '既知',
        today: '今日',
        noCardsFound: 'カードが見つかりません。',
        suspend: '既知',
        restore: '再開',
        activeCards: 'アクティブなカード',
        suspendedCards: '既知',
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
        backupHeading: 'バックアップと復元',
        exportDatabaseButton: 'データベースをエクスポート',
        importDatabaseButton: 'データベースをインポート',
        confirmImportDatabase: 'データベースをインポートしてもよろしいですか？これにより、現在のすべてのデータ（学習進度、履歴など）が上書きされます。まず現在のデータベースをエクスポートしてバックアップすることをお勧めします。',
        importDatabaseSuccess: 'データベースが正常にインポートされました！',
        importDatabaseFailed: 'データベースのインポートに失敗しました。ファイルが有効なデータベースファイルであることを確認してください。',
        exportButton: 'リストをエクスポート',
        importButton: 'リストをインポート',
        confirmImport: '新しい単語リストをインポートしてもよろしいですか？これにより、ファイルに存在する新しいカードのみが追加され、テキストエリアのリストには影響しません。',
        importSuccess: '単語リストが正常にインポートされました！{count}枚の新しいカードが追加されました。',
        importFailed: 'インポートに失敗しました。ファイルがプレーンテキスト形式であることを確認してください。',
        dbInitializing: 'データベースを初期化しています...',
        totalWordsLabel: '合計: {count}',
        newWordsLabel: '新規: {count}',
        learnedWordsLabel: '学習済み: {count}',
        suspendedWordsLabel: '既知: {count}',
        exportPrompt: 'どのタイプのカードをエクスポートしますか？',
        exportActive: 'アクティブなカード',
        exportSuspended: '既知のカード',
        exportStatusActive: 'アクティブ',
        exportStatusSuspended: '既知',
        exportStatusStarred: 'スター付き',
        starredWordsLabel: 'スター付き: {count}',
        scopeStarredLabel: 'スター付き単語',
        starredCards: 'スター付きカード',
        deleteButtonLabel: '削除',
        confirmDeleteCard: 'このカードを完全に削除してもよろしいですか？この操作は元に戻せません。',
        requiredStreakLabel: '習得に必要な連続正解数',
        penaltyLabel: '不正解時のペナルティ',
        syncButtonLabel: '同期',
        syncSuccessLabel: '同期完了',
        importFileButtonLabel: 'インポート',
        exportTextareaButtonLabel: 'エクスポート',
        exportSuccessLabel: 'エクスポート完了',
        exportEmptyWarning: 'テキストエリアが空です。エクスポートする内容がありません。',
        remainingCards: '残り {count} 題',
        editCardModalHeading: 'カードを編集',
        editQuestionLabel: '問題',
        editAnswersLabel: '答え (| で区切る)',
        cancelButton: 'キャンセル',
        editButtonLabel: '編集',
        cardUpdatedSuccess: 'カードが更新されました！',
        viewHistoryButton: '履歴',
        reviewHistoryHeading: '復習履歴',
        historyDate: '日時',
        historyResult: '結果',
        historyInterval: '間隔(日)',
        historyEfactor: '難易度係数',
        historyCorrect: '正解',
        historyIncorrect: '不正解',
        noHistoryFound: '復習履歴がありません',
        yourAnswer: 'あなたの答え',
        correctAnswer: '正しい答え'
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
    const answerHint = document.getElementById('answer-hint');
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
    const skipButton = document.getElementById('skip-button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const remainingCardsEl = document.getElementById('remaining-cards');
    const importFileButton = document.getElementById('import-file-button');
    const importFromTextareaButton = document.getElementById('import-from-textarea-button');
    const exportTextareaButton = document.getElementById('export-textarea-button');
    const editCardModal = document.getElementById('edit-card-modal');
    const editCardButton = document.getElementById('edit-card-button');
    const editQuestionInput = document.getElementById('edit-question-input');
    const editAnswersInput = document.getElementById('edit-answers-input');
    const saveEditButton = document.getElementById('save-edit-button');
    const cancelEditButton = document.getElementById('cancel-edit-button');
    const editCardModalCloseButton = editCardModal.querySelector('.close-button');
    const historyModal = document.getElementById('history-modal');
    const historyCardInfo = document.getElementById('history-card-info');
    const historyList = document.getElementById('history-list');
    const historyModalCloseButton = historyModal.querySelector('.close-button');
    const finishRoundButton = document.getElementById('finish-round-button');

    let cramButton;
    let currentEditingCard = null;

    // --- App State ---
    let sessionCards = [];
    let currentCardIndex = 0;
    let sessionCorrectCount = 0;
    let sessionIncorrectCount = 0;
    let sessionIncorrectCards = [];
    let reviewAgainPile = [];
    let isChecking = false;
    let pendingGracefulExit = false;
    let isAnswerCorrect = false;
    let isCramming = false;
    let allCards = new Map();
    let cardOnDisplay = null;
    let lastCorrectlyAnsweredCard = null;
    let isPracticingAgain = false;
    let lastIncorrectAnswer = null; // Track last incorrect answer to avoid repeated penalties
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
                    if (!columns.includes('totalMistakes')) {
                        dbManager.db.run("ALTER TABLE cards ADD COLUMN totalMistakes INTEGER DEFAULT 0");
                    }

                    // Create review_history table if it doesn't exist
                    dbManager.db.run(`
                        CREATE TABLE IF NOT EXISTS review_history (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            question TEXT,
                            isCorrect INTEGER,
                            reviewDate TEXT,
                            intervalAtReview INTEGER,
                            efactorAtReview REAL,
                            FOREIGN KEY (question) REFERENCES cards(question)
                        );
                    `);
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
                    isStarred INTEGER DEFAULT 0,
                    totalMistakes INTEGER DEFAULT 0
                );
            `);
            dbManager.db.run (`
                CREATE TABLE settings (
                    key TEXT PRIMARY KEY,
                    value TEXT
                );
            `);
            dbManager.db.run (`
                CREATE TABLE IF NOT EXISTS review_history (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    question TEXT,
                    isCorrect INTEGER,
                    reviewDate TEXT,
                    intervalAtReview INTEGER,
                    efactorAtReview REAL,
                    FOREIGN KEY (question) REFERENCES cards(question)
                );
            `);
        },
        addReviewHistory: async (question, isCorrect, card) => {
            const reviewDate = new Date().toISOString();
            const intervalAtReview = card.interval || 0;
            const efactorAtReview = card.efactor || 2.5;

            dbManager.db.run(`
                INSERT INTO review_history (question, isCorrect, reviewDate, intervalAtReview, efactorAtReview)
                VALUES (?, ?, ?, ?, ?)
            `, [question, isCorrect ? 1 : 0, reviewDate, intervalAtReview, efactorAtReview]);

            await dbManager.saveDbToIndexedDB();
        },
        getReviewHistory: (question = null, limit = 100) => {
            const query = question
                ? `SELECT * FROM review_history WHERE question = ? ORDER BY reviewDate DESC LIMIT ?`
                : `SELECT * FROM review_history ORDER BY reviewDate DESC LIMIT ?`;

            const params = question ? [question, limit] : [limit];
            const res = dbManager.db.exec(query, params);

            if (res.length === 0) return [];

            return res[0].values.map(row => ({
                id: row[0],
                question: row[1],
                isCorrect: row[2] === 1,
                reviewDate: row[3],
                intervalAtReview: row[4],
                efactorAtReview: row[5]
            }));
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
                        totalMistakes: row[8] || 0,
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
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes)
                    VALUES (?, ?, 0, 2.5, 0, ?, 0, 0, 0)
                    ON CONFLICT(question) DO UPDATE SET answers=excluded.answers;
                `);

                lines.forEach(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return; // Skip comments and empty lines

                    const parts = line.split('|').map(part => part.trim()).filter(part => part);
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
                            totalMistakes: 0,
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
                    INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes)
                    VALUES (?, ?, 0, 2.5, 0, ?, ?, ?, 0)
                    ON CONFLICT(question) DO UPDATE SET
                        isSuspended = CASE WHEN excluded.isSuspended = 1 THEN 1 ELSE isSuspended END,
                        isStarred = CASE WHEN excluded.isStarred = 1 THEN 1 ELSE isStarred END;
                `);

                lines.forEach(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return; // Skip comments and empty lines

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
                            nextReviewDate: cardManager.getNowISO(),
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
            const dueCards = Array.from(allCards.values()).filter(card =>
                !card.isSuspended && (new Date(card.nextReviewDate) <= now || card.repetitions === 0)
            );
            // Sort by totalMistakes descending, then by efactor ascending (harder cards first)
            return dueCards.sort((a, b) => {
                const mistakesDiff = (b.totalMistakes || 0) - (a.totalMistakes || 0);
                if (mistakesDiff !== 0) return mistakesDiff;
                return a.efactor - b.efactor;
            });
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
                card.totalMistakes = (card.totalMistakes || 0) + 1;
            }

            const quality = isCorrect ? 5 : 1;
            card.efactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
            if (card.efactor < 1.3) card.efactor = 1.3;

            // Further penalize efactor based on totalMistakes (more mistakes = lower efactor = harder card)
            if (!isCorrect && card.totalMistakes > 5) {
                const mistakePenalty = Math.min((card.totalMistakes - 5) * 0.02, 0.3);
                card.efactor -= mistakePenalty;
                if (card.efactor < 1.3) card.efactor = 1.3;
            }

            const nextReview = new Date();
            nextReview.setMinutes(nextReview.getMinutes() + card.interval);
            card.nextReviewDate = nextReview.toISOString();

            dbManager.db.run (
                "UPDATE cards SET repetitions = ?, efactor = ?, interval = ?, nextReviewDate = ?, totalMistakes = ? WHERE question = ?",
                [card.repetitions, card.efactor, card.interval, card.nextReviewDate, card.totalMistakes, card.question]
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
                // Delete associated review history
                dbManager.db.run("DELETE FROM review_history WHERE question = ?", [cardQuestion]);
                await dbManager.saveDbToIndexedDB();

                // Remove from textarea if present
                const currentText = wordListInput.value;
                const lines = currentText.split('\n');
                const newLines = lines.filter(line => {
                    const trimmedLine = line.trim();
                    // Keep comment lines and empty lines
                    if (trimmedLine.startsWith('#') || trimmedLine === '') return true;

                    const parts = line.split('|').map(part => part.trim());
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
                const currentIds = new Set(text.split('\n')
                    .filter(line => {
                        const trimmedLine = line.trim();
                        return !trimmedLine.startsWith('#') && trimmedLine !== '';
                    })
                    .map(line => line.split('|')[0].trim()));
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
        sessionCards = cards.map(card => ({ ...card, correctStreak: 0, sessionRequiredStreak: requiredStreakSetting, hasBeenAttempted: false }));
        currentCardIndex = 0;
        sessionCorrectCount = 0;
        sessionIncorrectCount = 0;
        sessionIncorrectCards = [];
        pendingGracefulExit = false;
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

        // Reset finish round button
        const lang = languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;
        finishRoundButton.textContent = t('finishRoundButton', 'Finish Round');
        finishRoundButton.disabled = false;

        displayNextCard();
    }

    async function startSmartReview() {
        isCramming = false;
        await cardManager.syncFromTextarea();

        let dueCards;
        if (scopeTextareaRadio.checked) {
            const text = wordListInput.value.trim();
            const currentIds = new Set(text.split('\n')
                .filter(line => {
                    const trimmedLine = line.trim();
                    return !trimmedLine.startsWith('#') && trimmedLine !== '';
                })
                .map(line => line.split('|')[0].trim()));
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
            const textareaOrder = text.split('\n')
                .filter(line => {
                    const trimmedLine = line.trim();
                    return !trimmedLine.startsWith('#') && trimmedLine !== '';
                })
                .map(line => line.split('|')[0].trim());
            const currentIds = new Set(textareaOrder);
            activeCards = Array.from(allCards.values()).filter(card => !card.isSuspended && currentIds.has(card.question));

            // Sort by textarea order if random order is disabled
            if (!randomOrderCheckbox.checked) {
                activeCards.sort((a, b) => textareaOrder.indexOf(a.question) - textareaOrder.indexOf(b.question));
            }
        } else if (scopeStarredRadio.checked) {
            activeCards = Array.from(allCards.values()).filter(card => !card.isSuspended && card.isStarred);
        } else {
            activeCards = cardManager.getAllActiveCards();
        }

        await startSession(activeCards);
    }

    // Helper function to update progress bar and text
    function updateProgress(card) {
        const progress = Math.max(0, (card.correctStreak || 0) / card.sessionRequiredStreak);
        progressBar.style.width = `${progress * 100}%`;
        progressText.textContent = `${card.correctStreak || 0}/${card.sessionRequiredStreak}`;

        // Remove celebrating class if progress is not 100%
        if (progress < 1) {
            progressBar.classList.remove('celebrating');
        }

        console.log('[Progress Update]', {
            question: card.question,
            correctStreak: card.correctStreak || 0,
            sessionRequiredStreak: card.sessionRequiredStreak,
            progressPercentage: `${(progress * 100).toFixed(1)}%`
        });
    }

    // Helper function to update remaining cards count
    function updateRemainingCards() {
        if (sessionCards.length > 0) {
            const uniqueCardsRemaining = new Set(sessionCards.map(card => card.question)).size;
            const lang = languageSelect.value;
            const remainingText = translations[lang].remainingCards.replace('{count}', uniqueCardsRemaining);
            remainingCardsEl.textContent = remainingText;
        }
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
            answerHint.style.visibility = 'visible'; // Show hint for new card
            setTimeout(() => answerInput.focus(), 0);

            starButton.textContent = cardOnDisplay.isStarred ? '★' : '☆';
            starButton.classList.toggle('starred', cardOnDisplay.isStarred);

            updateProgress(cardOnDisplay);
            updateRemainingCards();
        } else {
            cardOnDisplay = null; // Clear the displayed card when the session is over
            // The queue is empty, session is over
            if (pendingGracefulExit) {
                pendingGracefulExit = false; // Reset the flag
            }
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
            incorrectWordsListEl.innerHTML = sessionIncorrectCards.map(card => `<div>${card.answers.join(' | ')}</div>`).join('');
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
        const processedUserAnswer = userAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();
        const processedAnswers = currentCard.answers.map(a => a.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase());
        const penalty = parseInt(penaltyInput.value, 10) || 2;

        // Mark this card as attempted
        currentCard.hasBeenAttempted = true;

        if (processedAnswers.includes(processedUserAnswer)) {
            // --- CORRECT ANSWER ---
            isAnswerCorrect = true;
            lastCorrectlyAnsweredCard = currentCard; // Store the card for 'Practice Again'
            lastIncorrectAnswer = null; // Clear last incorrect answer on correct answer

            // Only increment correctStreak if not practicing again
            if (!isPracticingAgain) {
                currentCard.correctStreak = (currentCard.correctStreak || 0) + 1;
                // Cap correctStreak at sessionRequiredStreak to prevent overflow
                if (currentCard.correctStreak > currentCard.sessionRequiredStreak) {
                    currentCard.correctStreak = currentCard.sessionRequiredStreak;
                }
            }

            updateProgress(currentCard);

            await handleCorrectAnswer(currentCard, isPracticingAgain);

            // Reset the practice again flag
            isPracticingAgain = false;

            // Now that it's correct, officially remove it from the queue
            // Use findIndex to handle cases where the card position may have changed
            // (e.g., when "Finish Round" is clicked and queue is filtered)
            const cardIndex = sessionCards.findIndex(c => c.question === currentCard.question);
            if (cardIndex !== -1) {
                sessionCards.splice(cardIndex, 1);
            }

            // If not yet mastered for the session, put it at the back of the queue
            if (currentCard.correctStreak < currentCard.sessionRequiredStreak) {
                sessionCards.push(currentCard);
            } else {
                // If mastered, it's "graduated" - trigger celebration!
                if (!isPracticingAgain) {
                    celebrateCompletion();
                }
            }

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

            // Check if this is the same incorrect answer as last time
            const isSameIncorrectAnswer = lastIncorrectAnswer !== null &&
                                         lastIncorrectAnswer.cardQuestion === currentCard.question &&
                                         lastIncorrectAnswer.answer === processedUserAnswer;

            // Only apply penalty if not practicing again AND not the same incorrect answer
            if (!isPracticingAgain && !isSameIncorrectAnswer) {
                currentCard.sessionRequiredStreak += penalty;
            }

            // Store this incorrect answer for next comparison
            lastIncorrectAnswer = {
                cardQuestion: currentCard.question,
                answer: processedUserAnswer
            };

            updateProgress(currentCard);

            await handleIncorrectAnswer(currentCard, isPracticingAgain);

            // Don't reset isPracticingAgain flag here - only reset when answer is correct
            // This ensures that during Redo mode, all incorrect attempts are treated as practice
            // and user must keep trying until they answer correctly

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

    function celebrateCompletion() {
        const progressBar = document.getElementById('progress-bar');

        // Only celebrate if progress bar is at 100%
        const currentWidth = progressBar.style.width;
        if (currentWidth === '100%') {
            // Add celebration animation class to progress bar
            progressBar.classList.add('celebrating');
            // Keep the green color (don't remove the class)
        }
    }

    async function handleCorrectAnswer(card, skipCountUpdate = false) {
        const feedbackText = translations[languageSelect.value].correctFeedback;
        const answersHtml = '<div>&nbsp;</div>' + card.answers.slice(1).map(ans => `<div>${ans}</div>`).join('');
        feedbackEl.innerHTML = feedbackText.replace('{answers}', answersHtml);
        feedbackEl.className = 'correct';

        // Only increment count if not practicing again
        if (!skipCountUpdate) {
            sessionCorrectCount++;
        }

        if (!isCramming && !skipCountUpdate) {
            // Record review history
            const cardData = allCards.get(card.question);
            if (cardData) {
                await dbManager.addReviewHistory(card.question, true, cardData);
            }

            // Only update SRS if the card is considered "mastered" according to the main setting
            // AND if not in practice mode (skipCountUpdate would be true during Redo)
            if (card.correctStreak >= srsSettings.requiredStreak) {
                await cardManager.update(card.question, true);
            }
        }
    }

    function highlightAnswerDifferences(userAnswer, correctAnswer) {
        // Normalize both strings for comparison (remove spaces and punctuation)
        const normalizedUser = userAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();
        const normalizedCorrect = correctAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

        // Use edit distance algorithm with backtracking to find alignment
        const m = normalizedUser.length;
        const n = normalizedCorrect.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        // Initialize base cases
        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        // Fill DP table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (normalizedUser[i - 1] === normalizedCorrect[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],     // deletion from user
                        dp[i][j - 1],     // insertion to user
                        dp[i - 1][j - 1]  // substitution
                    );
                }
            }
        }

        // Backtrack to find alignment
        let i = m, j = n;
        const userAlignment = [];
        const correctAlignment = [];

        while (i > 0 || j > 0) {
            if (i > 0 && j > 0 && normalizedUser[i - 1] === normalizedCorrect[j - 1]) {
                // Match
                userAlignment.unshift({ char: normalizedUser[i - 1], type: 'match', idx: i - 1 });
                correctAlignment.unshift({ char: normalizedCorrect[j - 1], type: 'match', idx: j - 1 });
                i--;
                j--;
            } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
                // Substitution (wrong character)
                userAlignment.unshift({ char: normalizedUser[i - 1], type: 'wrong', idx: i - 1 });
                correctAlignment.unshift({ char: normalizedCorrect[j - 1], type: 'wrong', idx: j - 1 });
                i--;
                j--;
            } else if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j] + 1)) {
                // Deletion (user has extra character)
                userAlignment.unshift({ char: normalizedUser[i - 1], type: 'extra', idx: i - 1 });
                correctAlignment.unshift({ char: '', type: 'extra', idx: -1 });
                i--;
            } else {
                // Insertion (user is missing a character)
                userAlignment.unshift({ char: '', type: 'missing', idx: -1 });
                correctAlignment.unshift({ char: normalizedCorrect[j - 1], type: 'missing', idx: j - 1 });
                j--;
            }
        }

        // Build highlighted user answer
        let userResult = '';
        const userChars = Array.from(userAnswer);
        let userNormIdx = 0;
        let userAlignIdx = 0;

        for (let idx = 0; idx < userChars.length; idx++) {
            const char = userChars[idx];
            const normalizedChar = char.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

            if (normalizedChar === '') {
                userResult += char;
                continue;
            }

            while (userAlignIdx < userAlignment.length && userAlignment[userAlignIdx].type === 'missing') {
                userAlignIdx++;
            }

            if (userAlignIdx < userAlignment.length) {
                const alignType = userAlignment[userAlignIdx].type;
                if (alignType === 'match') {
                    userResult += `<span class="answer-char-correct">${char}</span>`;
                } else if (alignType === 'extra') {
                    userResult += `<span class="answer-char-extra">${char}</span>`;
                } else {
                    // 'wrong' type - substitution error
                    userResult += `<span class="answer-char-incorrect">${char}</span>`;
                }
                userAlignIdx++;
            }
            userNormIdx++;
        }

        // Build highlighted correct answer with asterisks only for extra characters
        let correctResult = '';
        const correctChars = Array.from(correctAnswer);
        let correctNormIdx = 0;
        let correctAlignIdx = 0;

        for (let idx = 0; idx < correctChars.length; idx++) {
            const char = correctChars[idx];
            const normalizedChar = char.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

            if (normalizedChar === '') {
                correctResult += char;
                continue;
            }

            // Only add asterisk for extra characters from user (not for missing/substitution)
            while (correctAlignIdx < correctAlignment.length && correctAlignment[correctAlignIdx].type === 'extra') {
                correctResult += '<span class="answer-char-extra">*</span>';
                correctAlignIdx++;
            }

            if (correctAlignIdx < correctAlignment.length) {
                const alignType = correctAlignment[correctAlignIdx].type;
                if (alignType === 'match') {
                    correctResult += `<span class="answer-char-correct">${char}</span>`;
                } else {
                    // 'missing' or 'wrong' - show character in red without asterisk
                    correctResult += `<span class="answer-char-incorrect">${char}</span>`;
                }
                correctAlignIdx++;
            }
            correctNormIdx++;
        }

        // Add any remaining extra characters at the end
        while (correctAlignIdx < correctAlignment.length && correctAlignment[correctAlignIdx].type === 'extra') {
            correctResult += '<span class="answer-char-extra">*</span>';
            correctAlignIdx++;
        }

        // Return only the highlighted correct answer
        return correctResult;
    }

    async function handleIncorrectAnswer(card, skipCountUpdate = false) {
        const feedbackText = translations[languageSelect.value].incorrectFeedback;
        const userAnswer = answerInput.value.trim();

        // Find the closest answer by comparing edit distances
        let closestAnswer = card.answers[1];
        let minDistance = Infinity;

        const normalizedUser = userAnswer.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

        for (let i = 1; i < card.answers.length; i++) {
            const ans = card.answers[i];
            const normalizedAns = ans.replace(/[\s\p{P}\p{S}]/gu, '').toLowerCase();

            // Calculate edit distance
            const m = normalizedUser.length;
            const n = normalizedAns.length;
            const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

            for (let j = 0; j <= m; j++) dp[j][0] = j;
            for (let k = 0; k <= n; k++) dp[0][k] = k;

            for (let j = 1; j <= m; j++) {
                for (let k = 1; k <= n; k++) {
                    if (normalizedUser[j - 1] === normalizedAns[k - 1]) {
                        dp[j][k] = dp[j - 1][k - 1];
                    } else {
                        dp[j][k] = 1 + Math.min(dp[j - 1][k], dp[j][k - 1], dp[j - 1][k - 1]);
                    }
                }
            }

            const distance = dp[m][n];
            if (distance < minDistance) {
                minDistance = distance;
                closestAnswer = ans;
            }
        }

        // Show all answers, with the closest one highlighted with differences
        const answersHtml = '<div>&nbsp;</div>' + card.answers.slice(1).map(ans => {
            if (ans === closestAnswer) {
                return `<div>${highlightAnswerDifferences(userAnswer, ans)}</div>`;
            } else {
                return `<div>${ans}</div>`;
            }
        }).join('');

        feedbackEl.innerHTML = feedbackText.replace('{answers}', answersHtml);
        feedbackEl.className = 'incorrect';

        // Only increment count if not practicing again
        if (!skipCountUpdate) {
            sessionIncorrectCount++;
            if (!sessionIncorrectCards.some(c => c.question === card.question)) {
                sessionIncorrectCards.push(card);
            }
            if (!isCramming && !reviewAgainPile.some(c => c.question === card.question)) {
                reviewAgainPile.push(card);
            }
        }

        if (!isCramming && !skipCountUpdate) {
            // Record review history
            const cardData = allCards.get(card.question);
            if (cardData) {
                await dbManager.addReviewHistory(card.question, false, cardData);
            }

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

        const lines = text.split('\n').filter(line => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('#') || trimmedLine === '') return false; // Skip comments and empty lines
            return line.split('|').map(part => part.trim()).filter(part => part).length >= 2;
        });
        const totalCount = lines.length;
        let newCount = 0;
        let learnedCount = 0;
        let suspendedCount = 0;
        let starredCount = 0;

        lines.forEach(line => {
            const question = line.split('|')[0].trim();
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
        setupEl.style.display = 'flex';
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
            const currentIds = new Set(text.split('\n')
                .filter(line => {
                    const trimmedLine = line.trim();
                    return !trimmedLine.startsWith('#') && trimmedLine !== '';
                })
                .map(line => line.split('|')[0].trim()));
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
                    <th>${t('cardMistakes', 'Mistakes')}</th>
                    <th>${t('cardStatus', 'Status')}</th>
                    <th>${t('cardActions', 'Actions')}</th>
                </tr>
            </thead>`;

        let tableBody;
        if (filteredCards.length === 0) {
            tableBody = `<tbody><tr><td colspan="9" style="text-align: center;">${t('noCardsFound', 'No cards found.')}</td></tr></tbody>`;
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

                    const editButton = `<button class="action-btn edit-btn" data-action="edit" data-card-id="${card.question}">${t('editButtonLabel', 'Edit')}</button>`;

                    const suspendButton = card.isSuspended
                        ? `<button class="action-btn restore-btn" data-action="restore" data-card-id="${card.question}">${t('restore', 'Restore')}</button>`
                        : `<button class="action-btn suspend-btn" data-action="suspend" data-card-id="${card.question}">${t('suspend', 'Suspend')}</button>`;

                    const deleteButton = `<button class="action-btn delete-btn" data-action="delete" data-card-id="${card.question}">${t('deleteButtonLabel', 'Delete')}</button>`;
                    const historyButton = `<button class="action-btn" data-action="viewHistory" data-card-id="${card.question}">${t('viewHistoryButton', 'View History')}</button>`;

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
                            <td>${(card.answers || []).slice(1).join(' | ')}</td>
                            <td>${formatReviewDate(card.nextReviewDate, lang)}</td>
                            <td>${intervalDisplay}</td>
                            <td>${(card.efactor || 2.5).toFixed(2)}</td>
                            <td>${card.totalMistakes || 0}</td>
                            <td>${status}</td>
                            <td>${editButton} ${historyButton} ${suspendButton} ${deleteButton}</td>
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

        const cardData = cardsToExport.map(card => `${card.question}|${card.answers.slice(1).join('|')}`);
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

    function exportDatabase() {
        if (!dbManager.db) {
            alert('Database not initialized.');
            return;
        }

        try {
            const data = dbManager.db.export();
            const blob = new Blob([data], { type: 'application/x-sqlite3' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            a.href = url;
            a.download = `anki_backup_${timestamp}.db`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export database error:', error);
            alert('Failed to export database.');
        }
    }

    async function importDatabase(event) {
        const file = event.target.files[0];
        if (!file) return;

        const lang = languageSelect.value;
        if (!confirm(translations[lang].confirmImportDatabase)) {
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const arrayBuffer = e.target.result;
                const uint8Array = new Uint8Array(arrayBuffer);

                console.log('Importing database:', {
                    fileSize: file.size,
                    arrayBufferLength: arrayBuffer.byteLength,
                    uint8ArrayLength: uint8Array.length
                });

                // Check if the file looks like a SQLite database (starts with "SQLite format 3")
                const header = new TextDecoder().decode(uint8Array.slice(0, 16));
                console.log('File header:', header);

                if (!header.startsWith('SQLite format 3')) {
                    throw new Error('File does not appear to be a valid SQLite database');
                }

                // Create a new database from the imported data
                const SQL = await initSqlJs({
                    locateFile: file => `lib/sql.js/${file}`
                });
                const newDb = new SQL.Database(uint8Array);

                // Verify it's a valid Anki database by checking for required tables
                const tables = newDb.exec("SELECT name FROM sqlite_master WHERE type='table'");
                console.log('Database tables:', tables);

                const tableNames = tables.length > 0 && tables[0].values ? tables[0].values.map(row => row[0]) : [];
                console.log('Table names:', tableNames);

                if (!tableNames.includes('cards')) {
                    throw new Error('Invalid database: missing cards table. Found tables: ' + tableNames.join(', '));
                }

                // Close current database and replace with imported one
                if (dbManager.db) {
                    dbManager.db.close();
                }
                dbManager.db = newDb;

                // Save to IndexedDB
                await dbManager.saveDbToIndexedDB();

                // Reload all cards
                await cardManager.load();
                updateTextareaStats();

                alert(translations[lang].importDatabaseSuccess);

                // Close settings modal and refresh if modal is open
                const settingsModal = document.getElementById('settings-modal');
                if (settingsModal) {
                    settingsModal.style.display = 'none';
                }

                // Reload the page to ensure everything is in sync
                location.reload();

            } catch (error) {
                console.error('Import database error:', error);
                console.error('Error stack:', error.stack);
                alert(translations[lang].importDatabaseFailed + '\n\nError: ' + error.message);
            }
        };
        reader.onerror = (error) => {
            console.error('FileReader error:', error);
            alert('Failed to read file.');
        };
        reader.readAsArrayBuffer(file);

        // Reset the input so the same file can be imported again
        event.target.value = '';
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

        const container = document.querySelector('.container');

        // Hide container during language switch to prevent visual glitches
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
        languageSelect.value = lang;
        await cardManager.updateDueCount();
        updateLastUpdatedTime(lang);
        updateTextareaStats();
        updateRemainingCards(); // Update remaining cards label when language changes

        // Recalculate textarea height and show container after all updates
        setTimeout(() => {
            try {
                if (typeof window.adjustTextareaHeight === 'function') {
                    window.adjustTextareaHeight(false);
                }
            } catch (error) {
                console.error('Error adjusting textarea height:', error);
            } finally {
                // Always show container even if height calculation fails
                if (container) {
                    container.style.opacity = '1';
                }
            }
        }, 100);
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

        // Set flag to skip count updates for this practice
        isPracticingAgain = true;

        // Remove the card from queue if it exists (to avoid duplicates)
        sessionCards = sessionCards.filter(card => card.question !== lastCorrectlyAnsweredCard.question);

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

        skipButton.addEventListener('click', () => {
            const currentCard = cardOnDisplay; // Get the card that is currently on display
            if (currentCard) {
                // Remove the card from the current session only, without suspending
                sessionCards = sessionCards.filter(card => card.question !== currentCard.question);
                proceedToNextCard();
            }
        });

        continueButton.addEventListener('click', proceedToNextCard);

        // Auto-resize textarea based on content
        function autoResizeTextarea() {
            answerInput.style.height = 'auto';
            answerInput.style.height = Math.min(answerInput.scrollHeight, 200) + 'px';

            // Hide hint when user starts typing, show when empty
            if (answerInput.value.trim() === '') {
                answerHint.style.visibility = 'visible';
            } else {
                answerHint.style.visibility = 'hidden';
            }
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

        finishRoundButton.addEventListener('click', () => {
            if (!pendingGracefulExit) {
                pendingGracefulExit = true;
                const lang = languageSelect.value;
                const t = (key, fallback) => translations[lang][key] || fallback;
                finishRoundButton.textContent = t('finishRoundPendingButton', 'Finishing round...');
                finishRoundButton.disabled = true;

                // Remove all unanswered cards (cards that have never been attempted)
                // Keep only cards that have been attempted at least once
                sessionCards = sessionCards.filter(card => card.hasBeenAttempted);

                // If queue is now empty, end immediately
                if (sessionCards.length === 0) {
                    showSummary();
                } else {
                    // Update the remaining cards display
                    updateRemainingCards();
                }
            }
        });
    
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

        exportTextareaButton.addEventListener('click', () => {
            const textareaContent = wordListInput.value;

            if (!textareaContent.trim()) {
                const lang = languageSelect.value;
                const t = (key, fallback) => translations[lang][key] || fallback;
                alert(t('exportEmptyWarning', 'Textarea is empty, nothing to export.'));
                return;
            }

            // Create a blob with the textarea content
            const blob = new Blob([textareaContent], { type: 'text/plain;charset=utf-8' });

            // Create a download link
            const downloadLink = document.createElement('a');
            const fileName = `anki_wordlist_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}.txt`;
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = fileName;

            // Trigger the download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Clean up the object URL
            URL.revokeObjectURL(downloadLink.href);

            // Provide feedback
            const lang = languageSelect.value;
            const t = (key, fallback) => translations[lang][key] || fallback;
            const originalText = t('exportTextareaButtonLabel', 'Export');
            exportTextareaButton.textContent = t('exportSuccessLabel', 'Exported!');
            exportTextareaButton.disabled = true;
            exportTextareaButton.style.backgroundColor = '#34c759'; // Green for success

            setTimeout(() => {
                exportTextareaButton.textContent = originalText;
                exportTextareaButton.disabled = false;
                exportTextareaButton.style.backgroundColor = ''; // Revert to original color from CSS
            }, 2000);
        });
    
        const closeAllCardsModal = () => {
            errorModal.style.display = 'none';
            cardManager.updateDueCount();
        };
    
        closeModalButton.addEventListener('click', closeAllCardsModal);

        // Track mouse down position to distinguish clicks from drags
        let mouseDownTarget = null;
        window.addEventListener('mousedown', (event) => {
            mouseDownTarget = event.target;
        });

        window.addEventListener('click', (event) => {
            // Only close if mousedown and click were both on the same modal background
            if (event.target == errorModal && mouseDownTarget == errorModal) closeAllCardsModal();
            if (event.target == settingsModal && mouseDownTarget == settingsModal) settingsModal.style.display = 'none';
            if (event.target == editCardModal && mouseDownTarget == editCardModal) editCardModal.style.display = 'none';
            if (event.target == historyModal && mouseDownTarget == historyModal) closeHistoryModal();
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
                if (action === 'edit') {
                    await openEditModal(cardId);
                    return; // Exit early for edit action
                } else if (action === 'suspend') await cardManager.suspend(cardId);
                else if (action === 'restore') await cardManager.restore(cardId);
                else if (action === 'toggleStar') await cardManager.toggleStar(cardId);
                else if (action === 'viewHistory') {
                    openHistoryModal(cardId);
                    return; // Exit early for view history action
                }
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
    
        // Import button triggers file input
        importFileButton.addEventListener('click', () => fileInput.click());

        // Keep drag and drop functionality on the entire page
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

        // Database backup/restore buttons
        const exportDatabaseButton = document.getElementById('export-database-button');
        const importDatabaseButton = document.getElementById('import-database-button');
        const importDatabaseInput = document.getElementById('import-database-input');

        if (exportDatabaseButton) {
            exportDatabaseButton.addEventListener('click', exportDatabase);
        }
        if (importDatabaseButton) {
            importDatabaseButton.addEventListener('click', () => {
                importDatabaseInput.click();
            });
        }
        if (importDatabaseInput) {
            importDatabaseInput.addEventListener('change', importDatabase);
        }
    
        document.addEventListener('keydown', (event) => {
            console.log('document keydown:', {
                key: event.key,
                continueButtonVisible: continueButton.style.display !== 'none',
                isAnswerCorrect: isAnswerCorrect,
                modalOpen: errorModal.style.display === 'block' || settingsModal.style.display === 'flex',
                timestamp: new Date().toISOString()
            });

            // Capture Command+S (Mac) or Ctrl+S (Windows/Linux) to trigger Sync button
            if ((event.metaKey || event.ctrlKey) && event.key === 's') {
                event.preventDefault();
                importFromTextareaButton.click();
                return;
            }

            if (errorModal.style.display === 'block' || settingsModal.style.display === 'flex') return;
            if (event.key === 'Enter' && continueButton.style.display !== 'none') {
                event.preventDefault();
                if (isAnswerCorrect) proceedToNextCard();
            }
        });

        // --- Edit Card Functions ---
        async function openEditModal(cardQuestion) {
            const card = allCards.get(cardQuestion);
            if (!card) return;

            currentEditingCard = cardQuestion;
            editQuestionInput.value = card.question;
            editAnswersInput.value = card.answers.slice(1).join(' | ');
            editCardModal.style.display = 'flex';
            editQuestionInput.focus();
        }

        async function saveCardEdit() {
            if (!currentEditingCard) return;

            const newQuestion = editQuestionInput.value.trim();
            const answersStr = editAnswersInput.value.trim();

            if (!newQuestion || !answersStr) {
                const lang = languageSelect.value;
                alert('问题和答案不能为空！');
                return;
            }

            const answerParts = answersStr.split('|').map(a => a.trim()).filter(a => a);
            const newAnswers = [newQuestion, ...answerParts];

            const card = allCards.get(currentEditingCard);
            if (card) {
                const oldQuestion = card.question;

                // Update in database
                if (oldQuestion !== newQuestion) {
                    // Question changed - need to delete old and create new
                    dbManager.db.run("DELETE FROM cards WHERE question = ?", [oldQuestion]);
                    // Delete old review history
                    dbManager.db.run("DELETE FROM review_history WHERE question = ?", [oldQuestion]);
                    dbManager.db.run(
                        "INSERT INTO cards (question, answers, repetitions, efactor, interval, nextReviewDate, isSuspended, isStarred, totalMistakes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                        [newQuestion, JSON.stringify(newAnswers), card.repetitions, card.efactor, card.interval, card.nextReviewDate, card.isSuspended ? 1 : 0, card.isStarred ? 1 : 0, card.totalMistakes || 0]
                    );
                    allCards.delete(oldQuestion);
                    card.question = newQuestion;
                    allCards.set(newQuestion, card);
                } else {
                    // Only answers changed
                    dbManager.db.run("UPDATE cards SET answers = ? WHERE question = ?", [JSON.stringify(newAnswers), newQuestion]);
                }

                card.answers = newAnswers;
                await dbManager.saveDbToIndexedDB();

                // Update textarea if needed
                const currentText = wordListInput.value;
                const lines = currentText.split('\n');
                const newLines = lines.map(line => {
                    const trimmedLine = line.trim();
                    // Keep comment lines unchanged
                    if (trimmedLine.startsWith('#')) return line;

                    const parts = line.split('|').map(part => part.trim());
                    if (parts.length > 0 && parts[0] === oldQuestion) {
                        return newAnswers.join(' | ');
                    }
                    return line;
                });
                const newText = newLines.join('\n');

                if (currentText !== newText) {
                    wordListInput.value = newText;
                    localStorage.setItem(WORD_LIST_STORAGE_KEY, newText);
                }

                // Update currently displayed card if it's the one being edited
                if (cardOnDisplay && cardOnDisplay.question === oldQuestion) {
                    cardOnDisplay.question = newQuestion;
                    cardOnDisplay.answers = newAnswers;
                    questionEl.textContent = newQuestion;
                }

                editCardModal.style.display = 'none';
                currentEditingCard = null;

                // Refresh modal if open
                if (errorModal.style.display === 'flex' || errorModal.style.display === 'block') {
                    const activeViewBtn = modalIncorrectListEl.querySelector('.tab-btn[data-view].active');
                    const activeFilterBtn = modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
                    renderAllCardsModal(
                        activeViewBtn ? activeViewBtn.dataset.view : 'current',
                        activeFilterBtn ? activeFilterBtn.dataset.filter : 'active'
                    );
                }

                updateTextareaStats();
            }
        }

        function closeEditModal() {
            editCardModal.style.display = 'none';
            currentEditingCard = null;
        }

        // --- History Modal Functions ---
        function openHistoryModal(cardQuestion) {
            const card = allCards.get(cardQuestion);
            if (!card) return;

            const history = dbManager.getReviewHistory(cardQuestion);
            const t = (key, fallback) => translations[languageSelect.value][key] || fallback;

            historyCardInfo.textContent = `${card.question} (${card.answers.slice(1).join(' | ')})`;

            if (history.length === 0) {
                historyList.innerHTML = `<p>${t('noHistoryFound', 'No review history found')}</p>`;
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
                                const dateStr = date.toLocaleString(languageSelect.value === 'zh-CN' ? 'zh-CN' : languageSelect.value === 'ja' ? 'ja-JP' : 'en-US');
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
                historyList.innerHTML = historyHTML;
            }

            historyModal.style.display = 'flex';
        }

        function closeHistoryModal() {
            historyModal.style.display = 'none';
        }

        // Event listeners for history modal
        historyModalCloseButton.addEventListener('click', closeHistoryModal);

        // Event listeners for edit modal
        editCardButton.addEventListener('click', () => {
            if (cardOnDisplay) {
                openEditModal(cardOnDisplay.question);
            }
        });

        editCardModalCloseButton.addEventListener('click', closeEditModal);
        cancelEditButton.addEventListener('click', closeEditModal);
        saveEditButton.addEventListener('click', saveCardEdit);

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
                    editCardModal.style.display = 'none';
                    historyModal.style.display = 'none';

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

                    // Dynamic textarea height calculation based on viewport
                    let adjustTextareaHeightTimer = null;
                    function adjustTextareaHeight(showContainer = false) {
                        const footer = document.getElementById('last-updated');
                        const container = document.querySelector('.container');

                        if (!footer || !wordListInput || !container) return;

                        const viewportHeight = window.innerHeight;
                        const minHeight = 140;
                        const maxHeight = 1000;

                        // Temporarily disable transition for accurate measurement
                        const originalTransition = wordListInput.style.transition;
                        wordListInput.style.transition = 'none';

                        // Set to a small height temporarily to measure other elements accurately
                        wordListInput.style.height = '10px';
                        container.offsetHeight; // Force layout

                        // Measure all the fixed elements
                        const bodyPaddingTop = 10; // From CSS: body padding-top
                        const bodyPaddingBottom = 10; // From CSS: body padding-bottom
                        const containerRect = container.getBoundingClientRect();
                        const textareaRect = wordListInput.getBoundingClientRect();
                        const footerRect = footer.getBoundingClientRect();
                        const footerMarginTop = 20; // From CSS: #last-updated margin-top

                        // Calculate textarea height from bottom up:
                        // viewport - body paddings - footer - footer margin - container content (except textarea)
                        const containerTopToTextareaTop = textareaRect.top - containerRect.top;
                        const textareaBottomToContainerBottom = containerRect.bottom - textareaRect.bottom;

                        const availableHeight = viewportHeight
                            - bodyPaddingTop
                            - bodyPaddingBottom
                            - footerRect.height
                            - footerMarginTop
                            - containerTopToTextareaTop
                            - textareaBottomToContainerBottom
                            - 20; // Extra buffer for safety

                        // Calculate final height with constraints
                        let newHeight = Math.max(minHeight, Math.min(availableHeight, maxHeight));

                        // Set to final height directly (no transition yet)
                        wordListInput.style.height = newHeight + 'px';
                        container.offsetHeight; // Force layout

                        // Re-enable transition for future changes
                        wordListInput.style.transition = originalTransition;

                        // Show container after height calculation
                        if (showContainer) {
                            requestAnimationFrame(() => {
                                container.classList.add('loaded');
                            });
                        }
                    }

                    // Debounced version for language switching to prevent multiple rapid calls
                    function adjustTextareaHeightDebounced(delay = 0) {
                        if (adjustTextareaHeightTimer) {
                            clearTimeout(adjustTextareaHeightTimer);
                        }
                        adjustTextareaHeightTimer = setTimeout(() => {
                            adjustTextareaHeight(false);
                        }, delay);
                    }

                    // Expose to window for language switching
                    window.adjustTextareaHeight = adjustTextareaHeight;
                    window.adjustTextareaHeightDebounced = adjustTextareaHeightDebounced;

                    // Adjust on load and window resize
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