const middle = (array) => {
  let midIndex = array.length / 2;

  if (array.length < 3) {
    return [];
  }

  if (!Number.isInteger(midIndex)) {
    midIndex = Math.floor(midIndex);
    return [array[midIndex]];
  }

  return [array[midIndex - 1], array[midIndex]];
};

module.exports = middle;