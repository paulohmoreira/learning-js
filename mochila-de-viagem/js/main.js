const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((element) => criaElemento(element));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = e.target.elements['nome'];
  let quantidade = e.target.elements['quantidade'];

  const existe = itens.find((element) => element.nome === nome.value);

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[existe.id] = itemAtual;
  } else {
    itemAtual.id = itens.length;

    criaElemento(itemAtual);

    itens.push(itemAtual);
  }

  localStorage.setItem('itens', JSON.stringify(itens));

  nome.value = '';
  quantidade.value = '';
});

function criaElemento(item) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numeroItem = document.createElement('strong');
  numeroItem.innerHTML = item.quantidade;
  numeroItem.dataset.id = item.id;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}

function atualizaElemento(item) {
  document.querySelector('[data-id="' + item.id + '"]').innerHTML =
    item.quantidade;
}