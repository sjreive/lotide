assertEqual = require('../assertEqual');
tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const testCaseOne = tail(["Hello","Lighthouse","Labs"]);
assertEqual(testCaseOne[0], "Lighthouse");

const testCaseTwo = tail([2]);
assertEqual(testCaseTwo.length,0);

const testCaseThree = tail([]);
assertEqual(testCaseThree.length,0);