const somaRecursiva = (listaDeNumeros) => {
  // Verificar se a lista está vazia. Se for o caso retorna o valor 0.
  if (listaDeNumeros.length === 0) return 0;

  // Fazer uma cópia do array original.
  let copiaListaDeNumeros = listaDeNumeros.slice();

  /*
    Verifica se a lista tem um único elemento.
    Se for o caso, a função retorna o único elemento da lista.
    Caso contrário, a função remove o primeiro elemento da lista com o método 
    shift(), adiciona-o à soma dos elementos restantes da lista, que é 
    calculada chamando recursivamente a função soma() na lista atualizada.
  */
  if (copiaListaDeNumeros.length === 1) return copiaListaDeNumeros[0];
  else {
    let primeiroNumero = copiaListaDeNumeros.shift();
    return primeiroNumero + somaRecursiva(copiaListaDeNumeros);
  }
};

const listaDeNumeros = [1, 2, 3, 4];
console.log(somaRecursiva(listaDeNumeros));
