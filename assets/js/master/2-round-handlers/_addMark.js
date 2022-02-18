import { globals } from "./../../_global.js";
import { checkWinner } from "./_checkWinner.js";
import { toggleIndicator } from "./_turnIndicator.js";

const playfield = globals.elements.playfield;

playfield.forEach((field) => {
  field.addEventListener("click", addMark);
});

function addMark(e) {
  if (globals.turn === 1) {
    allocateCross(e);
    changeTurn();
  } else {
    allocateCircle(e);
    changeTurn();
  }

  checkWinner();
  toggleIndicator();
}

function allocateCross(e) {
  e.target.classList.add("marked--cross");
  e.target.setAttribute("data-value", 1);
  e.target.style.pointerEvents = "none";
}

function allocateCircle(e) {
  e.target.classList.add("marked--circle");
  e.target.setAttribute("data-value", 2);
  e.target.style.pointerEvents = "none";
}

function changeTurn() {
  if (globals.turn === 1) {
    globals.turn = 2;
  } else {
    globals.turn = 1;
  }
}

export default addMark;
