const eqArrays = (arr1, arr2) => {

  const result = arr1.every((e, ind) => {

    if (Array.isArray(e) && Array.isArray(arr2[ind])) {
      return eqArrays(e, arr2[ind]);
    } else {
      return e === arr2[ind];
    }

  });

  return arr1.length !== arr2.length ? false : result;
};

module.exports = eqArrays;