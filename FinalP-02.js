function romano(num) {
  let mil = ""
  let quinhentos = ""
  let cem = ""
  let cinquenta = ""
  let dez = ""
  let cinco = ""
  let um = ""
  let resp = ""

console.log(num)
  if (num/1000 >= 1) {
    if (num > 3999) {
      return "Apenas números abaixo de 4000..."
    } else {
      mil = "M".repeat(parseInt(num/1000))    
      num -= 1000*(parseInt(num/1000))
      console.log(num)
    }


  } if (num/500 >= 1) {
    if (parseInt(num/900) == 1) {
      quinhentos = "CM"
      num -= 900
    } else {
      quinhentos = "D".repeat(parseInt(num/500))    
    }
    num -= 500*(parseInt(num/500))
    console.log(num)



  } if (num/100 >= 1) {
    if (parseInt(num/100) == 4) {
      cem = "CD"
      num -=400
    } else {
      cem = "C".repeat(parseInt(num/100))    
    }

    num -= 100*(parseInt(num/100))
    console.log(num)


  } if (num/50 >= 1) {

    if (parseInt(num/90) == 1) {
      cinquenta = "XC"
      num -= 90
    } else {
      cinquenta = "L".repeat(parseInt(num/50)) 
    }
    num -= 50*(parseInt(num/50))
    console.log(num)


  } if (num/10 >= 1) {

    if (parseInt(num/40) == 1) {
      dez = "XL"
      console.log("quarenta tira 40")
      num -= 40
    } else {
      dez = "X".repeat(parseInt(num/10))   
    }

    num -= 10*(parseInt(num/10))
    console.log(num)
    
  } if (num/5 >= 1) {
    if (num == 9) {
      cinco = "IX"
      num -= 9
    } else {
      cinco = "V"//.repeat(parseInt(num/5))
      num -= 5
    }
    //num -= 5//*(parseInt(num/5))
    console.log(num)

  } if (num/1 >= 1) {
    if (num == 4) {
      um = "IV"
    } else {
    um = "I".repeat(parseInt(num/1))
    }
    
       
  }
  return resp = mil+quinhentos+cem+cinquenta+dez+cinco+um
}

console.log(romano(44))
