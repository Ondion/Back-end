const fetch = require('node-fetch');

async function viaCepSearch(cep) {
  const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await result.json();
  return data;
}

module.exports = viaCepSearch;