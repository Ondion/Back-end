const rs = require("readline-sync");

const distancia = rs.questionInt("distancia: ");
const tempo = rs.questionInt("tempo: ");

console.log(`velocidade média: ${distancia / tempo}m/s`)
