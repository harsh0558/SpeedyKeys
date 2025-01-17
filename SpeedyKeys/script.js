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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validate(word, userInput) {
    let result = "";
    let minLength = Math.min(word.length, userInput.length);
    if(word.length===userInput.length){
        for (let i = 0; i < minLength; i++) {
            if (word[i] === userInput[i]) {
                result += `<span style="color:green;">${userInput[i]}</span>`;
            } else {
                result += `<span style="color:red;">${word[i]}</span>`;
            }
        }
        return result;
    }else{
        result = `<span style="color:orange;">${word}</span>`
        return result;``
    }   
}


let wordsArray = [];
for (let i = 0; i < 20; i++) {
    let word = words[getRandomInt(0, 99)];
    wordsArray.push(word);
}

let string = wordsArray.join(" ");

let main_div = document.querySelector("#main");

let messageContainer = document.createElement("div");
messageContainer.classList.add("words");
messageContainer.innerHTML = string; 
main_div.prepend(messageContainer);

let input = document.querySelector("#input");
let iterate = 0;

input.addEventListener("keydown", (event) => {
    
    if (event.key === " " || event.key==="Enter") {
        let retVal = validate(wordsArray[iterate], input.value.trim());
        wordsArray[iterate] = retVal; 
        let updatedString = wordsArray.join(" "); 

        let text_div = document.querySelector(".words");
        text_div.innerHTML = updatedString; 

        iterate = iterate+1;
        input.value = "";
    }
    if(iterate===20){
        location.reload();
    }
});
