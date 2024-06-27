const removeFromArray = function( arrayGiven, toRemove) {
    let newArray = [];

    // add items to newArray if they are not the same as the item to remove
    for (let i=0; i<arrayGiven.length; i++) {
        if (arrayGiven[i] != toRemove){
            newArray.push(arrayGiven[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
