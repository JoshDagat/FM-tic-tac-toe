// Initialize play cells:
let a1, a2, a3, b1, b2, b3, c1, c2, c3;

a1 = document.querySelector("#a1");
a2 = document.querySelector("#a2");
a3 = document.querySelector("#a3");
b1 = document.querySelector("#b1");
b2 = document.querySelector("#b2");
b3 = document.querySelector("#b3");
c1 = document.querySelector("#c1");
c2 = document.querySelector("#c2");
c3 = document.querySelector("#c3");

let turn = 1; // 1 - cross player turn, 0 - circle player turn;

const marks = document.querySelectorAll(".mark");

marks.forEach((mark) => {
  mark.addEventListener("click", selected);
});

function selected(e) {
  const cross = document.querySelector(".start-menu__cross-mark");
  const circle = document.querySelector(".start-menu__circle-mark");

  e.target.classList.toggle("start-menu__mark--selected");

  if (e.target === cross) {
    if (circle.classList.contains("start-menu__mark--selected")) {
      circle.classList.remove("start-menu__mark--selected");
    }
  } else {
    if (cross.classList.contains("start-menu__mark--selected")) {
      cross.classList.remove("start-menu__mark--selected");
    }
  }
}

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

const reset = document.querySelector(".main-game__reset-btn");

reset.addEventListener("click", gameReset);

function gameReset(e) {
  startMenu.classList.toggle("hidden");
  mainGame.classList.toggle("hidden");
}

const cells = document.querySelectorAll(".main-game__play-cell");

cells.forEach((cell) => cell.addEventListener("click", addMark));

function addMark(e) {
  if (turn === 1) {
    e.target.classList.toggle("marked--cross");
  } else {
    e.target.classList.toggle("marked--circle");
  }
}
