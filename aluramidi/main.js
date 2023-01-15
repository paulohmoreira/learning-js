function playSound(keyId) {
  document.querySelector(keyId).play();
}

const keyList = document.querySelectorAll('.tecla');

let i = 0;
while (i < keyList.length) {
  const key = keyList[i];
  const keyClass = key.classList[1];
  const keyId = `#som_${keyClass}`;

  key.onclick = () => {
    playSound(keyId);
  };
  i++;
}
