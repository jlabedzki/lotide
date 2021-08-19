const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};


const findKey = (obj, cb) => {
  const keys = Object.keys(obj);

  return keys.find(e => cb(obj[e]));
};

// Assertion should pass
console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), 'noma'));

// Assertion should fail
console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), 'Blue Hill'));

// Assertion should pass
console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 1)), 'Blue Hill'));