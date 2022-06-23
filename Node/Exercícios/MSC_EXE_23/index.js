const express = require('express');
const api = express();

api.use(express.json());

api.use(require('./routes'));

api.listen(321, () => {
  console.log('running on PORT: 321')
});
