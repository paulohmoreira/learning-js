/* 
  A função verifica se a listaDeNumeros está vazia. 
  Se estiver, a função retorna o maiorValor atualizado com o maior 
  número encontrado até agora.
  Se a listaDeNumeros não estiver vazia, a função chama a si mesma recursivamente, 
  passando a listaDeNumeros a partir do segundo elemento (usando o método slice(1)), 
  juntamente com o maiorValor atualizado (que é o primeiro elemento da lista 
  se for maior do que o maiorValor atual).
  Quando a recursão termina e a listaDeNumeros estiver vazia, a função 
  retorna o maiorValor atualizado com o maior número encontrado.
*/
const encontrarMaiorValor = (listaDeNumeros, maiorValor = 0) => {
  return listaDeNumeros.length === 0
    ? maiorValor
    : encontrarMaiorValor(
        listaDeNumeros.slice(1),
        listaDeNumeros[0] > maiorValor ? listaDeNumeros[0] : maiorValor
      );
};

const listaDeNumeros = [12, 4, 6, 100];
console.log('Maior valor: ', encontrarMaiorValor(listaDeNumeros));
