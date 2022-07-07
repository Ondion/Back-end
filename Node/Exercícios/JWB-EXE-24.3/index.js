const express = require('express');
require('dotenv').config({ path: "/home/xavier/GitHub/Back-end/Node/Exercícios/JWB-EXE-24.3/.env" });

const api = express();

api.use(express.json());
api.use(require('./routes'));

api.listen(3000, () => {
  console.log('rodando...');
});
