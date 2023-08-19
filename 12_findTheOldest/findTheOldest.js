const findTheOldest = function(arr) {
  const oldestPersonObj = arr.reduce((prevOldestObj, currentObj) => {
    const currentAgeIfAlive = new Date().getFullYear();
    const currentPersonAge = (currentObj.yearOfDeath || currentAgeIfAlive) - currentObj.yearOfBirth;
    const prevPersonAge = (prevOldestObj.yearOfDeath || currentAgeIfAlive) - prevOldestObj.yearOfBirth;

    return currentPersonAge > prevPersonAge ? currentObj : prevOldestObj;
  });

  return oldestPersonObj;
};

// Do not edit below this line
module.exports = findTheOldest;
