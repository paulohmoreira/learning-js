const grafo = {};

grafo['você'] = ['alice', 'bob', 'claire'];
grafo['alice'] = ['peggy'];
grafo['bob'] = ['anuj', 'peggy'];
grafo['claire'] = ['thom', 'jonny'];
grafo['anuj'] = [];
grafo['peggy'] = [];
grafo['thom'] = [];
grafo['jonny'] = [];

/**
 * Determina se a pessoa é um vendedor de manga
 * @param {string} name Nome do amigo
 * @returns {boolean} Resultado da checagem
 */
const pessoaEhVendedor = (nome) => {
  return nome[nome.length - 1] === 'm';
};

/**
 * Encontrar o vendedor de manga
 * @param {string} name Nome do amigo
 * @returns {boolean} Resultado da pesquisa
 */
const pesquisaEmLargura = (nome) => {
  let filaDePesquisa = [];
  filaDePesquisa = filaDePesquisa.concat(grafo[nome]);

  // Este array é como você controla quais pessoas você pesquisou antes.
  const pessoasVerificadas = [];

  while (filaDePesquisa.length) {
    // Pega a primeira pessoa da fila (FIFO)
    let pessoa = filaDePesquisa.shift();
    /* 
     Antes de verificar uma pessoa, é importante conferir se ela 
     ainda não foi verificada 
     */
    if (pessoasVerificadas.indexOf(nome) === -1) {
      if (pessoaEhVendedor(pessoa)) {
        console.log(pessoa, ' é um vendedor de manga!');
        return true;
      }

      filaDePesquisa = filaDePesquisa.concat(grafo[pessoa]);

      // Marcando a pessoa de pesquisa atual como verificada
      pessoasVerificadas.push(pessoa);
    }
  }
  return false;
};

pesquisaEmLargura('você'); // thom é o vendedor de manga!
