//Creates a new object with the # of times a letter appears in a given string.
const countLetters = (string) => {
  const results = {};

  if (typeof string !== 'string') {
    return undefined;
  }

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
module.exports = countLetters;

// console.log(countLetters(123));

// console.log(countLetters('My name is Johnny'));
// console.log(countLetters('Johnny is my name'));
// const one = countLetters('My name is Johnny');
// const two = countLetters('Johnny is my name');
// console.log(assertEqual(one.n, two.n));