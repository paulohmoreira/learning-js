/*
  A função começa verificando se a lista está vazia. Se for o caso, ela retorna 
  o valor 0. Caso contrário, ela soma o primeiro elemento da lista com o 
  resultado da chamada recursiva da função somaRecursiva() na lista restante 
  (ou seja, a lista sem o primeiro elemento).
*/
const somaRecursiva = (listaDeNumeros) => {
  // Verificar se a lista está vazia. Se for o caso retorna o valor 0.
  if (listaDeNumeros.length === 0) return 0;
  return listaDeNumeros[0] + somaRecursiva(listaDeNumeros.slice(1));
};

const listaDeNumeros = [1, 2, 3, 4];
console.log(somaRecursiva(listaDeNumeros));
