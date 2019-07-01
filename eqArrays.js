const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {  
    if (arr1[i] !== arr2[i]) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (eqArrays(arr1[i], arr2[i]) !== true) {
         return false; 
        }
      } else {
      return false; 
      }   
    } 
  } 
  return true;
};
  
console.log(eqArrays([1,[2,3],2], [1,[2,3],2]));

module.exports = eqArrays;
