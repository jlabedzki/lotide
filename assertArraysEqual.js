const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = arr1.every(function (element, index) {
    return element === arr2[index];
  });

  return result;
};

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ?
    `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

assertArraysEqual([1, 2, 3], ['1', 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);