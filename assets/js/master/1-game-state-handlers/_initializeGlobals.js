import { gameState, tokens } from "../../_global.js";

function initializeGlobals(e) {
  const isPvP = e.target.classList.contains("btn--new-game-player");
  const playerIsCross = tokens.cross.classList.contains(
    "start-menu__token--selected"
  );

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
