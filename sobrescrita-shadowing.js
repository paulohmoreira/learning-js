const pessoa = {
  idade: 18,
};

const paulo = {
  nome: 'paulo',
  // Sobrescrita
  idade: 27,
  __proto__: pessoa,
};

console.log(paulo.idade);
