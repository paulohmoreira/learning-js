const grafo = {
  livro: { lpRaro: 5, poster: 0 },
  lpRaro: { baixo: 15, bateria: 20 },
  poster: { bateria: 35, baixo: 30 },
  baixo: { piano: 20 },
  bateria: { piano: 10 },
  piano: {},
};

// Acessando os 'vizinhos' de cada vértice
console.log(Object.keys(grafo['livro'])); // resultado ['lpRaro', 'poster']
console.log(Object.keys(grafo['lpRaro'])); // resultado ['baixo', 'bateria']
console.log(Object.keys(grafo['poster'])); // resultado ['bateria', 'baixo']
console.log(Object.keys(grafo['baixo'])); // resultado ['piano']
console.log(Object.keys(grafo['bateria'])); // resultado ['piano']
console.log(Object.keys(grafo['piano'])); // resultado []

// Acessando o peso da aresta que livro --> lpRaro
console.log(grafo['livro']['lpRaro']); // resultado 5
console.log(grafo['livro']['poster']); // resultado 0
