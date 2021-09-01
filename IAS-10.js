function uniteUnique(arr) {
  var itens = [...arguments]
  var resultado = []
  for (var i = 0; i < itens.length; i++) {
    for (var j = 0; j < itens[i].length; j++) {
      if (!resultado.includes(itens[i][j])) {
        resultado.push(itens[i][j])
      }
    }
  }
  return resultado
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// outra solução: ::::::::::::::::::::::::::::::
function uniteUnique(arr) {
 var finalArray = []
 for (var i = 0; i < arguments.length; i++) {
    var itens = arguments[i]
    for (var j = 0; j < itens.length; j++) {
      var indexValue = itens[j]
      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue)
      }
    }
  }
  return finalArray
}

// outra solução: ::::::::::::::::::::::::::::::
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

// outra solução: ::::::::::::::::::::::::::::::
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// outra solução: ::::::::::::::::::::::::::::::
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}
// outra solução: ::::::::::::::::::::::::::::::
function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())]
