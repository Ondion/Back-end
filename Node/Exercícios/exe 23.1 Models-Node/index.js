const { json } = require('express');
const express = require('express');
const api = express();

api.use(express.json());
api.use(require('./routes'));

api.listen(5000, () => {
  console.log("first")
});
