# Anki Clone

This is a simple, client-side flashcard application inspired by Anki. It helps users memorize words or phrases using spaced repetition.

## Features

- **Spaced Repetition:** The application uses a simplified spaced repetition algorithm to schedule card reviews.
- **Bilingual Support:** The interface supports English, Chinese, and Japanese.
- **Import/Export:** Users can import and export their word lists as plain text files.
- **Flexible Review Options:** Users can choose to review all cards or only the cards in the current list, in random or sequential order.
- **Client-Side Storage:** All data is stored locally in the user's browser using SQL.js and IndexedDB. No server is required.

## How to Use

1.  Open the `index.html` file in a web browser.
2.  Enter your word list in the text area. The format is `Question,Answer1,Answer2,...` on each line.
3.  Click "Smart Review" to study cards that are due, or "Cram Session" to study any card.
4.  During a session, type your answer and press Enter.
5.  The application will show you if you were correct and schedule the next review.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript (ES6+)
-   **SQL.js:** for the SQLite database engine.
-   **IndexedDB:** for persisting the SQLite database in the browser.
