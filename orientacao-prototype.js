const pessoa = {
  genero: 'masculino',
};

const paulo = {
  nome: 'paulo',
  idade: 30,
  __proto__: pessoa,
};

console.log(paulo.genero);
