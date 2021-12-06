const express = require('express');
const root = require('../controller/root');
const error = require('../midlleware/error');

const app = express();

app.use(express.json());

app.use('/', root);
app.use(error);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});

// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
