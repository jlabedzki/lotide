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

const without = function(source, itemsToRemove) {

  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return 'Please make sure both parameters are arrays.';
  }

  let arr = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arr.push(source[i]);
    }
  }

  return arr;
};