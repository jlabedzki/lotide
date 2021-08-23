const assertEqual = function (actual, expected) {
  return actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const countLetters = (string) => {
  const results = {};

  for (const letters of string.toLowerCase()) {
    if (letters === ' ') {
      continue;
    }
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }

  return results;
};

console.log(countLetters('My name is Johnny'));
console.log(countLetters('Johnny is my name'));
const one = countLetters('My name is Johnny');
const two = countLetters('Johnny is my name');
console.log(assertEqual(one.n, two.n));


module.exports = countLetters;