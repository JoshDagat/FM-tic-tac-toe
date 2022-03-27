import { gameState } from "./global.mjs";
import { checkWinner } from "./checkWinner.mjs";
import { endRound } from "./endRound.mjs";
import { markComputerCell } from "./markComputerCell.mjs";
import { changeTurn } from "./changeTurn.mjs";

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
