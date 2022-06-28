const express = require('express');
const routes = express.Router();

const validateUser = require('../middlewares/auth')
const validateSecret = require('../middlewares/secret');

const login = require('../controllers/login');
const users = require('../controllers/users');


// login routes
routes.get('/login', login.login);
routes.post('/login', login.auth);

// users routes
routes.get('/users/me', validateUser, users.getUser);

// SECRET route
routes.get('/secret', validateUser, validateSecret, users.secret)

module.exports = routes;
