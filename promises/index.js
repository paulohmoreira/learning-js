const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'tarefas.csv');

const promiseArquivo = fs.promises.readFile(filePath);

promiseArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
  .then((linhasSemCabecalho) =>
    linhasSemCabecalho.map((linha) => {
      const [nome, feito] = linha.split(';');
      return {
        nome,
        feito: feito.trim() === 'true',
      };
    })
  )
  .then((listaDeTarefas) => console.log(listaDeTarefas))
  .catch((error) => console.log('Deu ruim!', error));
