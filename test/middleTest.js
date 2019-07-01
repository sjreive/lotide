const middle = require("../middle");
const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual")

describe('#middle', () => {
  it ("returns [2,3] for [1,2,3,4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1,2,3,4]),[2,3], true));
  });

  it ("returns [2] for [4,2,3]", () => {
    assert.strictEqual(assertArraysEqual(middle([4,2,3]),[2], true));
  });

  it ("returns [] for [1,2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1,2]),[], true));
  });

  it ("returns [] for [\"Hello\"]", () => {
    assert.strictEqual(assertArraysEqual(middle(["Hello"]),[], true));
  });

});
