const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || "senhaMágica";

function tokenGenerator(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256'
  });
}

function tokenValidator(token) {
  return jwt.verify(token, SECRET, {
    algorithms: 'HS256'
  });
}

module.exports = {
  tokenGenerator,
  tokenValidator
}
