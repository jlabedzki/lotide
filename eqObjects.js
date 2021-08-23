const eqObjects = function (object1, object2) {
  const sortedObject1 = Object.keys(object1).sort().reduce(
    (obj, key) => {
      obj[key] = object1[key];
      return obj;
    },
    {}
  );

  const sortedObject2 = Object.keys(object2).sort().reduce(
    (obj2, key) => {
      obj2[key] = object2[key];
      return obj2;
    },
    {}
  );

  for (const key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      eqObjects(object1[key], object2[key]);
    } else if (JSON.stringify(sortedObject1) !== JSON.stringify(sortedObject2)) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects(ab, ba), true)); // Assertion should pass

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), false)); // Assertion should pass

// const cd = { c: "2", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(dc, cd)); // => false

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// console.log(eqObjects({ a: { z: { f: 1, z: 10, k: { wow: 'alot', of: 'nested objects' } } }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false


