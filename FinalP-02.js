function romano(num) {

  let resp = ""

  if (num/1000 >= 1) {
    if (num > 3999) {
      return "Apenas números abaixo de 4000..."
    } else {
      resp = "M".repeat(parseInt(num/1000)) 
      num -= 1000*(parseInt(num/1000))
    }

  } if (num/500 >= 1) {
    if (parseInt(num/900) == 1) {
      resp += "CM"
      num -= 900
    } else {
      resp += "D".repeat(parseInt(num/500))
    }
    num -= 500*(parseInt(num/500))

  } if (num/100 >= 1) {
    if (parseInt(num/100) == 4) {
      resp += "CD"
      num -=400
    } else {
      resp += "C".repeat(parseInt(num/100))
    }
    num -= 100*(parseInt(num/100))

  } if (num/50 >= 1) {
    if (parseInt(num/90) == 1) {
      resp += "XC"
      num -= 90
    } else {
      resp += "L".repeat(parseInt(num/50))
    }
    num -= 50*(parseInt(num/50))

  } if (num/10 >= 1) {
    if (parseInt(num/40) == 1) {
      resp += "XL"
      num -= 40
    } else {
      resp += "X".repeat(parseInt(num/10))
    }
    num -= 10*(parseInt(num/10))
    
  } if (num/5 >= 1) {
    if (num == 9) {
      resp += "IX"
      num -= 9
    } else {
      resp += "V"
      num -= 5
    }

  } if (num/1 >= 1) {
    if (num == 4) {
      resp += "IV"
    } else {
      resp += "I".repeat(parseInt(num/1))
    }
       
  }
  return resp
}

console.log(romano(44))
