const eqArrays = (arr1, arr2) => {
  const result = arr1.every((element, index) => element === arr2[index]);

  return arr1.length !== arr2.length ? false : result;
};

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ?
    `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const letterPositions = sentence => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};
console.log(eqArrays([1, 2, 3], [1, 2]));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);