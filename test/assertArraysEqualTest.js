const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([2,3,4],[2,3,4], true);
assertArraysEqual([2,3,4],[2,3,5], false);