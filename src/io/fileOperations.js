import { dbManager, WORD_LIST_STORAGE_KEY } from '../database/dbManager.js';

export function createFileOperations(allCards, elements, translations, cardManager) {
    async function handleFile(file, updateTextareaStats) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            elements.wordListInput.value = e.target.result;
            localStorage.setItem(WORD_LIST_STORAGE_KEY, e.target.result);
            await cardManager.syncFromTextarea(elements.wordListInput, updateTextareaStats);
        };
        reader.readAsText(file);
    }

    function exportCards() {
        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        const activeFilterBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
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

    async function importDatabase(event, updateTextareaStats) {
        const file = event.target.files[0];
        if (!file) return;

        const lang = elements.languageSelect.value;
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

                const header = new TextDecoder().decode(uint8Array.slice(0, 16));
                console.log('File header:', header);

                if (!header.startsWith('SQLite format 3')) {
                    throw new Error('File does not appear to be a valid SQLite database');
                }

                const SQL = await initSqlJs({
                    locateFile: file => `lib/sql.js/${file}`
                });
                const newDb = new SQL.Database(uint8Array);

                const tables = newDb.exec("SELECT name FROM sqlite_master WHERE type='table'");
                console.log('Database tables:', tables);

                const tableNames = tables.length > 0 && tables[0].values ? tables[0].values.map(row => row[0]) : [];
                console.log('Table names:', tableNames);

                if (!tableNames.includes('cards')) {
                    throw new Error('Invalid database: missing cards table. Found tables: ' + tableNames.join(', '));
                }

                if (dbManager.db) {
                    dbManager.db.close();
                }
                dbManager.db = newDb;

                await dbManager.saveDbToIndexedDB();
                await cardManager.load();
                updateTextareaStats();

                alert(translations[lang].importDatabaseSuccess);

                const settingsModal = document.getElementById('settings-modal');
                if (settingsModal) {
                    settingsModal.style.display = 'none';
                }

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

        event.target.value = '';
    }

    async function importCards(event, renderAllCardsModal) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            if (confirm(translations[elements.languageSelect.value].confirmImport)) {
                try {
                    const activeFilterBtn = elements.modalIncorrectListEl.querySelector('.tab-btn[data-filter].active');
                    const importContext = activeFilterBtn ? activeFilterBtn.dataset.filter : 'active';

                    const newCardsCount = await cardManager.importFromText(content, importContext);
                    const successMsgTemplate = translations[elements.languageSelect.value].importSuccess;
                    alert(successMsgTemplate.replace('{count}', newCardsCount));

                    renderAllCardsModal('all', importContext);

                } catch (error) {
                    alert(translations[elements.languageSelect.value].importFailed);
                }
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    return {
        handleFile,
        exportCards,
        exportDatabase,
        importDatabase,
        importCards
    };
}
