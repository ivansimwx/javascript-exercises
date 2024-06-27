const removeFromArray = function( arrayGiven, ...toRemove) {
    let newArray = [];
    let removeCheck = "";

    // add items to newArray if they are not the same as the item to remove
    for (let i=0; i<arrayGiven.length; i++) {
        console.log("loop cycle is " + i)
        removeCheck = "false";

        for (let j=0; j<toRemove.length; j++) {
            console.log("Given is " + arrayGiven[i] + ". Remove item is " + toRemove[j]);
            if (arrayGiven[i] === toRemove[j]){
                removeCheck = "true";
            }
        }

        console.log("removeCheck value is " + removeCheck);

        if (removeCheck == "false") {
            newArray.push(arrayGiven[i]);
        }

        console.log("new array is " + newArray)
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
