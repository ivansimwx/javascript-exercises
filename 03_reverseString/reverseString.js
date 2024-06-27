const reverseString = function(word) {
    let reverseWordArray = [];
    let reverseCounter = 0;
    let reverseWord = "";

    if (word.length<1) {
        return word;
    }

    for (let i=word.length-1; i>=0; i-- ) {
        reverseWordArray[reverseCounter] = word[i];
        reverseCounter++;
    }

    for (let i=0; i<reverseWordArray.length; i++ ) {
        reverseWord +=reverseWordArray[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
