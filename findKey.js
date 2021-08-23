//Takes in an object and a callback as a parameter. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, it should return undefined.
const findKey = (obj, cb) => {
  const keys = Object.keys(obj);

  return keys.find(e => cb(obj[e]));
};

module.exports = findKey;

// // Assertion should pass
// console.log(assertEqual((findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 4)), 'noma'));

// // Assertion should fail
// console.log(assertEqual((findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2)), 'Blue Hill'));

// // Assertion should pass
// console.log(assertEqual((findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 1)), 'Blue Hill'));