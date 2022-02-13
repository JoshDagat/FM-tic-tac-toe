const reset = document.querySelector(".main-game__reset-btn");
const startMenu = document.querySelector(".start-menu");
const mainGame = document.querySelector(".main-game");

reset.addEventListener("click", gameReset);

function gameReset(e) {
  startMenu.classList.toggle("hidden");
  mainGame.classList.toggle("hidden");
}

export default gameReset;
