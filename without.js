const without = function (source, itemsToRemove) {

  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return undefined;
  }

  let arr = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arr.push(source[i]);
    }
  }

  return arr;
};

module.exports = without;