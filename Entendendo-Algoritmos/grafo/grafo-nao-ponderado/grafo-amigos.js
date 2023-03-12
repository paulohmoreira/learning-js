/*
  Um grafo com pesos é chamado de grafo ponderado (ver exemplo na pasta 
  grafo-ponderado). Um grafo sem pesos é chamado grafo não ponderado.
  O exemplo nesse arquivo é um grafo não ponderado.

  Em caso de dúvidas, veja a representação em png do grafo dentro da pasta grafo-amigos.
*/
const grafo = {};

grafo['voce'] = ['alice', 'bob', 'claire'];
grafo['alice'] = ['peggy'];
grafo['bob'] = ['anuj', 'peggy'];
grafo['claire'] = ['thom', 'jonny'];
grafo['anuj'] = [];
grafo['peggy'] = [];
grafo['thom'] = [];
grafo['jonny'] = [];

// Acessando os 'vizinhos' dos vértices 'voce' e 'alice'.
console.log(grafo['voce']); // resultado ['alice', 'bob', 'claire']
console.log(grafo['alice']); // resultado ['peggy']

const grafoSintaxeReduzida = {
  voce: ['alice', 'bob', 'claire'],
  alice: ['peggy'],
  bob: ['anuj', 'peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

// Acessando os 'vizinhos' dos vértices 'voce' e 'alice'.
console.log(grafoSintaxeReduzida['voce']); // resultado ['alice', 'bob', 'claire']
console.log(grafoSintaxeReduzida['alice']); // resultado ['peggy']
