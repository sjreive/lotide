const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2, expected) {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`💚 Assertion Passed!`);
  } else
    console.log(`💔 Assertion Failed!`);
};


module.exports = assertArraysEqual;