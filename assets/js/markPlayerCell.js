import { gameState } from "./global.js";
import { checkWinner } from "./checkWinner.js";
import { endRound } from "./endRound.js";
import { markComputerCell } from "./markComputerCell.js";
import { changeTurn } from "./changeTurn.js";

function markPlayerCell(e) {
  // Mark the cell with the player's token
  if (gameState.turn === 1) {
    e.target.setAttribute("data-value", 1);
  } else {
    e.target.setAttribute("data-value", 2);
  }

  e.target.style.pointerEvents = "none";

  const roundWinner = checkWinner();
  console.log(roundWinner);

  if (roundWinner != false) {
    endRound(roundWinner);
  }

  if (!roundWinner) {
    markComputerCell();
    setTimeout(changeTurn, 250);
  }
}

export { markPlayerCell };
