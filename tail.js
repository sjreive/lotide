const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
};

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

// Test Scenarios
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const testCaseOne = tail(["Hello","Lighthouse","Labs"]);
assertEqual(testCaseOne[0], "Lighthouse");

const testCaseTwo = tail([2]);
assertEqual(testCaseTwo.length,0);

const testCaseThree = tail([]);
assertEqual(testCaseThree.length,0);


