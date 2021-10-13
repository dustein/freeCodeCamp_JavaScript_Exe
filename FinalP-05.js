const moedas = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
//"corrige" casas decimais estranhas
const corrige = (expression, precision = 2) => +(expression.toFixed(precision));

function trocar(compra, pago, caixa) {

  let caixaMuda = []
  let resp = {status: "INSUFFICIENT_FUNDS", change: []}
  let troco = pago - compra

  let inicioCaixaTotal = 0
  for (let i=0; i<caixa.length; i++) {
   inicioCaixaTotal += caixa[i][1] 
  }

  let caixaInicial = corrige(inicioCaixaTotal)
  let caixaFim = corrige(caixaInicial-troco)

  for (let i = moedas.length-1; i>=0; i--) {
    let quantoSaiu = 0
    let moeda = moedas[i][1]
    let gaveta = caixa[i][1]
    while (troco >= moeda && gaveta >= moeda) {
    
      troco -= moeda
      troco = corrige(troco)
    
      gaveta = Math.round(gaveta * 1e2)/100
      gaveta -= moeda
    
      quantoSaiu += moeda

  }
  if (quantoSaiu > 0) {
    caixaMuda[i] = caixa[i]
    caixaMuda[i][1] = corrige(quantoSaiu)
  }

  
  
}
let caixaMudaFinal = caixaMuda.filter(Boolean).reverse()

//Resp IFs
  if (caixaFim == 0 && troco == 0) {
    resp.status = "CLOSED"
    resp.change = caixa
  } else if (caixaFim > 0 && troco == 0) {
    resp.status = "OPEN"
    resp.change = caixaMudaFinal
  } 


  
  
return resp
}

console.log(trocar(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
