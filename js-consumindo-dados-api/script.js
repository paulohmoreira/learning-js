// Callback Hell
// const cosultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//   .then((resposta) => resposta.json())
//   .then((r) => {
//     if (r.erro) throw Error('Esse cep não existe!');
//     else console.log(r);
//   })
//   .catch((erro) => console.log(erro))
//   .finally((mensagem) => console.log('Processamento concluído'));

// Async e await
async function buscaEndereco(cep) {
  try {
    const cosultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await cosultaCEP.json();
    if (consultaConvertida.erro) throw Error('CEP não existente!');
    console.log(consultaConvertida);
    return consultaConvertida;
  } catch (error) {
    console.log(error);
  }
}

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
