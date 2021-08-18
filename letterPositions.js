const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = arr1.every(function(element, index) {
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

const letterPositions = (sentence) => {
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

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);