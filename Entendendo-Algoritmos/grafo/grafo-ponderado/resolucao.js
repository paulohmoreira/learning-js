const grafo = {
  inicio: { a: 6, b: 2 },
  a: { fim: 1 },
  b: { a: 3, fim: 5 },
  fim: {},
};

const pais = {
  a: 'inicio',
  b: 'inicio',
  fim: null,
};

const custos = {
  a: 6,
  b: 2,
  fim: Infinity,
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
console.log(pais);
