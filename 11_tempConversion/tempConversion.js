function roundDecimals(num) {
  return Math.round(num * 10) / 10; // rounds to 2 decimal places
  // math.round rounds up or down to the neareset integer. 
  // by multiplying by 10 first, we guarantee that the number is accurate to the tens
} 

const convertToCelsius = function(temperature) {
  const fahrenheitToCelsius = (temperature - 32) * (5 / 9);
  return roundDecimals(fahrenheitToCelsius); 
};

const convertToFahrenheit = function(temperature) {
  const celsiusToFahrenheit = (temperature * (9 / 5) + 32);
  return roundDecimals(celsiusToFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
