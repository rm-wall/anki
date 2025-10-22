export function createUIHelpers(allCards, elements, translations) {
    let currentSortColumn = null;
    let currentSortDirection = 'asc';

    function updateTextareaStats() {
        const text = elements.wordListInput.value.trim();
        if (!text) {
            elements.textareaStatsEl.style.display = 'none';
            return;
        }

        const lines = text.split('\n').filter(line => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('#') || trimmedLine === '') return false;
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

        const lang = elements.languageSelect.value;
        const t = (key) => translations[lang][key] || '';

        elements.totalWordsStatEl.textContent = t('totalWordsLabel').replace('{count}', totalCount);
        elements.newWordsStatEl.textContent = t('newWordsLabel').replace('{count}', newCount);
        elements.learnedWordsStatEl.textContent = t('learnedWordsLabel').replace('{count}', learnedCount);
        elements.suspendedWordsStatEl.textContent = t('suspendedWordsLabel').replace('{count}', suspendedCount);
        elements.starredWordsStatEl.textContent = t('starredWordsLabel').replace('{count}', starredCount);

        elements.textareaStatsEl.style.display = 'flex';
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

    function sortCards(cards, column, direction) {
        return [...cards].sort((a, b) => {
            let aVal, bVal;

            switch (column) {
                case 'question':
                    aVal = a.question || '';
                    bVal = b.question || '';
                    return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);

                case 'answers':
                    aVal = (a.answers || []).slice(1).join(' | ');
                    bVal = (b.answers || []).slice(1).join(' | ');
                    return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);

                case 'nextReview':
                    aVal = new Date(a.nextReviewDate).getTime();
                    bVal = new Date(b.nextReviewDate).getTime();
                    return direction === 'asc' ? aVal - bVal : bVal - aVal;

                case 'interval':
                    aVal = a.interval || 0;
                    bVal = b.interval || 0;
                    return direction === 'asc' ? aVal - bVal : bVal - aVal;

                case 'efactor':
                    aVal = a.efactor || 2.5;
                    bVal = b.efactor || 2.5;
                    return direction === 'asc' ? aVal - bVal : bVal - aVal;

                case 'mistakes':
                    aVal = a.totalMistakes || 0;
                    bVal = b.totalMistakes || 0;
                    return direction === 'asc' ? aVal - bVal : bVal - aVal;

                case 'status':
                    const getStatusOrder = (card) => {
                        if (card.isSuspended) return 3;
                        if (card.repetitions === 0) return 0;
                        if (new Date(card.nextReviewDate) <= new Date()) return 1;
                        return 2;
                    };
                    aVal = getStatusOrder(a);
                    bVal = getStatusOrder(b);
                    return direction === 'asc' ? aVal - bVal : bVal - aVal;

                default:
                    return 0;
            }
        });
    }

    function renderAllCardsModal(viewType = 'current', filterType = 'active') {
        const lang = elements.languageSelect.value;
        const t = (key, fallback) => translations[lang][key] || fallback;

        let sourceCards;
        if (viewType === 'current') {
            const text = elements.wordListInput.value.trim();
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

        const getSortClass = (column) => {
            if (currentSortColumn === column) {
                return currentSortDirection === 'asc' ? 'sort-asc' : 'sort-desc';
            }
            return 'sortable';
        };

        const tableHeader = `
            <thead>
                <tr>
                    <th>★</th>
                    <th class="${getSortClass('question')}" data-column="question">${t('cardQuestion', 'Question')}</th>
                    <th class="${getSortClass('answers')}" data-column="answers">${t('cardAnswers', 'Answers')}</th>
                    <th class="${getSortClass('nextReview')}" data-column="nextReview">${t('cardNextReview', 'Next Review')}</th>
                    <th class="${getSortClass('interval')}" data-column="interval">${t('cardInterval', 'Interval')}</th>
                    <th class="${getSortClass('efactor')}" data-column="efactor">${t('cardEfactor', 'E-Factor')}</th>
                    <th class="${getSortClass('mistakes')}" data-column="mistakes">${t('cardMistakes', 'Mistakes')}</th>
                    <th class="${getSortClass('status')}" data-column="status">${t('cardStatus', 'Status')}</th>
                    <th>${t('cardActions', 'Actions')}</th>
                </tr>
            </thead>`;

        let sortedCards = filteredCards;
        if (currentSortColumn) {
            sortedCards = sortCards(filteredCards, currentSortColumn, currentSortDirection);
        } else {
            sortedCards = [...filteredCards].sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate));
        }

        let tableBody;
        if (sortedCards.length === 0) {
            tableBody = `<tbody><tr><td colspan="9" style="text-align: center;">${t('noCardsFound', 'No cards found.')}</td></tr></tbody>`;
        } else {
            tableBody = `<tbody>` + sortedCards.map(card => {
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

        elements.modalIncorrectListEl.innerHTML = `${toolbarHTML}<div class="table-scroll-container"><table class="cards-table">${tableHeader}${tableBody}</table></div>`;

        // Add click handlers for sortable headers
        const table = elements.modalIncorrectListEl.querySelector('.cards-table');
        if (table) {
            const headers = table.querySelectorAll('th[data-column]');
            headers.forEach(header => {
                header.addEventListener('click', () => {
                    const column = header.getAttribute('data-column');

                    if (currentSortColumn === column) {
                        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
                    } else {
                        currentSortColumn = column;
                        currentSortDirection = 'asc';
                    }

                    renderAllCardsModal(viewType, filterType);
                });
            });
        }
    }

    function showAllCardsModal() {
        currentSortColumn = null;
        currentSortDirection = 'asc';
        renderAllCardsModal('current', 'active');
        elements.errorModal.style.display = 'flex';
    }

    async function showSetup(cardManager) {
        elements.summaryEl.style.display = 'none';
        elements.cardEl.style.display = 'none';
        elements.setupEl.style.display = 'flex';
        await cardManager.updateDueCount();
        updateTextareaStats();
    }

    return {
        updateTextareaStats,
        formatReviewDate,
        renderAllCardsModal,
        showAllCardsModal,
        showSetup
    };
}
