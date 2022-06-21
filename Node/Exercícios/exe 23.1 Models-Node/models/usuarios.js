const connection = require('./connection');

async function createUser(nome, idade) {
  return await connection.execute("INSERT INTO usuarios (`nome`, `idade`) VALUES (?, ?);", [nome, idade]);
}

async function readUser(id) {
  return await connection.execute("SELECT * FROM usuarios WHERE usuarios.id = ?;", [id]);
}

async function updateUser(id, nome, idade) {
  return await connection.execute("UPDATE usuarios SET nome = ?, idade = ? WHERE id = ?;", [nome, idade, id]);
}

async function deleteUser(id) {
  return await connection.execute("DELETE FROM usuarios WHERE id = ?;", [id]);
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
