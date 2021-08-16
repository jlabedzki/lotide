const assertEqual = function(actual, expected) {
  Array.isArray(actual) ? actual = actual.toString() : actual;
  Array.isArray(expected) ? expected = expected.toString() : expected;

  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = array => array ? (array.length >= 2 ? array.slice(1) : []) : undefined;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
