let frase = "SERR PBQR PNZC"

let nova = ""
for (let i=0; i<frase.length; i++) {

    let origem = frase.charCodeAt(i)
    
    if (origem > 64 && origem < 91) {
        if ((origem-13) > 64) {
            console.log(origem + "->" + String.fromCharCode(origem-13))
        } else {
            console.log(origem + "->>" + String.fromCharCode(origem+13))

        }
    } else {
        console.log(origem)
    }
}
