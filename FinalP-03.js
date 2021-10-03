let frase = "SERR PBQR PNZC"
// console.log(frase.charCodeAt(1))
// console.log(String.fromCharCode(69))
let nova = ""
for (let i=0; i<frase.length; i++) {
    if (frase.charCodeAt(i)-13 > 65) {
        console.log(String.fromCharCode(frase.charCodeAt(i)-13))
    } else {
//        console.log(String.fromCharCode(frase.charCodeAt(i-(i-65)- (90-(i-65)))))
    }
    
}

//se X-13 for menor que 65 -> X - (oque falta pra 65) - (90 - (X - o que faltava pra 65))
