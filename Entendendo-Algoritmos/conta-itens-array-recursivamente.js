const contaNumeroDeItens = (lista) => {
  let primeiroItem = lista.shift();
  if (primeiroItem === undefined) return 0;
  return 1 + contaNumeroDeItens(lista);
};
const listaDeNumeros = [1, 0, 3, 4, 6];
console.log(contaNumeroDeItens(listaDeNumeros));
