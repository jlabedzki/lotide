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

const middle = (array) => {
  let numOfElements = 0;

  for (let num of array) {
    numOfElements += 1;
  }



  let midIndex = numOfElements / 2;

  if (!Number.isInteger(midIndex)) {
    midIndex = Math.floor(midIndex);
    return [array[midIndex]];
  }

  return numOfElements > 2 ? [array[midIndex - 1], array[midIndex]] : [];
};

console.log(middle([1, 2, 3, 4, 5,]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);