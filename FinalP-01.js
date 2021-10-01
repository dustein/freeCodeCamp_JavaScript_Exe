function palindrome(str) {
    let inverso = []
    let arr = str
      .replace(/([^0-9a-zA-Z]+)/g, "")
      .toLowerCase()
      .split("")
    
    for (let i=arr.length-1; i>=0; i--) {
      inverso.push(arr[i])
    }
    
    if (arr.join("") == inverso.join("")) {
      return true
    } else {
      return false
    }
  }
  console.log(palindrome("eye"))
  // let frase = "Teste    das expressões"
  // console.log(frase.replace(/([^0-9a-zA-Z]+)/g, ""))
