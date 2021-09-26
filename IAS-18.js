function truthCheck(collection, pre) {
// contador para guardar quantos são true.
var conta = 0
for (var c in collection) {
  // If it is has property and value is truthy
  if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
    conta++
  }
}
return conta == collection.length
  }
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))

// outra soluçao : ::::::::::::::::::::::::::::::::
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// outra soluçao : ::::::::::::::::::::::::::::::::
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
