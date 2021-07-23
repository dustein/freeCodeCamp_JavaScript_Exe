function inverte(str) {
    invertida = []
    for (let i=str.length-1; i>=0; i--) {
        invertida.push(str[i])
    }
    return invertida.join("")
}

console.log(inverte("Animal"))