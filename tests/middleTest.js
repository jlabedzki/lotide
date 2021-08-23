const assert = require('chai').assert;
const middle = require('../middle');

describe(`#middle`, function () {
  it(`should return the middle value of an array as a new array`, function () {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it(`should return a single element if the original array's length is an odd number`, function () {
    assert.deepEqual(middle(['Johnny', 'Benjamin', 'Labedzki']), ['Benjamin']);
  });

  it(`should return the middle two elements if the original array's length is an even number`, function () {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it(`should return an empty array if the original array has only 1 element`, function () {
    assert.deepEqual(middle([1]), []);
  });

  it(`should return an empty array if the original array has only 2 elements`, function () {
    assert.deepEqual(middle([1, 2]), []);
  });
});