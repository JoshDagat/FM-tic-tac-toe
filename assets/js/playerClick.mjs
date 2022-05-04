import { checkWin } from "./checkWin.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { disableCells } from "./disableCells.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";
import { markCell } from "./markCell.mjs";
import { minimax } from "./minimax.mjs";
import { reEnableCells } from "./reEnableCells.mjs";
import { showModal } from "./showModal.mjs";
import { showWinner } from "./showWinner.mjs";
import { updateScores } from "./updateScores.mjs";

function playerClick(e) {
  const audioPositive = document.querySelector('#audio-generic-click');
  audioPositive.currentTime = 0;
  audioPositive.play()

  // 1) Mark the cell with the player's token:
  markCell(e.target, GS.turn)

  // 2) Check for a winner:
  let result = checkWin(GS.MAIN_BOARD)
  
  if (result) {
    setTimeout(()=>showWinner(result), 750)
    return
  }
  // 3) If there is no resultr and game is "PvC" make computer take turn:
  if (GS.type == "PvC" && result !== 'tie') {
    computerTurn()
  }

  if (GS.type == 'PvP') {
    disableCells()
    setTimeout(reEnableCells, 1000)
  }
}

export {playerClick}