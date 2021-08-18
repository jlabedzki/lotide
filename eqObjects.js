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

  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  const length1 = key1.length;
  const length2 = key2.length;

  if (length1 !== length2) {
    return false;
  }

  for (let i = 0; i < key1.length; i++) {
    let keyName = key1[i];
    if (Array.isArray(object1[keyName])) {
      if (!eqArrays(object1[keyName], object2[keyName])) {
        console.log('eqArray');
        return false;
      } else {
        continue;
      }
    }
    if (object1[keyName] !== object2[keyName]) {
      console.log(object1[keyName], object2[keyName]);
      return false;
    }
  }

  // if (Array.isArray(object1[keyValue1[i][j]]) && Array.isArray(object1[keyValue2[i][j]]) && !eqArrays(object1[keyValue1[i][j]], object1[keyValue2[i][j]])) {
  //   return false;
  // }

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