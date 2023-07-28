// check if if it is a century year
// by doing year % 100 === 0
// if it is true do year % 400 === 0
// if the above modular is true it is a leap year
// if it is false do a year % 4 === 0
// if true, it is leap year
// else not a leap year

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
