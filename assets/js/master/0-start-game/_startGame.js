/*
This function handles the new game buttons in the start-menu
*/

import { globals } from "./../../_global.js";

const startBtnCPU = globals.elements.startBtnCPU,
  startBtnPlayer = globals.elements.startBtnPlayer,
  choiceCross = globals.elements.choiceCross,
  choiceCircle = globals.elements.choiceCircle,
  requireTokensMsg = globals.elements.requireTokensMsg,
  startMenu = globals.elements.startMenu,
  mainGame = globals.elements.mainGame;

startBtnCPU.addEventListener("click", startGame);
startBtnPlayer.addEventListener("click", startGame);

function startGame(e) {
  let isCPU = e.target.classList.contains("btn--new-game-cpu");

  // Check if player has chosen a token
  if (displayReminder()) {
    return;
  } else {
    // If PvP, set game type
    if (!isCPU) {
      globals.gameType = "Players";
    }

    showMainGameUI();
    displayReminder();
  }
}

function showMainGameUI() {
  startMenu.classList.add("hidden");
  mainGame.classList.remove("hidden");
}

function displayReminder() {
  const isUnmarkedCross = !choiceCross.classList.contains(
      "start-menu__mark--selected"
    ),
    isUnmarkedCircle = !choiceCircle.classList.contains(
      "start-menu__mark--selected"
    );

  if (isUnmarkedCircle && isUnmarkedCross) {
    requireTokensMsg.classList.add("active");
    return true;
  } else {
    requireTokensMsg.classList.remove("active");
    return false;
  }
}

export { startGame };
