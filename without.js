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

const without = function(source, itemsToRemove) {
  let editedArray = [];
  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (remove === false) {
      editedArray.push(source[i]);
    }
  }
  return editedArray;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3],[1]), [2,3]);
assertArraysEqual(without([2,34,5,7], [34,5]), [2,7]);
assertArraysEqual(without(['1','2','3','4'], ['1', 2]), ['2', '3', '4']);
  