
const middle = function(array) {
  let length = array.length;
  let middleArray = [];
  if (length < 3) { // for arrays with 0-2 values, no middle,  return an empty array
    return middleArray;
  } else if (length % 2 === 0) {// for even numbers, return array containing two middle-most value
    middleArray.push(array[length / 2 - 1],array[length / 2]);
    return middleArray;
  } else {   // for odd numbers, return array containing single middle-most value
    middleArray.push(array[Math.floor(length / 2)]);
    return middleArray;
  }
};

module.exports = middle;



