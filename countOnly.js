const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  // should report back how many instances of each string were found in the allItems arrays of strings.
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) { // if alread in the object, increment
        results[item] += 1;
      } else { // otherwise add to object & set count to 1
        results[item] = 1;
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhana",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"],1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);