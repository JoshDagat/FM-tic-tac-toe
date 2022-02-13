const startMenu = document.querySelector(".start-menu");
const mainGame = document.querySelector(".main-game");
const newCpu = document.querySelector(".btn--new-game-cpu");
const newPlayer = document.querySelector(".btn--new-game-player");

newCpu.addEventListener("click", startGame);
newPlayer.addEventListener("click", startGame);

function startGame(e) {
  startMenu.classList.toggle("hidden");
  mainGame.classList.toggle("hidden");
}

export default startGame;
