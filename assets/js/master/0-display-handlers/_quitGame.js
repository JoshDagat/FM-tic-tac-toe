import { globals } from "../../_global.js";
import { resetGame } from "./../3-Buttons/_reset.js";

const quitBtn = globals.elements.quitBtn,
  modalRoundResult = globals.elements.modalRoundResult;

quitBtn.addEventListener("click", quitGame);

function quitGame() {
  resetGame();
  modalRoundResult.classList.remove("modal--active");
}

export { quitGame };
