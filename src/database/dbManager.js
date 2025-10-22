// --- Database Manager ---
const WORD_LIST_STORAGE_KEY = 'wordListContent';
const LANGUAGE_STORAGE_KEY = 'preferredLanguage';
const REVIEW_SCOPE_KEY = 'reviewScope';

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

export { dbManager, WORD_LIST_STORAGE_KEY, LANGUAGE_STORAGE_KEY, REVIEW_SCOPE_KEY };
