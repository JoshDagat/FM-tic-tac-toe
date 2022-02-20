import { gameState, tokens, buttons, playField } from "./_global.js";
import { highlightSelected } from "./master/0-display-handlers/_highlightSelectedToken.js";
import { startGame } from "./master/1-game-state-handlers/_startGame.js";
import { markPlayerSquare } from "./master/2-round-handlers/_markPlayerSquare.js";
import { displayTokenOutline } from "./master/0-display-handlers/_displayTokenOutline.js";
import { resetGame } from "./master/3-Buttons/_reset.js";

tokens.tokenArr.forEach((token) =>
  token.addEventListener("click", highlightSelected)
);

buttons.startBtnCPU.addEventListener("click", startGame);

playField.fields.forEach((field) => {
  field.addEventListener("click", markPlayerSquare);
  field.addEventListener("mouseenter", displayTokenOutline);
});

buttons.resetBtn.addEventListener("click", resetGame);

const allSVG = document.querySelectorAll("svg");

allSVG.forEach((svg) => (svg.style.pointerEvents = "none"));
