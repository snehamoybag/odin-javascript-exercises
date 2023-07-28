// we can use a simple for loop to sum numbers from min till max
// but this can be less efficient incase of huge numbers
// we need to find a mathematical formula to sum numbers in range
// and implement a javascript version of it

// sum consecutive numbers in range
const sumAll = function(firstNum, secondNum) {
  if (
    typeof firstNum !== "number" ||
    typeof secondNum !== "number" ||
    firstNum < 0 ||
    secondNum < 0
  ) {
    return "ERROR";
  }

  const minNum = Math.min(firstNum, secondNum);
  const maxNum = Math.max(firstNum, secondNum);

  // total numbers in between
  const n = maxNum - minNum + 1;
  // math formula of sum of all consecutive numbers is
  // (n/2 * (maxNum + minNum))
  const sumOfAllNums = (n / 2) * (maxNum + minNum);
  return sumOfAllNums;
};

// Do not edit below this line
module.exports = sumAll;
