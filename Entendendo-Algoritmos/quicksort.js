/*
  O algoritmo Quicksort é um algoritmo de ordenação que segue o paradigma de 
  dividir e conquistar. A ideia básica é escolher um elemento da lista, 
  chamado de pivô, e dividir a lista em duas partes: uma parte com elementos 
  menores que o pivô e outra parte com elementos maiores que o pivô. 
  Em seguida, aplica-se recursivamente o Quicksort nas duas partes.

  O algoritmo começa verificando se a lista tem menos de dois elementos. 
  Se sim, retorna a lista (pois não precisa ordená-la). 
  Caso contrário, o algoritmo escolhe o primeiro elemento da lista como 
  pivô e cria duas novas listas: uma com todos os elementos menores que o 
  pivô e outra com todos os elementos maiores que o pivô. 
  Em seguida, chama recursivamente o Quicksort nas duas novas listas e 
  concatena os resultados com o pivô.
*/

const quicksort = (lista) => {
  if (lista.length < 2) return lista;
  else {
    let pivo = lista[0];
    let novaLista = lista.slice(1);
    let menores = [],
      maiores = [];

    for (let i = 0; i < novaLista.length; i++) {
      if (novaLista[i] < pivo) menores.push(novaLista[i]);
      if (novaLista[i] > pivo) maiores.push(novaLista[i]);
    }

    return quicksort(menores).concat(pivo, quicksort(maiores));
  }
};

const lista = [10, 5, 2, 3];
console.log('Lista ordenada: ', quicksort(lista));
