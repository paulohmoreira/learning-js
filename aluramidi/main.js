function playSound() {
  document.querySelector('#som_tecla_pom').play();
}

const key = document.querySelector('.tecla_pom');
key.onclick = playSound;
