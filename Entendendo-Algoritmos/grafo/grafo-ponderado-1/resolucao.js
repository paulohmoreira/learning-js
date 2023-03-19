const grafo = {
  livro: { lp: 5, poster: 0 },
  lp: { baixo: 15, bateria: 20 },
  poster: { bateria: 35, baixo: 30 },
  baixo: { piano: 20 },
  bateria: { piano: 10 },
  piano: {},
};

const pais = {
  lp: 'livro',
  poster: 'livro',
  baixo: null,
  bateria: null,
  piano: null,
};

const custos = {
  lp: 5,
  poster: 0,
  baixo: Infinity,
  bateria: Infinity,
  piano: Infinity,
};

let processados = [];

/**
 * Ache o menor custo
 * @param {Object} custos Tabela Hash
 * @returns {(string|null)} Vértice de menor custo
 */
const acheCustoMaisBaixo = (custos) => {
  let custoMaisBaixo = Infinity;
  let verticeMaisBaixo = null;

  for (let vertice in custos) {
    let custo = custos[vertice];
    if (custo < custoMaisBaixo && processados.indexOf(vertice) === -1) {
      custoMaisBaixo = custo;
      verticeMaisBaixo = vertice;
    }
  }
  return verticeMaisBaixo;
};

const dijkstra = (grafo, custos, pais) => {
  let vertice = acheCustoMaisBaixo(custos);

  while (vertice !== null) {
    let custo = custos[vertice];
    let vizinhos = grafo[vertice];

    Object.keys(vizinhos).forEach(function (n) {
      const novoCusto = custo + vizinhos[n];

      if (custos[n] > novoCusto) {
        custos[n] = novoCusto;

        pais[n] = vertice;
      }
    });

    processados = processados.concat(vertice);
    vertice = acheCustoMaisBaixo(custos);
  }
};

dijkstra(grafo, custos, pais);

console.log(custos);
