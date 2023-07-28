const leapYears = function(year) {
  const isCenturyYear = year % 100 === 0;
  let isLeapYear = false;

  if (isCenturyYear && year % 400 === 0) {
    isLeapYear = true;
  } else if (!isCenturyYear && year % 4 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
