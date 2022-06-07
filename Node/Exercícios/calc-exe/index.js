const readline = require("readline-sync");

const valor1 = Number(readline.question("digite o primeiro valor: "));
const operador = readline.question("digite o operador: ");
const valor2 = Number(readline.question("digite o segundo valor: "));

switch (operador) {
  case "+":
    console.log(valor1 + valor2);
    break;
  case "-":
    console.log(valor1 - valor2);
    break;
  case "*":
    console.log(valor1 * valor2);
    break;
  case "/":
    console.log(valor1 / valor2);
    break;
  default:
    break;
}