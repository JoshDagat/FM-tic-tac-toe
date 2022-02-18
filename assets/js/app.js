import { gameState, tokens, buttons } from "./_global.js";
import { highlightSelected } from "./master/0-display-handlers/_highlightSelectedToken.js";
import { startGame } from "./master/1-game-state-handlers/_startGame.js";

tokens.tokenArr.forEach((token) =>
  token.addEventListener("click", highlightSelected)
);

buttons.startBtnCPU.addEventListener("click", startGame);
