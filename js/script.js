//elementi 
//1 parte
const startBtnElem = document.getElementById("startBtn");
const timerElem = document.getElementById("timer");
const numListElem = document.getElementById("numList");
const guessFormElem = document.getElementById("guessForm");
// 2 parte
const inputList = document.querySelectorAll("input");
const errorCountElem = document.getElementById("errorCount")
///////////
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndmNumArray = (min, max, length) => {
    const numArray = [];
    for (let i = 0; i < length; i++) {
        const randomNUm = getRandomNum(min, max);
        numArray.push(randomNUm)
    }
    return numArray;
}
//variabbili globali

let numsArray = []

const startGame = () => {
    errorCountElem.innerHTML = "";
    guessFormElem.classList.add("d-none")
    startBtnElem.disabled = true
    numsArray = rndmNumArray(1, 99, 5);

    for (let i = 0; i < numsArray.length; i++) {
        const curNum = numsArray[i];
        numListElem.innerHTML += `<li>${curNum}</li>`
    }
    let counter = 3
    const timerId = setInterval(function () {
        timerElem.innerHTML = counter;
        counter--
        if (counter === 0) {
            clearInterval(timerId)
            numListElem.innerHTML = "";
            timerElem.innerHTML = "Indovina";
            guessFormElem.classList.remove("d-none");
            startBtnElem.disabled = false
        }
    }, 1000);

}

startBtnElem.addEventListener("click", startGame);

const formSubmit = (event) => {
    event.preventDefault()
    const numGuessed = []
    for (let i = 0; i < inputList, length; i++) {
        const curInput = inputList[i];
        numGuessed.push(parseInt(curInput.value))
    }
    const correctGuess = []
    let counter2 = 0
    for (let i = 0; i < numGuessed.length; i++) {
        const curNum = numGuessed[i];
        if (numsArray.includes(curNum)) {
            correctGuess.push(curNum);
            counter2++
        }
    }
    errorCountElem.innerHTML = `Hai indovinato ${counter2} numeri: ${correctGuess.join(",")}`
}
guessFormElem.addEventListener("submit", formSubmit);
