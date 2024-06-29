const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;

};

const sum = function(arr) {
	return arr.reduce((total, item) => total+item, 0,);
};

const multiply = function(arr) {
	return arr.reduce((total, item) => total*item,);
};

const power = function(a, b) {
  return a**b;

};

const factorial = function(a) {
  let final = 0;
	if (a==0) {
    return 1;
  }
  else {
    final = 1;
    for (let i=a; i>1; i--) {
      console.log(i);
      final *= i ;
      console.log(final); //evil figurine

    }
  }
  return final;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
