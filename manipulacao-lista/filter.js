const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaDeNumerosPares = lista.filter((elemento) => {
  return elemento % 2 === 0;
});

// console.log(listaDeNumerosPares);

let lista2 = [];

lista.forEach((elemento, i) => {
  if (elene) elemento % 2 === 0 ? (lista2 = elemento) : '';
});

console.log(lista2);

// Diferença do filter e forEach:
// No filter, a função percorre o array e devolve uma lista nova.
// No forEach, a função só percorre o array
