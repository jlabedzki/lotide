# lotide# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jlabedzki/lotide`

**Require it:**

`const _ = require('@jlabedzki/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes in an array as a parameter, and returns the first element of that array. If the parameter is not an array, or if an array is empty, it returns undefined.

* `tail(...)`: Takes in an array as a parameter, and returns a new array without the first element of the original array. If the parameter contains one or fewer elements, returns an empty array. If the parameter is not an array, returns undefined.

* `middle(...)`: Takes in an array as a paremeter, and returns the middle element of that array as a new array. If the parameter has an odd length, then it returns one element. If the parameter has an even length, then it returns the two middle elements. If the parameter contains 2 or fewer elements, it returns an empty array. If the parameter is not an array, returns undefined.

* `countLetters(...)`: Takes in a string as a parameter. Creates a new object containing every unique letter as a key, as well as the number of times that letter appears in the string as a value. If the parameter is not a string, returns undefined.

* `countOnly(...)`: Takes in an array as the first parameter, and an object as a second parameter. The object contains a list of keys that correspond to the array elements that should be counted. Each key contains a boolean value of true. If an array element is included in the object, then that element will become a key of our ouput object, and the value of that new key will incrememnt by 1. Each time it is encountered, the value will incremement by 1 again.

* `eqArrays(...)`: Takes in two arrays as parameters. Loops through every element of the first array, and compares it to the element of the second array. If all elements match, returns true. If the parameters are nested arrays, it uses recursion to check each extra array. Order matters here, ie. [1, 2, 3] will not equal [3, 2, 1]. If one or more of the parameters is not an array, returns undefined.

* `eqObjects(...)`: Takes in two objects as a parameters. Checks to see if all the keys (and their respective values) are equal to all the keys (and their respective values) in the other. Can handle nested objects using recursion. Order of the keys and values does not matter, ie. {a: 1, b: 2} will be equal to {b: 2, a: 1}.

* `findKey(...)`: Takes in an object and a callback as parameters. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, it should return undefined.

* `findKeyByValue(...)`: Takes in an object and a value as parameters. Scans the object to see if the value exists. If the value does exist, returns the key associated with that value. If the key does not exist, returns undefined.

* `flatten(...)`: Takes in a array as as parameter. Loops through the elements, and if one of the elements is an array, it will bring all those elements up to the level of the main array. Uses recursion to handle arrays nested to any level of depth.

* `letterPositions(...)`: Takes in a string as a parameter. Creates a new object with each unique letter of the string as a new key, and their relative positions in the string as a value. Ie. "Johnny" would produce {j: [1], o: [2], h: [3], n: [4, 5], y: [6]}. Not case sensitive.

* `map(...)`: Takes in an array and a callback as parameters. Returns a new array populated with the results of calling the callback function on each element in the array. Works the same as Array.prototype.map().

* `takeUntil(...)`: Takes in an array and a callback as parameters. Returns a new array with all the elements of the first array until arriving at an element that returns a falsy value when the callback is called on it.

* `without(...)`: Takes in two arrays as parameters. The first array is the source array, and the second array is the items you'd like to remove from the source array. Returns a new array populated with the elements of the first array that don't match any elements of the second array. If one or more of the parameters is not an array, returns undefined.

* `assertEqual(...)`: Takes in two primitive values as parameters. If the first parameter equals (strictly, ie. ===) the second, then the assertion passes. If not, the assertion fails. Does not work with arrays or objects.

* `assertArraysEqual(...)`: Takes in two arrays as parameters. Uses the eqArrays function from above to assess their equality. If they are equal, assertion passes. If not, the assertion fails.

* `assertObjectsEqual(...)`: Takes in two objects as parameters. Uses the eqObjects function from above to assess their equality. If they are equal, assertion passes. If not, the assertion fails.
