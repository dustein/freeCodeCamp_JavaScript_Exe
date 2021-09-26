function binaryAgent(str) {
    var binario = str.split(" ")
    var unicode = []
  /*usando a raiz (base) como parâmetro do parseInt, conseguimos converter um valor binário para decimal e simultaneamente converter para caractere*/
  for (var i = 0; i < binario.length; i++) {
    unicode.push(String.fromCharCode(parseInt(binario[i], 2)))
  }
  return unicode.join("")
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))


//outra solução : ::::::::::::::::::
function binaryAgent(str) {
str = str.split(" ")
var potencia
var decValor = 0
var resultado = ""
//ver cada item da string
for (var s = 0; s < str.length; s++) {
  // ver cada digito do item binario
  for (var t = 0; t < str[s].length; t++) {
    // usando IF para operar somente os ativos, ou seja 1, ignora o 0 desligado
    if (str[s][t] == 1) {
      // This is quivalent to 2 ** position
      potencia = Math.pow(2, +str[s].length - t - 1);
      decValor += potencia;
      // Record the decimal value by adding the number to the previous one.
    }
  }
  // após converter o binário em decimal, converter este para string e guardar
  resultado += String.fromCharCode(decValor);
  // Reset o decimal para usar no próxio número
  decValor = 0;
}
return resultado;
}

//outra solução : ::::::::::::::::::
function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function(char) {
          return parseInt(char, 2)
        })
      )
}
