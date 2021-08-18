const assertEqual = function(actual, expected) {
  return actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = arr1.every(function(element, index) {
    return element === arr2[index];
  });

  return result;
};

const eqObjects = function(object1, object2) {

  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return 'One or more parameters is not an object.';
  }

  let keyValue1 = Object.entries(object1).sort().flat(Infinity);
  let keyValue2 = Object.entries(object2).sort().flat(Infinity);

  let length1 = keyValue1.length;
  let length2 = keyValue2.length;

  if (length1 !== length2) {
    return false;
  }

  for (let i = 0; i < keyValue1.length; i++) {
    for (let j = 0; j < keyValue1[i].length; j++) {
      if (keyValue1[i][j] !== keyValue2[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = {
  c: "2",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};
console.log(eqObjects(dc, cd)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false