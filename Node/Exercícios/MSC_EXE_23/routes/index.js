const express = require('express');
const routes = express.Router();
const cepValidation = require('../middlewares/cepValidation');
const cep_lookup = require('../controllers/cep_lookup');


routes.get('/', require('../controllers'));

routes.get('/cep/:cep', cepValidation, cep_lookup.search );

routes.post('/cep', cep_lookup.addCep);

module.exports = routes;
