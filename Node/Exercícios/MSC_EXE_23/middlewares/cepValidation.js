const cepRegex = /\d{5}-?\d{3}/;

function cepValidation(request, response, next) {
  const { cep } = request.params;
  const cepIsValid = cepRegex.test(cep);
  if(!cepIsValid) return response.status(400).json({ message: "CEP inválido" })
  next()
}

module.exports = cepValidation;
