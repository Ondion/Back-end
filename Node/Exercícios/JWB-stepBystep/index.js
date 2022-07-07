// Exemplo de uso do JWT
// Usamos o "npm install jsonwebtoken" para instalar as dependências.

const jwt = require('jsonwebtoken');

const secret = "senha";
const fakeSecret = "senha";

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

user = {
  valores: "valores dentro do data/user",
  constantes: "const dentro do data/user"
}

// fakeUser = {
//   valores: "valores dentro do data/user",
//   constantes: "const dentro do data/user"
// }

fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxvcmVzIjoidmFsb3JlcyBkZW50cm8gZG8gZGF0YS91c2VyIiwiY29uc3RhbnRlcyI6ImNvbnN0IGRlbnRybyBkbyBkYXRhL3VzZXIiLCJpYXQiOjE2NTYzNDYxNjEsImV4cCI6MTY1Njk1MDk2MX0.JRrjKycJrfHf390iSJ25B_HGzJ3qBdVz8Nek2Cu8V4E"

const token = jwt.sign({ ...user }, secret, jwtConfig);

// const fakeToken = jwt.sign({ ...fakeUser }, fakeSecret, jwtConfig);

const decoded = jwt.verify(fakeToken, secret);

console.log("\n\n", "Token gerado Criptografado: >>>>", token, '\n\n', 'Token descriptogradafo: >>>>>', decoded)



