# ⌨️ SpeedyKeys 🏎️

**SpeedyKeys** is a fun, dark-themed typing test web application that challenges users to type random words as fast and accurately as possible. It measures your typing speed in words per minute (WPM) and highlights correct and incorrect characters in real-time. 🎯

🌐 **Try it live at:** [https://speedy-keys.vercel.app/](https://speedy-keys.vercel.app/) 🚀

---

## ✨ Key Features ✨

* **Randomized Word List**: Generates 20 random words for each test session. 🔀
* **Real-Time Feedback**: Highlights correct characters in green and mistakes in red as you type. ✅❌
* **WPM Calculation**: Calculates Words Per Minute based on total characters and time taken. 📈
* **Responsive UI**: Dark-themed, mobile-friendly design. 🌑📱
* **Easy Start**: Click or focus the input field to begin timing. ⏱️

---

## 🛠️ Tech Stack 🛠️

* **HTML5** for structure
* **CSS3** for styling
* **JavaScript (ES6)** for logic and interactivity

---

## 📥 Installation & Running Locally 📥

1. **Clone the repository**:

   ```bash
   [git clone https://github.com/yourusername/speedykeys.git](https://github.com/harsh0558/SpeedyKeys.git)
   cd speedykeys
   ```

2. **Serve files locally** (to avoid CORS issues):

   ```bash
   npx http-server
   ```

3. **Open in browser**:

   * Navigate to `http://localhost:8080` (or the port shown in your terminal).

---

## 🚀 Usage 🚀

1. Focus or click the input box to start the timer. ⏲️
2. Type each word and press **Space** or **Enter** to submit. ⌨️
3. Observe real-time color feedback:

   * **Green**: Correct characters
   * **Red**: Mistakes
4. After 20 words, view your final **WPM** and **time taken**. 🎉

---

## 📁 Project Structure 📁

```
├── index.html       # Main HTML markup
├── style.css        # Dark-themed styles
├── script.js        # Typing logic & WPM calculation
├── logo.png         # App logo
└── README.md        # Project documentation
```

---

## 🎨 Customization 🎨

* **Word Pool**: Edit the `words` array in `script.js` to add or remove test words. 📝
* **Test Length**: Change the number of words generated (default is 20). 🔢
* **Styling**: Tweak `style.css` for color themes, fonts, and layout. 🎨

---

## 🐞 Troubleshooting 🐞

* **Timer Not Starting**: Ensure you click or focus the input field before typing. 🔍
* **No Words Displayed**: Check that `script.js` is correctly linked in `index.html`. 🔗

---

## 📄 License 📄

This project is licensed under the MIT License. See the `LICENSE` file for details. 📝

---

## 🤝 Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to:

* 💬 Open an issue to report bugs or request features
* 🔀 Submit a pull request with improvements

Happy typing! 🚀
