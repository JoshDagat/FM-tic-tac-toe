import { globals } from "../_global.js";

const elements = globals.elements;

elements.startBtnCPU.addEventListener("click", startGame);
elements.startBtnPlayer.addEventListener("click", startGame);

function startGame(e) {
  if (
    !elements.crossToken.classList.contains("start-menu__mark--selected") ||
    !elements.circleToken.classList.contains("start-menu__mark--selected")
  ) {
    elements.requireTokens.classList.toggle("active");
    return;
  }

  console.log(
    elements.crossToken.classList.contains("start-menu__mark--selected")
  );

  elements.startMenu.classList.toggle("hidden");
  elements.mainGame.classList.toggle("hidden");
}

export default startGame;
