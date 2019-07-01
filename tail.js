const tail = function(array) {
  let tailArray = [];
  if(array.length > 1) {
    tailArray = array.slice(1);
  } 
  return tailArray;
};

module.exports = tail;



