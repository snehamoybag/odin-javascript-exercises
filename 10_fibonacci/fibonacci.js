const fibonacci = function(num) {
  // turn to number if it is a number string
  num = parseInt(num);

  if (!num || num <= 0) return "OOPS";

  const aFibonacciNums = [0, 1]; // by default
  for (let i = 0; i <= num; i++) {
    const nLast = aFibonacciNums[aFibonacciNums.length - 1];
    const nSecondToLast = aFibonacciNums[aFibonacciNums.length - 2];

    const nCurrentFibonacci = nLast + nSecondToLast;
    aFibonacciNums.push(nCurrentFibonacci);
  }

  return aFibonacciNums[num];
};

// Do not edit below this line
module.exports = fibonacci;
