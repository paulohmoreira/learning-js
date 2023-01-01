const fs = require('fs');

const promiseArquivo = fs.promises.readFile('./promises/tarefas.csv');

promiseArquivo
  .then((arquivo) => {
    console.log(arquivo.toString('utf-8'));
  })
  .catch((error) => {
    console.log('Deu ruim!', error);
  });
