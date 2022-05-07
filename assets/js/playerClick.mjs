import { checkWin } from "./checkWin.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { disableCells } from "./disableCells.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";
import { markCell } from "./markCell.mjs";
import { reEnableCells } from "./reEnableCells.mjs";
import { showWinner } from "./showWinner.mjs";

function playerClick(e) {

  // 1) Make a click sound:
  const audioPositive = document.querySelector('#audio-generic-click');
  audioPositive.currentTime = 0;
  audioPositive.play()

  // 2) Mark the cell with the player's token:
  markCell(e.target, GS.turn)

  // 3) Check for a winner:
  let result = checkWin(GS.mainBoard)

  if (result) {
    setTimeout(()=>showWinner(result), 750)
    return
  }

  // 4) If result is null and game is "PvC" make computer take turn:
  if (GS.type == "PvC" && result !== 'tie') {
    computerTurn(GS.mainBoard)
  }

  // 5) Temporary disable cells to avoid overlap:
  if (GS.type == 'PvP') {
    disableCells()
    setTimeout(reEnableCells, 1000)
  }
}

export {playerClick}