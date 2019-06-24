
const head = function(array) {
  let headValue = array[0];
  return headValue;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
assertEqual(head(["Hello","Lighthouse","Labs"]), "Labs");
assertEqual(head([2]),2);
assertEqual(head([]),2);