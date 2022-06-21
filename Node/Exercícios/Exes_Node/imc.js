const rs = require("readline-sync");

const altura = rs.questionFloat("altura: ");
const peso = rs.questionFloat("peso: ");

const imc = peso / Math.pow(altura, 2);

let categoria = 0;

switch (imc) {
  case 0:
    categoria = "Erro, valor de calculo zero!"
    break;

  case imc <= 18.5:
    categoria = "Situação: Abaixo do peso (magreza)"
    break;

  case imc >= 18.5 && imc < 25:
    categoria = "Situação: Peso normal"
    break;

  case imc >= 25 && imc < 30:
    categoria = "Situação: Acima do peso (sobrepeso)"
    break;

  case imc >= 30 && imc < 35:
    categoria = "Situação: Obesidade grau I"
    break;

  case imc >= 35 && imc < 40:
    categoria = "Situação: Obesidade grau II"
    break;

  case imc >= 40:
    categoria = "Situação: Obesidade graus III e IV"
  break;

  default:
    throw new Error("Deu ruim!");
}


console.log(`Seu IMC é ${imc} e sua ${categoria}`);