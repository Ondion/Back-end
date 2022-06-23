const connection = require('../database');

async function searchCep(cep) {
  const query = 'SELECT * FROM ceps WHERE cep = ?;'
  const [result, thrash] = await connection.execute(query, [cep]);
  return result[0];
}

async function addCep(cep, logradouro, bairro, localidade, uf) {
  console.log(cep, logradouro, bairro, localidade, uf)
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?) IF NOT EXISTS ceps.cep like ?;'
  return await connection.execute(query, [cep, logradouro, bairro, localidade, uf, cep]);
}

module.exports = {
  searchCep,
  addCep
};
