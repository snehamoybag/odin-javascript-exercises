const convertToCelsius = function(fahrenheit) {
  // The formula for Fahrenheit to Celsius is °C = (°F − 32) × 5/9.
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // for precision
};

const convertToFahrenheit = function(celsius) {
  // The formula for Celsius to Fahrenheit is °F = (°C × 9/5) + 32.
  const fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10; // for precision
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
