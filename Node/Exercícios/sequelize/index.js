const express = require('express');
app = express();

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => console.log('first...'));