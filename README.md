# Quiz App

A modern, interactive quiz application built with HTML, CSS, and JavaScript. Users can select a category, difficulty level, and number of questions to test their knowledge on a variety of topics.

---

## ✨ Features

- **Category Selection:** Choose from General Knowledge, Animals, Math, Computers, Geography, or Any.
- **Difficulty Levels:** Easy, Medium, or Hard.
- **Custom Question Count:** Specify how many questions you want.
- **Instant Feedback:** Animated transitions and immediate answer feedback.
- **Score Tracking:** See your final score and replay the quiz.
- **Responsive Design:** Works on desktop and mobile browsers.

---

## 📁 Project Structure

```
Quiz App/
├── favicon.ico
├── index.html
├── README.md
├── css/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── main.css
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── index.js
│   ├── questions.js
│   └── quiz.js
└── webfonts/
    └── [font files]
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Running the App

1. **Clone or download** this repository.
2. **Open** `index.html` in your web browser.

No build steps or server setup required.

---

## 🗂️ File Overview

- **index.html:** Main HTML file containing the app structure.
- **css/main.css:** Custom styles for the app.
- **js/index.js:** Entry point, handles form submission and quiz initialization.
- **js/quiz.js:** Defines the `Quiz` class, fetches questions from the Open Trivia Database API.
- **js/questions.js:** Defines the `Question` class, handles question display, answer checking, and quiz flow.

---

## ⚙️ How It Works

1. User selects quiz options and submits the form.
2. The app fetches questions from the [Open Trivia Database](https://opentdb.com/).
3. Questions are displayed one by one. User selects an answer for each.
4. The app provides immediate feedback and tracks the score.
5. At the end, the final score is shown with an option to play again.

---

## 🛠️ Customization

- **Add More Categories:** Update the `<select>` in `index.html`.
- **Change Appearance:** Edit `css/main.css` for custom styles.
- **Expand Functionality:** Modify or extend the logic in `js/quiz.js` and `js/questions.js`.

---

## 🙏 Credits

- [Open Trivia Database](https://opentdb.com/) for quiz questions.
- [Bootstrap](https://getbootstrap.com/) for UI components.
- [Font Awesome](https://fontawesome.com/) for icons.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).