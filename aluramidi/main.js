function playSound(keyId) {
  document.querySelector(keyId).play();
}

const keyList = document.querySelectorAll('.tecla');

// Refatorado utilizando for
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  const keyClass = key.classList[1];
  const keyId = `#som_${keyClass}`;

  key.onclick = () => {
    playSound(keyId);
  };

  key.onkeydown = (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      key.classList.add('ativa');
    }
  };
  key.onkeyup = () => {
    key.classList.remove('ativa');
  };
}

// Utilizando while
// let i = 0;
// while (i < keyList.length) {
//   const key = keyList[i];
//   const keyClass = key.classList[1];
//   const keyId = `#som_${keyClass}`;

//   key.onclick = () => {
//     playSound(keyId);
//   };
//   i++;
// }
