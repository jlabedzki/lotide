const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  return eqObjects(actual, expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

module.exports = assertObjectsEqual;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// console.log(assertObjectsEqual(cd, dc));