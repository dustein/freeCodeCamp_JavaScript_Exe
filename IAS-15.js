function descarta(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
}
  
console.log(descarta([1, 2, 3, 4], function(n) {return n > 3; }))

// outra : ::::::::
function descarta(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// outra : :::::::::::::::::
function descarta(arr, func) {
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
  
// outra: ::::::::::
function descarta(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
      ? (descarta(arr.slice(i + 1), func, i))
      : arr;
  }
