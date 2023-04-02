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
  const mensagemErro = document.querySelector('#erro');
  mensagemErro.innerHTML = '';

  try {
    const cosultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaConvertida = await cosultaCEP.json();
    if (consultaConvertida.erro) throw Error('CEP não existente!');

    const cidade = document.querySelector('#cidade');
    const logradouro = document.querySelector('#endereco');
    const estado = document.querySelector('#estado');
    console.log('🚀 ~ buscaEndereco ~ consultaConvertida:', consultaConvertida);

    cidade.value = consultaConvertida.localidade;
    logradouro.value = consultaConvertida.logradouro;
    estado.value = consultaConvertida.uf;

    return consultaConvertida;
  } catch (error) {
    mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`;
    console.log(error);
  }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
