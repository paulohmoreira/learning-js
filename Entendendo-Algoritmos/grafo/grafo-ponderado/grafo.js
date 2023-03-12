/*
  Um modelo de grafo é um conjunto de conexões. Grafos são formados por 
  vértices e arestas, e um vértice pode ser diretamente conectado a muitos 
  outros vértices, por isso os chamamos de vizinhos.
  Neste grafo, 'inicio' é vizinho de 'a' e 'b'. Já o 'a' é vizinho de 'fim', 
  mas não é vizinho de 'inicio', pois eles não estão diretamente conectados.
  Em caso de dúvidas, veja a representação em png do grafo dentro da pasta grafo-ponderado.
*/

const grafo = {};

grafo['inicio'] = {};
grafo['inicio']['a'] = 6;
grafo['inicio']['b'] = 2;

grafo['a'] = {};
grafo['a']['fim'] = 1;

grafo['b'] = {};
grafo['b']['a'] = 3;
grafo['b']['fim'] = 5;

grafo['fim'] = {};

// Acessando os 'vizinhos' de cada vértice
console.log(Object.keys(grafo['inicio'])); // resultado ['a', 'b']
console.log(Object.keys(grafo['a'])); // resultado ['fim']
console.log(Object.keys(grafo['b'])); // resultado ['a', 'fim']

// Acessando o peso da aresta que início --> a
console.log(grafo['inicio']['a']); // resultado 6

// Sintaxe reduzida utilizando a notação de objetos literais em JavaScript
const grafoSintaxeReduzida = {
  inicio: { a: 6, b: 2 },
  a: { fim: 1 },
  b: { a: 3, fim: 5 },
  fim: {},
};

// Acessando os 'vizinhos' do vértice 'inicio'
console.log(Object.keys(grafoSintaxeReduzida['inicio'])); // resultado ['a', 'b']
