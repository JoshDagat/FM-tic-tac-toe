import { playerSelectToken, startGame } from "./master/0-start-game/index.js";

import { gameReset, addMark, setDataFlag } from "./master/1-main-game/index.js";

// Initialize play cells:
let a1, a2, a3, b1, b2, b3, c1, c2, c3;

const cells = document.querySelectorAll(".main-game__play-cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", setDataFlag);
});
