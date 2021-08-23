const assertEqual = require('../assertEqual');
const tail = require('../tail');
const log = console.log;

//Line 6 to 9 ensure that our tail function doesn't modify the original array.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
log(assertEqual(words.length, 3));

const result = tail(["Hello", "Lighthouse", "Labs"]);
log(assertEqual(result, ["Lighthouse", "Labs"])); // Will always fail without converting arrays into strings.
log(assertEqual(result.length, 2)); // ensure we get back two elements
log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

