// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
function nonMutatingConcat(original, attach) {
    // Only change code below this line
  return original.concat(attach)
  
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  console.log(nonMutatingConcat(first, second))