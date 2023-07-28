// repeat a string number of times
const repeatString = function (string, n) {
  if (n < 0) {
    return "ERROR";
  }

  if (n === 0 || !string) {
    return "";
  }

  let repeatedString = "";
  for (let i = 1; i <= n; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
