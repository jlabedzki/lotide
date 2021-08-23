const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, [2, [1, 2, 3], 3]], [1, 2, [2, [1, 2, 3], 3]])); // => true

console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => Assertion should pass

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => Assertion should pass