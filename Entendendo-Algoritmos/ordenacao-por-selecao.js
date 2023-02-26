/*
  Esse algoritmo é chamado de ordenação por seleção (Selection Sort, em inglês) 
  e tem como objetivo ordenar um array de números em ordem crescente 
  (ou decrescente).

  O algoritmo de ordenação por seleção é de complexidade O(n²) no pior caso, 
  sendo pouco eficiente para ordenar grandes quantidades de dados. No entanto, 
  é um algoritmo simples de entender e implementar e pode ser útil em algumas 
  situações específicas em que o desempenho não é uma preocupação.
*/

const buscaMenor = (array) => {
  let menor = array[0];
  let menorIndice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      menorIndice = i;
    }
  }
  return menorIndice;
};

const ordenacaoPorSelecao = (array) => {
  let arrayOrdenado = [];
  /* 
    Armazena cópia do array original. Dessa forma, a função pode 
    modificar o cloneArray sem afetar o array original 
  */
  let cloneArray = array.slice();

  for (let i = 0; i < array.length; i++) {
    let menorIndice = buscaMenor(cloneArray);
    /* 
      O arrayOrdenado é preenchido com os elementos removidos do cloneArray, 
      o resultado final é um novo array ordenado, enquanto o array original 
      permanece inalterado.
    */
    arrayOrdenado.push(cloneArray.splice(menorIndice, 1)[0]);
  }
  return arrayOrdenado;
};

const arrayOriginal = [5, 3, 6, 2, 10];

console.log('Array original: ', arrayOriginal);
console.log('Array ordenado: ', ordenacaoPorSelecao(arrayOriginal));
