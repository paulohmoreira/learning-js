function playSound() {
  document.querySelector('#som_tecla_pom').play();
}

const pom = document.querySelector('.tecla_pom');
const clap = document.querySelector('.tecla_clap');
const tim = document.querySelector('.tecla_tim');
const puff = document.querySelector('.tecla_puff');
const splash = document.querySelector('.tecla_splash');
const toim = document.querySelector('.tecla_toim');
const psh = document.querySelector('.tecla_psh');
const tic = document.querySelector('.tecla_tic');
const tom = document.querySelector('.tecla_tom');
pom.onclick = playSound;
clap.onclick = playSound;
tim.onclick = playSound;
puff.onclick = playSound;
splash.onclick = playSound;
toim.onclick = playSound;
psh.onclick = playSound;
tic.onclick = playSound;
tom.onclick = playSound;
