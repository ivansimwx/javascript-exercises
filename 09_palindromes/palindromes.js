const palindromes = function (phrase) {
    let phraseTemp = phrase.replace(/[,.!\s]/ig, "").toLowerCase();
    let arrayTemp = [];


    console.log(phraseTemp);

    for (let i=0; i<phraseTemp.length; i++){
        arrayTemp[i]=phraseTemp.charAt(phraseTemp.length-i-1);
    }
     console.log(arrayTemp);

    let phraseFlip = arrayTemp.join("");

    console.log(phraseFlip);

    return (phraseFlip === phraseTemp) ? true : false;
    console.log(phraseFlip);
};

// Do not edit below this line
module.exports = palindromes;
