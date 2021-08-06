// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
const squareList = arr => {
    // Only change code below this line
    return arr
    .filter(item => item > 0 && item % parseInt(item) == 0)
    .map(item=> item*item)
    // Only change code above this line
  }
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
  console.log(squaredIntegers)