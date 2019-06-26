const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
};


const countLetters = function(string) {
  // should report back how many instances of each string were found in the allItems arrays of strings.
  let results = {};
  string = string.split(" ").join("");
  for (const letter of string) {
    if (results[letter]) { // if object already contains this letter, increment
      results[letter] += 1;
    } else { // otherwise add to object & set count to 1
      results[letter] = 1;
    }
  }
  return results;
};

// Test case
const expectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const actualResult = countLetters("lighthouse in the house");

assertEqual(actualResult.l, expectedResult.l);
assertEqual(actualResult.g, expectedResult.g);
assertEqual(actualResult.a, expectedResult.a);
