const express = require('express');
const routes = express.Router();
const login = require('../controllers/login');
const users = require('../controllers/users');


// login routes
routes.get('/login', login.login);
routes.post('/login', login.auth);

// users routes
routes.get('/users/me', users.getUser);

module.exports = routes;
