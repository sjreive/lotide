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

const middle = function(array) {
  let length = array.length;
  let middleArray = [];
  if (length < 3) { // for arrays with 0-2 values, no middle,  return an empty array
    return middleArray;
  } else if (length % 2 === 0) {// for even numbers, return array containing two middle-most value
    middleArray.push(array[length / 2 - 1],array[length / 2]);
    return middleArray;
  } else {   // for odd numbers, return array containing single middle-most value
    middleArray.push(array[Math.floor(length / 2)]);
    return middleArray;
  }
};

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([4,2,3]),[2]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle(["Hello"]),[]);

