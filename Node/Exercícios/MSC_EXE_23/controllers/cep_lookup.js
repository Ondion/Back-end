const ceps = require('../services/ceps');

async function search(request, response, next) {
  const { cep } = request.params;
  const result = await ceps.searchCep(cep);
  if(!result) return response.status(404).json({ message: "not found!" });
  response.status(404).json({result});
  next();
}

async function addCep(request, response, next) {
  const { cep, logradouro, bairro,
    localidade, uf } = request.body;

  const teste = await ceps.addCep(cep, logradouro, bairro,
    localidade, uf );

  console.log(teste);

  response.status(201).json({ message: "was created!" })
  
}



module.exports = {
  search,
  addCep
};
