const palindromes = function(str) {
  const letterOrNumber = /[a-z0-9]/i;
  const lowerCaseStr = str.toLowerCase();
  const arrOfLettersAndNumbers = Array.from(lowerCaseStr).filter(
    (currentItem) => {
      return letterOrNumber.test(currentItem);
    }
  );

  for (let i = 0; i < arrOfLettersAndNumbers.length; i++) {
    const currentItemFromStart = arrOfLettersAndNumbers[i];
    const currentItemFromEnd =
      arrOfLettersAndNumbers[arrOfLettersAndNumbers.length - (i + 1)]; // sice i starts at 0

    if (currentItemFromStart !== currentItemFromEnd) return false;
    else continue;
  }

  // if loop finsh looping, then str is a palindrome
  return true;
};

// Do not edit below this line
module.exports = palindromes;
