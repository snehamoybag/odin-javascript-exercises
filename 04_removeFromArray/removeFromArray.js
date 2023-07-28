const removeFromArray = function (arr, ...removableItems) {
  const updatedArr = arr.filter((currentItem) => {
    if (!removableItems.includes(currentItem)) {
      return currentItem;
    }
  });

  return updatedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
