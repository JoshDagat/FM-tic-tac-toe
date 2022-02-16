import { globals } from "./../../_global.js";

const resetBtn = globals.elements.resetBtn,
  startMenu = globals.elements.startMenu,
  mainGame = globals.elements.mainGame,
  playfield = globals.elements.playfield,
  choiceCircle = globals.elements.choiceCircle,
  choiceCross = globals.elements.choiceCross;

resetBtn.addEventListener("click", gameReset);

function gameReset(e) {
  showStartMenu();
  resetGlobalVariables();
  resetFields();
  resetTokenChoices();
}

function resetFields() {
  playfield.forEach((field) => {
    field.classList.remove("marked--cross");
    field.classList.remove("marked--circle");
    field.removeAttribute("style");
    field.setAttribute("data-flag", 1);
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
}

function resetTokenChoices() {
  choiceCircle.classList.remove("start-menu__mark--selected");
  choiceCross.classList.remove("start-menu__mark--selected");
}

export default gameReset;
