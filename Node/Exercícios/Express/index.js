const express = require('express');

const app = express();

app.get('/', handleFunction);

app.listen(81, () => {
  console.log("dentro da função listen na porta 81");
})

function handleFunction(req, res) {
  res.status(200).send('enviou de dentro da handlefunction como res.status(81)');
}

