//elementi 

const startBtnElem = document.getElementById("startBtn");
const timerElem = document.getElementById("timer");
const numListElem = document.getElementById("numList");
const guessFormlem = document.getElementById("guessForm");

///////////

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndmNumArray = (min, max, length) => {
    const numArray = [];
    for (let i = 0; i < length; i++){
        const randomNUm = getRandomNum(min, max);
        numArray.push(randomNUm)
    }
    return  numArray;
}
//variabbili globali

let numsArray = []

const startGame = () => {
    startBtnElem.disabled = true
    numsArray = rndmNumArray(1, 99, 5);
    
    for(let i = 0; i < numsArray.length; i++){
        const curNum = numsArray[i];
        numListElem.innerHTML +=`<li>${curNum}</li>`
    }
}

startBtnElem.addEventListener("click", startGame);

