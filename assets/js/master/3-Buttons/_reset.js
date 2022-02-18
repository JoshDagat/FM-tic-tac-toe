import { globals } from "./../../_global.js";

const resetBtn = globals.elements.resetBtn,
  startMenu = globals.elements.startMenu,
  mainGame = globals.elements.mainGame,
  playfield = globals.elements.playfield,
  choiceCircle = globals.elements.choiceCircle,
  choiceCross = globals.elements.choiceCross,
  crossCounter = globals.elements.crossCounter,
  circleCounter = globals.elements.circleCounter,
  tiesCounter = globals.elements.tiesCounter;

resetBtn.addEventListener("click", resetGame);

function resetGame(e) {
  showStartMenu();
  resetGlobalVariables();
  resetFields();
  resetTokenChoices();
  scoreReset();
}

function resetFields() {
  playfield.forEach((field) => {
    field.classList.remove("marked--cross");
    field.classList.remove("marked--circle");
    field.removeAttribute("style");
    field.setAttribute("data-turn-flag", 1);
    field.setAttribute("data-value", "");
  });
}

function showStartMenu() {
  startMenu.classList.remove("hidden");
  mainGame.classList.add("hidden");
}

function resetGlobalVariables() {
  globals.turn = 1;
  globals.gameType = "CPU";
  globals.roundWinner = "";
  globals.player1Token = "";
}

function resetTokenChoices() {
  choiceCircle.classList.remove("start-menu__mark--selected");
  choiceCross.classList.remove("start-menu__mark--selected");
}

function scoreReset() {
  crossCounter.textContent = 0;
  circleCounter.textContent = 0;
  tiesCounter.textContent = 0;
}

export { resetGame };
