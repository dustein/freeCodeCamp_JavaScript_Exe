function romano(num) {
  let mil = ""
  let quinhentos = ""
  let cem = ""
  let cinquenta = ""
  let dez = ""
  let cinco = ""
  let um = ""
  let resp = ""
  if (num/1000 >= 1) {
    mil = "M".repeat(parseInt(num/1000))    
    num -= 1000*(parseInt(num/1000))
    console.log(num)
  } if (num/500 >= 1) {
    quinhentos = "D".repeat(parseInt(num/500))    
    num -= 500*(parseInt(num/500))
    console.log(num)
  } if (num/100 >= 1) {
    cem = "C".repeat(parseInt(num/100))    
    num -= 100*(parseInt(num/100))
    console.log(num)
  } if (num/50 >= 1) {
    cinquenta = "L".repeat(parseInt(num/50))    
    num -= 50*(parseInt(num/50))
    console.log(num)
  } if (num/10 >= 1) {
    dez = "X".repeat(parseInt(num/10))   
    num -= 10*(parseInt(num/10))
    console.log(num)
  } if (num/5 >= 1) {
    cinco = "V".repeat(parseInt(num/5))    
    num -= 5*(parseInt(num/5))
    console.log(num)
  } if (num/1 >= 1) {
    um = "I".repeat(parseInt(num/1))
       
  }
  return resp = mil+quinhentos+cem+cinquenta+dez+cinco+um
}

console.log(romano(1678))
