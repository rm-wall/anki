// --- Pure Utility Functions ---

/**
 * Calculate edit distance between two strings
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} Edit distance
 */
export function calculateEditDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[m][n];
}

/**
 * Calculate edit distance between two strings and build alignment for highlighting
 * @param {string} userAnswer - User's input answer
 * @param {string} correctAnswer - The correct answer to compare against
 * @returns {object} Object containing highlighted HTML for both answers
 */
export function highlightAnswerDifferences(userAnswer, correctAnswer) {
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

    // Handle trailing extra characters in user answer
    while (userAlignIdx < userAlignment.length && userAlignment[userAlignIdx].type === 'missing') {
        userAlignIdx++;
    }

    // Add trailing asterisks for remaining extra characters in correct answer
    while (correctAlignIdx < correctAlignment.length && correctAlignment[correctAlignIdx].type === 'extra') {
        correctResult += '<span class="answer-char-extra">*</span>';
        correctAlignIdx++;
    }

    return {
        userResult,
        correctResult
    };
}

/**
 * Detect the primary character type of a string
 * @param {string} str - String to analyze
 * @returns {string} 'romaji' if primarily roman letters, 'cjk' if primarily CJK characters
 */
export function detectStringType(str) {
    // Remove spaces and punctuation for analysis
    const normalized = str.replace(/[\s\p{P}\p{S}]/gu, '');

    if (normalized.length === 0) {
        return 'romaji'; // Default to romaji for empty strings
    }

    let romajiCount = 0;
    let cjkCount = 0;

    for (const char of normalized) {
        const code = char.charCodeAt(0);

        // Check if character is basic Latin (ASCII letters)
        if ((code >= 0x0041 && code <= 0x005A) || // A-Z
            (code >= 0x0061 && code <= 0x007A)) { // a-z
            romajiCount++;
        }
        // Check if character is CJK or Japanese kana
        else if ((code >= 0x4E00 && code <= 0x9FFF) || // CJK Unified Ideographs
                 (code >= 0x3040 && code <= 0x309F) || // Hiragana
                 (code >= 0x30A0 && code <= 0x30FF)) { // Katakana
            cjkCount++;
        }
    }

    // Return the type with more characters (at least 50% threshold)
    return romajiCount > cjkCount ? 'romaji' : 'cjk';
}

/**
 * Fisher-Yates shuffle algorithm (in-place)
 * @param {Array} array - Array to shuffle
 */
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
