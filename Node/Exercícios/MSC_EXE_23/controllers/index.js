const apiUpTests = require('../services');

async function welcome(request, response, next) {
  const apiStatus = await apiUpTests();
  return response.status(200).json({
    message: "API UP",
    database: apiStatus || "Down" 
  })
}

module.exports = welcome;
