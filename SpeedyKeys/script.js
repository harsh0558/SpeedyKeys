const words = [
    "apple", "banana", "cherry", "dog", "elephant", "flower", "grape", "house",
    "island", "jungle", "kite", "lemon", "mountain", "notebook", "orange", "pencil",
    "queen", "river", "sun", "tiger", "umbrella", "violet", "water", "xylophone",
    "yellow", "zebra", "airplane", "ball", "cat", "door", "engine", "forest",
    "garden", "hill", "igloo", "jacket", "king", "lake", "mirror", "night", "ocean",
    "piano", "quilt", "road", "star", "train", "umbrella", "violin", "whale", "yard",
    "zoo", "ant", "bird", "cloud", "desk", "earth", "feather", "goal", "horse",
    "ink", "jelly", "key", "lamp", "moon", "net", "owl", "plant", "queen", "ring",
    "snake", "tree", "unicorn", "valley", "wind", "year", "zebra", "arrow", "brush",
    "cup", "dove", "egg", "fish", "gold", "heart", "ice", "jar", "kettle", "leaf",
    "map", "nest", "octopus", "paint", "quiet", "rabbit", "stone", "tower", "vase"
];

let starttime;
let endtime;
let timeStarted = false;
let timeEnded = false;
let iterate = 0;
let totalCharacters = 0;

function getRandomInt(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    while (num < 0 || num >= words.length) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return num;
}

function validate(word, userInput) {
    let result = "";
    if (word.length === userInput.length) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === userInput[i]) {
                result += `<span style="color:green;">${userInput[i]}</span>`;
            } else {
                result += `<span style="color:red;">${userInput[i]}</span>`;
            }
        }
        return result;
    } else {
        result = `<span style="color:orange;">${word}</span>`;
        return result;
    }
}

let wordsArray = [];
for (let i = 0; i < 20; i++) {
    let word = words[getRandomInt(0, 99)];
    wordsArray.push(word);
}

let string = wordsArray.join(" ");

let main_div = document.querySelector("#main");
let result = document.querySelector("#result")

let messageContainer = document.createElement("div");
messageContainer.classList.add("words");
messageContainer.innerHTML = string;
main_div.prepend(messageContainer);

let input = document.querySelector("#input");

input.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "Enter") && iterate < wordsArray.length) {
        let retVal = validate(wordsArray[iterate], input.value.trim());
        totalCharacters += input.value.trim().length;
        wordsArray[iterate] = retVal;
        let updatedString = wordsArray.join(" ");

        let text_div = document.querySelector(".words");
        text_div.innerHTML = updatedString;

        iterate += 1;
        input.value = "";
    }

    if (iterate === 20) {
        if (timeEnded===false) {
            endtime = Date.now();
            timeEnded = true;

            let timeTakenInSeconds = (endtime - starttime) / 1000;
            let wpm = (totalCharacters / 5) / (timeTakenInSeconds / 60);

            
            let resultDiv = document.createElement("div");
            resultDiv.innerHTML = `
                <h2>Typing Test Completed!</h2>
                <p>Your typing speed is <strong>${wpm.toFixed(2)} WPM</strong>.</p>
                <p>Time taken: <strong>${timeTakenInSeconds.toFixed(2)} seconds</strong>.</p>
            `;
            resultDiv.style.color = "#00ff00"; 
            result.appendChild(resultDiv);
        }
    }
});

input.onmousedown = () => {
    if (timeStarted===false) {
        starttime = Date.now();
        timeStarted = true;
    }
};
