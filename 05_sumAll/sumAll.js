const sumAll = function(num1, num2) {
    let finalNum = 0;
    let startNum = 0;
    let endNum = 0;

    //check numbers to sequence loop
    if (num1 <0 || num2<0 || typeof(num1)!="number" || typeof(num2)!="number" ){
        return "ERROR";
    }
    else if (num1<num2){
        startNum = num1;
        endNum = num2;
    }
    else {
        startNum = num2;
        endNum = num1;
    }

    //add numbers within range
    for (let i=startNum; i<=endNum; i++){
        finalNum += i;
    }

    return finalNum;
    
};

// Do not edit below this line
module.exports = sumAll;
