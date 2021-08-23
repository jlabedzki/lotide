const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ?
    `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

console.log(assertArraysEqual([1, 2, 3], ['1', 2, 3])); // => Assertion should fail

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => Assertion should pass

module.exports = assertArraysEqual;