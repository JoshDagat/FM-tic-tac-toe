/*
This function handles the new game buttons in the start-menu
*/

import { globals } from "../_global.js";

const startBtnCPU = globals.elements.startBtnCPU,
  startBtnPlayer = globals.elements.startBtnPlayer,
  crossToken = globals.elements.crossToken,
  circleToken = globals.elements.circleToken,
  requireTokens = globals.elements.requireTokens,
  startMenu = globals.elements.startMenu,
  mainGame = globals.elements.mainGame;

startBtnCPU.addEventListener("click", startGame);
startBtnPlayer.addEventListener("click", startGame);

function startGame(e) {
  if (
    !crossToken.classList.contains("start-menu__mark--selected") &&
    !circleToken.classList.contains("start-menu__mark--selected")
  ) {
    requireTokens.classList.add("active");
    return;
  }

  startMenu.classList.toggle("hidden");
  mainGame.classList.toggle("hidden");
  requireTokens.classList.remove("active");
}

export default startGame;
