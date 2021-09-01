function sumFibs(num) {
  let inicial = 0
  let atual = 1
  let resp = 0
  while (atual <= num) {
    if (atual % 2 !== 0) {
      resp += atual
    }
    atual += inicial
    inicial = atual - inicial
  }

  return resp
}

console.log(sumFibs(4))


// outra solução:  ::::::::::::::::::::::::

function sumFibs(num) {
  // checar validade do input
  if (num <= 0) return 0
  // cria um array com a sequência de fib até chegar no num
  const arrFib = [1, 1]
  let nextFib = 0
  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib)
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b)
}

console.log(sumFibs(4))
