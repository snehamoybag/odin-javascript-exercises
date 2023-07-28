const reverseString = function(string) {
  if (!string) {
    return "";
  }

  const allCharactersArr = string.split("");
  const allCharactersReversedArr = allCharactersArr.reverse();
  const reversedString = allCharactersReversedArr.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
