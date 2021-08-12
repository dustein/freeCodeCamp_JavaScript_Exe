//IAS-03 - Seek & Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destruir(arr) {
  let alvo = Object.values(arguments).slice(1)
  
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<alvo.length; j++) {
      if (arr[i] === alvo[j]) {
        delete arr[i]
      }
    }
  }
  return arr.filter(item => item != null)
}
console.log(destruir([1, 2, 3, 1, 2, 3], 2, 3))

//outra solução
function destruirDois(arr) {
  var alvo = Array.from(arguments).slice(1)
  return arr.filter(function(item) {
    return !alvo.includes(item)
  })
}

//outra solução
function destruirTres(arr, ...alvos) {
  return arr.filter(item => !alvos.includes(item))
}
