import { selectMark, startGame } from "./start-game/index.js";
import { gameReset, addMark, setDataFlag } from "./main-game/index.js";
import { globals } from "./_global.js";

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

const cells = document.querySelectorAll(".main-game__play-cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", setDataFlag);
});
