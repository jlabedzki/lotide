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

const assertObjectsEqual = function(actual, expected) {
  return eqObjects(actual, expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(assertObjectsEqual(cd, dc));