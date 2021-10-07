const moedas = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
function trocar(compra, pago, carteira) {
  let resp
  let troco = pago - compra
  let modificados = []
let carteiraOrigem = [carteira.slice()]
  console.log(`Troco devido: ${troco}`)
  for (let i = moedas.length-1; i>=0; i--) {

    
    while (troco >= moedas[i][1] && carteira[i][1] >= moedas[i][1]) {

      console.log(`${moedas[i][1]} retirados de ${carteira[i]}.`)
      troco -= moedas[i][1]
      //tira a moeda da vez da carteira
      carteira[i][1] -= moedas[i][1]
      console.log(`Atualizado: ${carteira[i]}. Falta dar troco de ${troco}`)

    
    }
    
  }
  resp = {status: "OK", change: []}
  console.log(resp)
  console.log("carteira origem --->"+carteiraOrigem)
  console.log("carteira final --->"+carteira)
  

}

console.log(trocar(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
