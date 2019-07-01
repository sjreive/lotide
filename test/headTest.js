const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

//assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
// assertEqual(head([2]),2);
// assertEqual(head([]),undefined);

describe('#head', () => {
  it ("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it ("returns undefined  for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});