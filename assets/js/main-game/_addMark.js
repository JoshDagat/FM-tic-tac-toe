import { globals } from "./../_global.js";
import { gameState } from "./_gameState.js";

const cells = document.querySelectorAll(".main-game__play-cell");

cells.forEach((cell) => {
  cell.addEventListener("click", addMark);
});

function addMark(e) {
  e.target.setAttribute("data-flag", globals.turn);

  if (globals.turn === 1) {
    e.target.classList.add("marked--cross");
    e.target.setAttribute("data-value", 1);
    e.target.style.pointerEvents = "none";
    globals.turn = 0;
  } else {
    e.target.classList.add("marked--circle");
    e.target.setAttribute("data-value", 0);
    e.target.style.pointerEvents = "none";
    globals.turn = 1;
  }

  gameState();
}

export default addMark;
