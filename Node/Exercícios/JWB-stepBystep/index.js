// Exemplo de uso do JWT
// Usamos o "npm install jsonwebtoken" para instalar as dependências.

const jwt = require('jsonwebtoken');

const secret = "senha";
const fakeSecret = "Senha";

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

user = {
  valores: "valores dentro do data/user",
  constantes: "const dentro do data/user"
}

fakeUser = {
  valores: "valores dentro do data/user",
  constantes: "const dentro do data/user"
}



const token = jwt.sign({ ...user }, secret, jwtConfig);

const fakeToken = jwt.sign({ ...fakeUser }, fakeSecret, jwtConfig);

const decoded = jwt.verify(fakeToken, secret);

console.log("\n\n", "Token gerado Criptografado: >>>>", token, '\n\n', 'Token descriptogradafo: >>>>>', decoded)



