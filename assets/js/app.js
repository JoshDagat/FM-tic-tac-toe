import { selectMark, startGame } from "./start-game/index.js";
import { gameReset, addMark, setDataFlag } from "./main-game/index.js";
import { globals } from "./_global.js";

// Initialize play cells:
let a1, a2, a3, b1, b2, b3, c1, c2, c3;

const cells = document.querySelectorAll(".main-game__play-cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", setDataFlag);
});
