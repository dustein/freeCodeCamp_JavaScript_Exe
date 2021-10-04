function telephoneCheck(str) {
  let regraNumeros = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regraNumeros.test(str)    
}

console.log(telephoneCheck("2555-555-5555"))
