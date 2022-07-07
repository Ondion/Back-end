const { tokenValidator } = require('../auth');

function validateUser(request, response, next) {
  const token = request.headers.authorization;
  try {
    const result = tokenValidator(token);
    if(!result) {
      throw Error()
    }
    request.payload = result;
    next()
  } catch (error) {
    return response.status(401).json({ message: "token inválido"})
  }
  next()
}

module.exports = validateUser;
