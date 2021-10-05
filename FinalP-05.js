//FinalP-05
function caixa(precoCompra, pago, moedas) {
  let valores = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
 
  let troco = (pago - precoCompra).toFixed(2)
  var operacao = ""
  for (let i=valores.length-1; i>=0; i--) {
    // listar os valores padrões da moeda
    let valorPadrao = valores[i][1]
    // o caixa está distribuido conforme os valores padrões
    let indiceMoeda = valorPadrao
    console.log(`PASSAGEM ${i} ------------- ${valores[i][0]} CAIXA ${moedas[i][1]}`)
    //se o troco for maior que o valor padrão da passagem no laço
    if (troco > valorPadrao) {
      console.log(`Troco devido: ${troco}`)
      //ver quantas moedas da passagem pro máximo do troco
      let quantasMoedas = parseInt(troco/valorPadrao)
      console.log(`Retira ${quantasMoedas} moedas de ${valorPadrao} do caixa de ${moedas[i][1]}`)
      //retirada caixa que tinha, menos as moedas usadas
      moedas[i][1] -= quantasMoedas * valorPadrao
      console.log(`Sobra ${moedas[i][1]} do ${moedas[i][0]}`)
           
      operacao = parseInt(troco/valorPadrao)
      moedas[i][1] - parseInt(troco/valorPadrao) * valorPadrao
      troco -= (valorPadrao*operacao)
      console.log(`Troco devido: ${troco.toFixed(2)}`)
      
    }
  }
  
  console.log(moedas[3][1])
  return "FIM."
}
console.log(caixa(19.48, 20,
                  [["PENNY", 1.01],
                   ["NICKEL", 2.05],
                   ["DIME", 3.1],
                   ["QUARTER", 4.25],
                   ["ONE", 90],
                   ["FIVE", 55],
                   ["TEN", 20],
                   ["TWENTY", 60],
                   ["ONE HUNDRED", 100]]))
