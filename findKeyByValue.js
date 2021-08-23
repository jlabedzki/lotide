const assertEqual = function (actual, expected) {
  return actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

const findKeyByValue = function (object, value) {

  // Converts an object to a nested array, where each array is a key-value pair.
  const objToArray = Object.entries(object);

  for (let i = 0; i < objToArray.length; i++) {
    for (let j = 0; j < objToArray[i].length; j++) {
      if (objToArray[i][j] === value) {
        return objToArray[i][0];
      }
    }
  }

  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  thriller: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));