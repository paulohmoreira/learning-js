// Function Declaration
function nomeDaFuncao() {
  console.log('nomeDaFuncao');
}

// Function Expression
const nomeOutraFuncao = function () {
  console.log('nomeOutraFuncao');
};

// A grande diferença nesses dois métodos é o hoisting
// Com o método declaration é possível fazer o hoisting e da segunda forma não

nomeDaFuncao();
nomeOutraFuncao();
