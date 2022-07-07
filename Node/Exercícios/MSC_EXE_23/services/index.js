const connection = require('../database');

async function apiUpTests() {
  const result = await connection.getConnection();
  return result && result.connection.config.host;
}

module.exports = apiUpTests
