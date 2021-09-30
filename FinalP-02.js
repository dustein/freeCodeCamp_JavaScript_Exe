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
    resp = mil
    num = num - 1000*(parseInt(num/1000))
    console.log(num)
  } if (num/500 >= 1) {
    quinhentos = "D".repeat(parseInt(num/500))
    resp += quinhentos
    num = num-500*(parseInt(num/500))
    console.log(num)
  } if (num/100 >= 1) {
    cem = "C".repeat(parseInt(num/100))
    resp += cem
    num = num-100*(parseInt(num/100))
    console.log(num)
  } if (num/50 >= 1) {
    cinquenta = "L".repeat(parseInt(num/50))
    resp += cinquenta
    num = num-50*(parseInt(num/50))
    console.log(num)
  } if (num/10 >= 1) {
    dez = "X".repeat(parseInt(num/10))
    resp += dez
    num = num-10*(parseInt(num/10))
    console.log(num)
  } if (num/5 >= 1) {
    cinco = "V".repeat(parseInt(num/5))
    resp += cinco
    num = num-5*(parseInt(num/5))
    console.log(num)
  } if (num/1 >= 1) {
    um = "I".repeat(parseInt(num/1))
    resp += um
    num = num-1*(parseInt(num/1))
    console.log(num)
  }
  return resp
}

console.log(romano(1678))
