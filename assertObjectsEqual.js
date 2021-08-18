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

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  return eqObjects(actual, expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(assertObjectsEqual(cd, dc));