const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = e.target.elements['nome'].value;
  let quantidade = e.target.elements['quantidade'].value;

  criaElemento(nome, quantidade);
});

function criaElemento(nome, quantidade) {
  console.log(nome, quantidade);

  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}
