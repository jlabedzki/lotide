//Creates a new object with the positions of each letter in the sentence. Ie. with the given string 'Johnny', the position of 'j' will be 1, whereas 'n' would be [4, 5].
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

module.exports = letterPositions;


// console.log(eqArrays([1, 2, 3], [1, 2]));

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);