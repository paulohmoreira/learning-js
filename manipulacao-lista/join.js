const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaDeObjetos = [
  { nome: 'Paulo' },
  { nome: 'Nathaly' },
  { nome: 'Agnes' },
];

// join(): Não tem nenhum separador | join(''): separa por vírgula
console.log(listaDeNumeros.join());

const listaDeNomes = listaDeObjetos.map((e) => e.nome).join(' - ');
console.log(listaDeNomes);
