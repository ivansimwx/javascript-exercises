const fibonacci = function(input) {
let position1Before = 1 ; 
let position2Before = 1 ; 
const position = parseInt(input);
let number = 0;

if (position == 0) {
    console.log("oops1");
    return 0;
}
else if (position < 0) {
    console.log("oops2");
    return "OOPS";
}
else if (position<3) { //for 1st and 2nd position, return 1
    console.log("oops3");
    return 1;
}
else { 
    for (let i=3; i<=position; i++){
        number = position2Before + position1Before; 

        //update values of position2Before and position 1before
        position2Before = position1Before;
        position1Before = number;
    }
}
return number;
}

// Do not edit below this line
module.exports = fibonacci;
