import {
  gameState,
  playField,
  containersUI,
  tokens,
  scoreBoard,
} from "./../../_global.js";

function resetGame(e) {
  showStartMenu();
  resetGlobalVariables();
  resetFields();
  resetTokenChoices();
  scoreReset();
}

function resetFields() {
  playField.fields.forEach((field) => {
    field.removeAttribute("style");
    field.setAttribute("data-turn-flag", 1);
    field.setAttribute("data-value", 0);
  });
}

function showStartMenu() {
  containersUI.startMenu.classList.remove("hidden");
  containersUI.mainGame.classList.add("hidden");
}

function resetGlobalVariables() {
  gameState.turn = 1;
  gameState.gameType = "";
  gameState.roundWinner = "";
  gameState.player1Token = "";
}

function resetTokenChoices() {
  tokens.circle.classList.remove("start-menu__token--selected");
  tokens.cross.classList.remove("start-menu__token--selected");
}

function scoreReset() {
  scoreBoard.counterCross.textContent = 0;
  scoreBoard.counterCircle.textContent = 0;
  scoreBoard.counterTies.textContent = 0;
}

export { resetGame, resetFields };
