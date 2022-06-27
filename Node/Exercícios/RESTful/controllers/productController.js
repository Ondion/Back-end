const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();

function sayHello(request, response, next) {
  return response.status(200).json({ message: "Hello!" });
}

async function getProducts(request, response, next) {
  const products = await ProductModel.getAll();
  response.status(200).json(products);
};

router.get('/get-by-id/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = {
  sayHello
};