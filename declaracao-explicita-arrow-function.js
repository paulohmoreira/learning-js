// Declaração de função explícita
function funcao1() {
  console.log(this);
}

// Arrow function
const funcao2 = () => {
  console.log(this);
};

// Testando diferenças
const paulo = {
  nome: 'Paulo',
  funcao1,
  funcao2,
};

paulo.funcao1();
paulo.funcao2();
