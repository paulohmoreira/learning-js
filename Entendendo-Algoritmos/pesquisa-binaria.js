/* 
  O algoritmo começa definindo as posições baixa e alta na lista, 
  correspondentes ao início e ao fim da lista, respectivamente.
  Em seguida, ele calcula o índice do elemento do meio e verifica se o item
  buscado é igual a este elemento. Se for, o algoritmo retorna o índice deste elemento.
  Caso contrário, ele verifica se o item buscado é menor ou maior que o elemento
  do meio e, em seguida, atualiza a posição de baixo ou alta, respectivamente.
*/
const pesquisaBinaria = (lista, item) => {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    // Arredonda para baixo caso o resultado da divisão não seja um número inteiro
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) return meio;
    if (chute > item) alto = meio - 1;
    else baixo = meio + 1;
  }
};

// A pesquisa binária só funciona quando a lista está ordenada
const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Posição do item: ', pesquisaBinaria(minhaLista, 3));
