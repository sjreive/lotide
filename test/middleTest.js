const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual")


assertArraysEqual(middle([1,2,3,4]),[2,3], true);
assertArraysEqual(middle([4,2,3]),[2], true);
assertArraysEqual(middle([1,2]),[], true);
assertArraysEqual(middle(["Hello"]),[], true);