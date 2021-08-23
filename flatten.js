const flatten = (nestedArray) => {
  //* Can use the single return statement below to replace the entire function. Built the function for learning recursion.

  // return nestedArray.flat(Infinity);

  let output = [];

  nestedArray.forEach(e => {
    if (Array.isArray(e)) {
      let temp = flatten(e);
      temp.forEach(e => output.push(e));
    } else {
      output.push(e);
    }
  });

  return output;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, [1, 2, 3], 4], 5, [6]]));