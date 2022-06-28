function validateSecret(request, response, next) {
  const { admin } = request.payload;
  console.log(admin)
  if(admin) {
    next();
  }
  return response.status(401).json();
}

module.exports = validateSecret;
