const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'tarefas.csv');

const promiseArquivo = fs.promises.readFile(filePath);

promiseArquivo
  .then((arquivo) => {
    console.log(arquivo.toString('utf-8'));
  })
  .catch((error) => {
    console.log('Deu ruim!', error);
  });
