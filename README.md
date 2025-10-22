# Anki Clone

A lightweight, client-side flashcard application inspired by Anki, designed to help you memorize words and phrases using spaced repetition algorithms.

**🌐 [Live Demo](https://rm-wall.github.io/anki/)**

## ✨ Features

- 🧠 **Spaced Repetition Algorithm** - Intelligent scheduling to optimize your learning
- 🌍 **Multi-language Interface** - Supports English, Chinese, and Japanese
- 📥 **Import/Export** - Easy data management with plain text file support
- 🎯 **Smart Review Modes**
  - Smart Review: Study cards that are due for review
  - Free Study: Study any card at any time
  - Random or sequential order options
- 💾 **100% Client-Side** - All data stored locally using SQL.js and IndexedDB
- 🔒 **Privacy First** - No server required, your data never leaves your device
- ⚡ **Lightweight & Fast** - Pure vanilla JavaScript, no heavy frameworks

## 🚀 Quick Start

### Online
Visit the [Live Demo](https://rm-wall.github.io/anki/) and start learning immediately!

### Local
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding your flashcards!

## 📖 How to Use

1. **Add Cards**: Enter your word list in the text area using the format:
   ```
   Question,Answer1,Answer2,...
   ```
   Example:
   ```
   Hello,你好,こんにちは
   Goodbye,再见,さようなら
   ```

2. **Start Learning**:
   - Click **"Smart Review"** to study cards that are due for review
   - Click **"Free Study"** to study any card regardless of schedule

3. **Answer Cards**:
   - Type your answer in the input field
   - Press **Enter** to submit
   - The app will show if you're correct and schedule the next review automatically
   - Use **Skip** to temporarily skip a card in the current session without affecting its status
   - Use **Known** to mark cards you've mastered (they won't appear in future reviews)

4. **Manage Data**:
   - Use **Import/Export** buttons to backup or share your word lists

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **SQL.js** - SQLite database engine in the browser
- **IndexedDB** - Persistent storage for offline functionality

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
