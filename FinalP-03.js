function rot13(str) {

  let nova = ""
  
  for (let i=0; i<str.length; i++) {

    let origem = str.charCodeAt(i)
    
    if (origem > 64 && origem < 91) {
        if ((origem-13) > 64) {
          nova += String.fromCharCode(origem-13)
            
        } else {
          nova += String.fromCharCode(origem+13)            

        }
    } else {
      nova += String.fromCharCode(origem)        
    }  
}
  return nova
}

console.log(rot13("SERR PBQR PNZC"))
