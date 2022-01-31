const sumAll = function (start, end) {
  if (
    typeof start === 'number' &&
    typeof end === 'number' &&
    start >= 0 &&
    end >= 0
  ) {
    nums = Math.abs(end - start) + 1;
    return ((start + end) * nums) / 2;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
