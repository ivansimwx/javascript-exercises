const repeatString = function(word, repeat) {
    let newWord = "";

    for (let i=0; i<repeat; i++) {
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
