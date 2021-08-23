const assert = require('chai').assert;
const tail = require('../tail');

describe(`#tail`, function () {
  it(`should every element of an array except for the first`, function () {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it(`should not modify the original array`, function () {
    const array = [1, 2, 3, 4, 5];
    tail(array);
    assert.deepEqual(array, [1, 2, 3, 4, 5]);
  });
});