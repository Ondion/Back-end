const { request, response } = require('express');
const express = require('express');
const routes = express.Router();
const usuarios = require('../models/usuarios');

routes.post('/', async (request, response, next) => {
  const { nome, idade } = request.body;
  const result = await usuarios.createUser(nome, Number(idade));
  result[0].insertId ?
  response.status(201).json({ok: "ok, gravou!"}) :
  response.status(500).json({ok: "deum ruim!"})

});

routes.get('/:id', async (request, response, next) => {
  const { id } = request.params;
  const result = await usuarios.readUser(id);
  // result[0].insertId ?
  response.status(201).json(result[0]);
  // response.status(500).json({ok: "deum ruim!"})
});

routes.put('/', async (request, response, next) => {
  const { id, nome, idade } = request.body;
  const result = await usuarios.updateUser(Number(id), nome, Number(idade));
  // result[0].insertId ?
  response.status(201).json({ok: "ok, gravou!"});
  // response.status(500).json({ok: "deum ruim!"})
});

routes.delete('/', async (request, response, next) => {
  const { id } = request.body;
  const result = await usuarios.deleteUser(Number(id));
  // result[0].insertId ?
  response.status(201).json({ok: "ok, gravou!"});
  // response.status(500).json({ok: "deum ruim!"})
});

module.exports = routes;