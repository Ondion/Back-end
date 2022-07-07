const ceps = require('../models/ceps'); 

async function searchCep(cep) {
  result = await ceps.searchCep(cep); 

  if(result && result.length != 0) {
    return result;
  }
  return null;
}

async function addCep(cep, logradouro, bairro,
  localidade, uf) {
  return await ceps.addCep(cep, logradouro, bairro,
    localidade, uf)
}


module.exports = {
  searchCep,
  addCep
};
