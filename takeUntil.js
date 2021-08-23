// Returns a new array with all the elements of the first array until arriving at an element that returns a falsy value for the callback function.
const takeUntil = (arr, cb) => {
  const output = [];

  arr.every(e => !cb(e) ? output.push(e) : false);

  return output;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]); // ==> Assertion should pass
// assertArraysEqual(results2, ['I', `haven't`, 'been', 'to', 'Hollywood']); // ==> Assertion should fail