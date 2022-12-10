const pessoa = {
  genero: 'masculino',
};

const paulo = {
  nome: 'Paulo',
  // Primeira forma do object literals no JS
  __proto__: pessoa,
};

// Segunda forma
const agnes = Object.create(pessoa);
agnes.nome = 'Agnes';

console.log(agnes.genero);
