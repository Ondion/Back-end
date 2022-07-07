require('dotenv').config();
const PORT = process.env.LOCAL_PORT || 4321;

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`PORT: ${PORT} - running and listening...`);
});
