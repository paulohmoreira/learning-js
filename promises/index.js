const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'tarefas.csv');

const promiseArquivo = fs.promises.readFile(filePath);

promiseArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((texto) => console.log(texto))
  .catch((error) => console.log('Deu ruim!', error));
