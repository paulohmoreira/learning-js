/* 
  O construtor Set é usado para criar um novo objeto de conjunto com elementos
   únicos. Neste caso, ele recebe o array e o 
   converte de volta para um conjunto.
*/
let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {};
stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  for (let station in stations) {
    const states = stations[station];
    /*
      .filter((x) => states.has(x)): Esta é uma função de array que cria um 
      novo array com todos os elementos que passam em um teste específico. 
      Neste caso, ele verifica se um estado x está presente no conjunto states 
      da estação atual. A função .has() verifica se o conjunto contém um 
      elemento específico e retorna true se sim, false caso contrário.
    */
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }
  statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)));
  finalStations.add(bestStation);
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
