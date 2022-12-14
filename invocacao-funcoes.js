function teste() {
  console.log('teste');
}

// Invocação direta
teste();

const pessoa = {
  nome: 'Paulo',
  idade: 27,
};

function gritar(prefixo) {
  console.log(prefixo, this.nome);
}

// Apply
gritar.apply(pessoa, ['Olaaaaaa!']);

// Call
gritar.call(pessoa, 'Olaaaaaa!');
