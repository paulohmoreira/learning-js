const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// lista.forEach((value, i, listRef) => {
//   console.log(value + i);
// });

// Output com forEach:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// Por baixo dos panos

const cb = (value, i, listRef) => {
  console.log(value + i);
};

for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  cb(element, i, lista);
}
