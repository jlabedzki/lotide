const assertEqual = function(actual, expected) {
  return actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

//* Previous eqArrays function (still works with nested arrays)
// const eqArrays = (arr1, arr2) => {
//   const result = arr1.every((el, ind) => el === arr2[ind]);
//   return arr1.length !== arr2.length ? false : result;
// };

//* New eqArrays function using recursion (built for the purpose of the exercise.)
const eqArrays = (arr1, arr2) => {
  const result = arr1.every((e, ind) => {
    if (Array.isArray(e)) {
      eqArrays(e, arr2[ind]);
    } else {
      return e === arr2[ind];
    }
  });

  return result;
};

console.log(eqArrays([1, 2, [2, [1, 2, 3], 3]], [1, 2, [2, [2, 1, 3]], 3])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);