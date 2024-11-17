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
