const convertToCelsius = function(fahrenheitDeg) {
  let celsiusFinal = Number(((fahrenheitDeg -32) * 5/9).toFixed(1));
  return celsiusFinal
};

const convertToFahrenheit = function(celsiusDeg) {
  let fahrenheitFinal = Number((celsiusDeg * 9/5 +32).toFixed(1));
  return fahrenheitFinal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
