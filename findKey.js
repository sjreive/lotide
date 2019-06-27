const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
};

const findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name]) === true) {
      return name;
    }
  }
};


const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const obj2 = {
  "Ice Cream" : {strawberry: 1, vanilla: 1},
  "Almonds" : 20,
  "Cheese" : 1
};

assertEqual(findKey(obj1, x => x.stars === 2), "noma");
assertEqual(findKey(obj2, x => x === 1), "Cheese");