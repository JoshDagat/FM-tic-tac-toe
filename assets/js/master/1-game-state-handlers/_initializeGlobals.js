import { gameState } from "../../_global.js";

function initializeGlobals(e) {
  const isPvP = e.target.classList.contains("btn--new-game-player");
  const playerIsCross = globals.elements.choiceCross.contains("marked--cross");

  if (isPvP) {
    gameState.gameType = "PvP";
  } else {
    gameState.gameType = "CPU";
  }

  if (playerIsCross) {
    gameState.player1Token = "cross";
  } else {
    gameState.player1Token = "circle";
  }
}

export { initializeGlobals };
