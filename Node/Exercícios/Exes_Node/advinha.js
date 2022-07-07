const rs = require("readline-sync");

let tentativas = 6;
const numeroSorteado = Math.floor(Math.random() * 11);
while(tentativas !== 0) {
  if(numeroSorteado === rs.questionInt("De 0 a 10, advinhe o número: ")) {
    console.log("Acertou Miserável")
    break
  }
  tentativas -= 1;
  tentativas !== 0 &&
    console.log("Não! Errou! Você ainda tem", tentativas, "tentativas...")
}