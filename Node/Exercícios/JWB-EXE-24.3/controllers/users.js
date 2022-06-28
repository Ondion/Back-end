function getUser(request, response, next) {
  response.status(200).json(request.payload)
}

function secret(request, response, next) {
  response.status(200).json({ message: "segredo secreto!"});
}

module.exports = {
  getUser,
  secret
}