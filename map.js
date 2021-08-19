const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, cb) => {
  const output = [];

  for (const e of arr) {
    output.push(cb(e));
  }

  return output;
};

// Functions below are used to test map function.
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

  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return console.log(`⛔️ Assertion Failed: One or more of the parameters is not an array.`);
  }

  let result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

};

const firstLetter = map(words, word => word[0]);
const lastLetter = map(words, word => word[word.length - 1]);
assertArraysEqual(firstLetter, ['g', 'c', 't', 'm', 't']); // ==> true
assertArraysEqual(lastLetter, ['d', 'l', 'o', 'r', 'm']); // ==> true
assertArraysEqual(firstLetter, lastLetter); // ==> false


