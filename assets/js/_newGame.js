import { gameState } from "./_global.js";
import { markComputerCell } from "./_markComputerCell.js";

function newGame(e) {
  // Containers for token choices and it's modifiers:
  const tokenContainer = document.querySelector(".pt__choices"),
    modifierCross = "pt__choices--circle-selected",
    modifierCircle = "pt__choices--cross-selected";

  // Have the players selected a token already?:
  const isATokenSelected =
    tokenContainer.classList.contains(modifierCross) ||
    tokenContainer.classList.contains(modifierCircle);

  // Show alert msg if no token is selected:
  if (!isATokenSelected) {
    showTokenPrompt();
    return;
  }

  initializeGameState(e);
  showPlayField();

  console.log(gameState.gameType, gameState.player1Token);

  if (gameState.gameType === "PvC" && gameState.player1Token === "circle") {
    markComputerCell();
  }
}

// ##### Supporting Functions #####
function showTokenPrompt() {
  const alertMsg = document.querySelector(".pt__alert");

  alertMsg.classList.add("active");
}

function initializeGameState(e) {
  // Is the game player vs computer(PvC) or player vs player(PvP)?:
  const isPvC = e.target.classList.contains("btn--ng-pvc");

  const tokenContainer = document.querySelector(".pt__choices"),
    modifierCross = "pt__choices--cross-selected";

  // Is player1's Token a cross?
  const isCrossSelected = tokenContainer.classList.contains(modifierCross);

  if (isPvC) {
    gameState.gameType = "PvC"; // default "PvP"
  }

  if (isCrossSelected) {
    gameState.player1Token = "cross"; // default "circle"
  }
}

function showPlayField() {
  const startMenu = document.querySelector(".start-menu"),
    mainGame = document.querySelector(".main-game");

  startMenu.classList.remove("active");
  mainGame.classList.add("active");
}

export { newGame };
