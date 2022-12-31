const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Retorna apenas um número e posso passar qual será o valor inicial
// Percorre a lista, posição por posição, combinando/transformando em um único elementos
const somaTodosOsNumeros = lista.reduce((previous, current) => {
  return previous + current;
}, 0);

console.log(somaTodosOsNumeros);
