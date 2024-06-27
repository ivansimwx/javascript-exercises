const repeatString = function(word, repeat) {
    let newWord = "";

    if (repeat < 0) {
        return "ERROR";
    }

    for (let i=0; i<repeat; i++) {
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
