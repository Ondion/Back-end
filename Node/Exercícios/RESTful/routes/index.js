const express = require('express');
const routes = express.Router();

const productController = require('../controllers/productController');

routes.get('/', productController.sayHello)

routes.get('/products',  );

module.exports = routes;