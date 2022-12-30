class Pessoa {
  constructor(nome) {
    this.name = nome;
  }
}

const lista = [new Pessoa('Paulo'), new Pessoa('Nathaly'), new Pessoa('Agnes')];

console.log(lista);

// const listaNomes = [];

// for (let i = 0; i < lista.length; i++) {
//   const element = lista[i];
//   listaNomes.push(element.name);
// }

// console.log(listaNomes);

const listaNomes = lista.map((element) => element.name);

console.log(listaNomes);
