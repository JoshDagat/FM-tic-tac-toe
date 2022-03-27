import { highlightSelectedToken } from "../highlightSelectedToken.mjs";
import { markPlayerCell } from "../markPlayerCell.mjs";
import { newGame } from "../newGame.mjs";

const tokens = document.querySelectorAll(".token");

tokens.forEach((token) =>
  token.addEventListener("click", highlightSelectedToken)
);

const startMenuBtns = document.querySelectorAll(".btn--sm");

startMenuBtns.forEach((btn) => btn.addEventListener("click", newGame));

startMenuBtns.forEach((btn) => btn.addEventListener("click", newGame));

const cells = document.querySelectorAll(".play-cell");

cells.forEach((cell) => cell.addEventListener("click", markPlayerCell));
