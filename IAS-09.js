function faltaLetra(str) {
  let codeAtual = str.charCodeAt(0);
  let letra = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === codeAtual) {
        codeAtual++;
      } else {
        letra = String.fromCharCode(codeAtual);
      }
    });

  return letra
}
console.log(faltaLetra("abcde"))

//outra slução: ::::::::::::::::::::::

function faltaLetra(str) {
  for (var i = 0; i < str.length; i++) {
    /* codigo ASCII do caractere */
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {      
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

//outra slução: ::::::::::::::::::::::

function faltaLetra(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
