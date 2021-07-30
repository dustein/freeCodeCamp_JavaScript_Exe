// Return Part of an Array Using the slice Method
// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  let novo = anim.slice()

  return novo.slice(beginSlice, endSlice)
  
//   minha solução
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));