import { endRound } from "./endRound.mjs";
import { highlightWin } from "./highlightWin.mjs";
import { showModal } from "./showModal.mjs";
import { updateScores } from "./updateScores.mjs";

function showWinner(result) {
  setTimeout(() => {
    showModal(result.winner)
    updateScores(result.winner)
    endRound()
  }, 750)
  
  highlightWin(result)
}

export {showWinner}