const middle = require("../middle");
const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual")

describe('#middle', () => {
  it ("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });

  it ("returns [2] for [4,2,3]", () => {
    assert.deepEqual(middle([4,2,3]),[2]);
  });

  it ("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it ("returns [] for [\"Hello\"]", () => {
    assert.deepEqual(middle(["Hello"]),[]);
  });

});
