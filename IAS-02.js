//Problema: return the symmetric difference of the two arrays.
//cria um novo array com todos os itens. Filtra esse novo, retornando os que não são encontrados no arr1 OU no arr2
function dif(arr1, arr2) {
  let newArr = arr1.concat(arr2)
  return newArr.filter(function(item) {
    return !arr1.includes(item) || !arr2.includes(item)
  })
}
console.log(dif([1,2,3,4], [3,4,5,6]))


//outra solução:
function difDois(arr1, arr2) {
  return [...dif(arr1, arr2), ...dif(arr2, arr1)];

  function difDois(primeiro, segundo) {
    return primeiro.filter(function(item) {
      return segundo.indexOf(item) === -1
    })
  }
}
console.log(difDois([1,2,3,4], [3,4,5,6,70]))
