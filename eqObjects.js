const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`💔 Assertion Failed: ${actual} !=== ${expected}`);
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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  if (Object.keys(object1).length === 0) {
    return true;
  }


  let currentKey = Object.keys(object1)[0];
  let obj1 = object1[currentKey];
  let obj2 = object2[currentKey];
  delete object1[currentKey];
  delete object2[currentKey];

  if (Array.isArray(object1[currentKey]) && Array.isArray(object2[currentKey])) {
    return eqArrays(object1[currentKey], object2[currentKey]) && eqObjects(object1, object2);
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    return eqObjects(obj1, obj2) && eqObjects(object1, object2);
  } else {
    return (obj1 === obj2) && eqObjects(object1, object2);
  }

};


//Test Cases for Primative Data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

//Test Cases for Objects containing arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

//Test Cases for Objects containing other objects

const ef = { a: {z: 1}, b: 2};
const fe = {a : {y: 0, z:1}, b: 2};
const ef2 = {b: 2, a: {z: 1}};
const gh = {a: {b: {c: 3}, z: {y: {x: 24, w: 23}} }};
const hg = {a: 1, b: {c: 3, d: 4}, e: {f: 6}};
const hg2 = {e: {f: 6}, a: 1, b: {c: 3, d: 4}};
assertEqual(eqObjects(ef, ef2), true);
assertEqual(eqObjects(fe, ef2), false);
assertEqual(eqObjects(gh, hg), false);
assertEqual(eqObjects(hg, hg2), true);
