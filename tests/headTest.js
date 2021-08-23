const assert = require('chai').assert;
const head = require('../head');

describe('#head', function () {
  it(`should return the first element of an array`, function () {
    assert.equal(head([1, 2, 3]), 1);
  });

  it(`should return the first element of an array even if there is only one element in the array`, function () {
    assert.equal(head([5]), 5);
  });

  it(`should return undefined if an array is empty`, function () {
    assert.equal(head([]), undefined);
  });

  it(`should return undefined if the argument passed is not an array`, function () {
    assert.equal(head('Johnny'), undefined);
  });
});



// console.log(assertEqual(head([5, 6, 7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
// console.log(assertEqual(head(), "Johnny"));