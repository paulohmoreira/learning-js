// Função construtora

/* function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome}`);
};

const paulo = new Pessoa('Paulo', 30);
console.log(paulo);
paulo.falar(); */

// Syntactic Sugar

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Meu nome é: ${this.nome}`);
  }
}

const paulo = new Pessoa('Paulo', 27);
console.log(paulo);
paulo.falar();
