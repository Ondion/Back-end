const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function tokenGenerator(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256'
  });
}

function tokenValidator(token) {
  
}

module.exports = {
  tokenGenerator
}
