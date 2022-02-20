/*
Initializes game state for P v CPU.
Attached to btn "new game cpu"
*/
import { gameState, tokens } from "../../_global.js";
import { initializeGlobals } from "./_initializeGlobals.js";
import {
  displayReminder,
  displayPlayArea,
  hideStartMenu,
} from "../0-display-handlers/indexDisplay.js";

function startGame(e) {
  //
  const isNotSelected = [
    tokens.circle.classList.contains("start-menu__token--selected"),
    tokens.cross.classList.contains("start-menu__token--selected"),
  ];

  if (isNotSelected.every((token) => token == false)) {
    displayReminder();
    return;
  }

  hideStartMenu();
  displayPlayArea();
  initializeGlobals(e);
}

export { startGame };
