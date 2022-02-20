import {
  gameState,
  tokens,
  buttons,
  playField,
  modalComponents,
  containersUI,
} from "./_global.js";
import { highlightSelected } from "./master/0-display-handlers/_highlightSelectedToken.js";
import { startGame } from "./master/1-game-state-handlers/_startGame.js";
import { markPlayerSquare } from "./master/2-round-handlers/_markPlayerSquare.js";
import { displayTokenOutline } from "./master/0-display-handlers/_displayTokenOutline.js";
import { resetGame, quitGame, nextRound } from "./master/3-Buttons/index.js";
tokens.tokenArr.forEach((token) =>
  token.addEventListener("click", highlightSelected)
);

buttons.startBtnCPU.addEventListener("click", startGame);

playField.fields.forEach((field) => {
  field.addEventListener("click", markPlayerSquare);
  field.addEventListener("mouseenter", displayTokenOutline);
});

buttons.resetBtn.addEventListener("click", resetGame);
buttons.quitGameBtn.addEventListener("click", quitGame);
buttons.nextRoundBtn.addEventListener("click", nextRound);

const allSVG = document.querySelectorAll("svg");

allSVG.forEach((svg) => (svg.style.pointerEvents = "none"));
