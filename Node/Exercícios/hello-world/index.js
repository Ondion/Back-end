const readline = require("readline-sync");
console.log("Hello World!");


const name = readline.question("digite seu nome: ");
const idade = readline.question("digite sua idade: ");

console.log(`Olá ${name} que tem ${idade} anos!`);