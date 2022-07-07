const rs = require("readline-sync");

switch (rs.questionInt("Escolha seu Script:\n1 - IMC\n2 - Velocidade média\n3 - Advinhas\n4 - Fatorial\n5 - Fibonacci\n")) {
  case 1:
    require("./imc");
  case 2:
    require('./velocidadeMedia');
  case 3:
    require('./advinha');
  case 4:
    require('./fatorial');
  case 5:
    require('./fibonacci');
  default:
    break;
}
