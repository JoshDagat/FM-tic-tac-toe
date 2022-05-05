import { endRound } from "./endRound.mjs";
import { showModal } from "./showModal.mjs";
import { updateScores } from "./updateScores.mjs";

function showWinner(result) {
  console.log(result)
  showModal(result)
  updateScores(result)
  endRound()
}

export {showWinner}