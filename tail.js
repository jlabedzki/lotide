//Returns every element except the first of an array.
const tail = array => {
  return Array.isArray(array) ?
    (array.length >= 2 ? array.slice(1) : [])
    : undefined;
};

module.exports = tail;
