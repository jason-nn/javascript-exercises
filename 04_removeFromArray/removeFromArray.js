const removeFromArray = function (arr, ...remove) {
  return arr.filter((i) => !remove.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
