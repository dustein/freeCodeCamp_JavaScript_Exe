let frase = "SERR PBQR PNZC"
// console.log(frase.charCodeAt(1))
// console.log(String.fromCharCode(69))
let nova = ""
for (let i=0; i<frase.length; i++) {
//    console.log(frase.charCodeAt(i))
    let origem = frase.charCodeAt(i)
    
    if (origem > 64 && origem < 91) {
        if ((origem-13) > 64) {
            console.log(origem + "->" + String.fromCharCode(origem-13))
        } else {
            console.log(origem + "->>" + String.fromCharCode(origem+13))
            //console.log(13-origem+65)
        }
    } else {
        console.log(origem)
    }


    
    
}

