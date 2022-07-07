const express = require('express');
const { User } = require('../models');
routes = express.Router();

routes.get('/', async (request, response, next) => {
  const users = await User.findAll();
  response.status(200).json({ message: users })
});

routes.get('/:id', async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findByPk(id);
  response.status(200).json({ message: user })
});

// routes.put('/:id', async (request, response, next) => {
//   const { id } = request.params;
//   const { email } = request.query;

//   const user = await User.findOne({ where: { id, email } })
//   response.status(200).json({ message: user })
// });

routes.put('/:id', async (request, response, next) => {
  const { id } = request.params;
  const { fullName, email } = request.body;

  const updateUser = await User.update(
    {fullName, email},
    {where: { id }},
  )
  response.status(200).json({ message: updateUser })
});

routes.delete('/:id', async (request, response, next) => {
  const { id } = request.params;

  const deletedUser = await User.destroy(
    {where: { id }},
  )
  response.status(200).json({ message: deletedUser })
});

routes.post('/', async (request, response, next) => {
  const { fullName, email, phone_num } = request.body;
  const newUser = await User.create({ fullName, email, phone_num })
  response.status(200).json({ message: newUser })
});


module.exports = routes;
