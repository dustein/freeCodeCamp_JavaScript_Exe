
function trocar(compra, pago, caixa) {
  const moedas = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
//arredonda corrige casas decimais estranhas
  const corrige = (expression, precision = 2) => +(expression.toFixed(precision));
let caixaMuda = []
let resp = {status: "INSUFFICIENT_FUNDS", change: []}
let troco = pago - compra

let inicioCaixaTotal = 0
for (let i=0; i<caixa.length; i++) {
  inicioCaixaTotal += caixa[i][1]
  
}
let caixaInicial = corrige(inicioCaixaTotal)
// console.log("Caixa Total Inicial -> " + caixaInicial)
let caixaFim = corrige(caixaInicial-troco)
// console.log("caixaFim -> " + caixaFim)

for (let i = moedas.length-1; i>=0; i--) {
  let quantoSaiu = 0
  let moeda = moedas[i][1]
  let gaveta = caixa[i][1]
  while (troco >= moeda && gaveta >= moeda) {
// console.log(`${i} - ${moeda} retirados de ${gaveta}.`)
    
    troco -= moeda
    // console.log("troco 1-> " + troco)
    troco = corrige(troco)
    gaveta = Math.round(gaveta * 1e2)/100
    // console.log("troco 2-> " + troco)
    //caixa[i][1] -= Math.round(moedas[i][1]*1e2)/100
    gaveta -= moeda
    // console.log("caixa " + gaveta)
    // console.log("moeda " + moeda)
    // console.log(`Atualizado: ${caixa[i][0]} tem ${gaveta}. Falta dar troco de ${troco}`)
    //quanto saiu de caga gaveta moeda caixa
    quantoSaiu += moeda
    caixaMuda[i] = caixa[i]
    caixaMuda[i][1] = quantoSaiu
  }
}



//compara caixaClone
// for (let i=0; i<caixaClone.length; i++) {
//   console.log("caixaClone-> " + caixaClone[i])
//   console.log("caixa-> " + caixaFim[i])
//   if (caixaClone[i] == caixaFim[i]) {
//     console.log("iguais")
//   }
// }


//Resp IFs
  if (caixaFim == 0 && troco == 0) {
    resp.status = "CLOSED"
  } else if (caixaFim > 0 && troco == 0) {
    resp.status = "OPEN"
    resp.change = caixaMuda
  } 



// console.log(caixaFim)
// console.log(troco)

return resp
}

console.log(trocar(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

// link do desafio: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
