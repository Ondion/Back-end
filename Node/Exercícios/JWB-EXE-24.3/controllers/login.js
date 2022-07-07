const users = require('../services/users');
const authe = require('../auth');
const { admin } = require('../models/fakeDB');

function login(request, response, next) {
  response.status(200).json({ message: "api ok" })
}

function auth(request, response, next) {
  const { username, password } = request.body;
  result = users.checkUser(username, password);

  if(result) {
    const payload = {
      username,
      admin: false,
      number: 13,
      admin: result.admin
    }
    return response.status(200).json({ token: authe.tokenGenerator(payload)})
  }

  return response.status(401).json( { message: "deu ruim!"});
}

module.exports = {
  login,
  auth
}