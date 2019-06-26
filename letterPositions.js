
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log('💚 Assertion Passed: Arrays are equal.');
  } else
    console.log('💔 Assertion Failed: Arrays are not equal');
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentance) {
  // should report back the position of each occurance of a letter within sentance.
  let results = {};
  sentance.split(" ").join("");
  for (let letter of sentance) {
    if (letter !== " ") {
      results[letter] = [];
    }
  }
  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") { // if not a blank space
      results[sentance[i]].push(i);
    }
  }
  return results;
};


// Test cases
const testResult1 = letterPositions("hello");
const testResult2 = letterPositions("lighthouse labs");

assertArraysEqual(testResult1.l, [2, 3]);
assertArraysEqual(testResult1.h, [0]);
assertArraysEqual(testResult2.a, [12]);
assertArraysEqual(testResult2.l, [0, 11]);
