import { GAME_STATE as GS} from "./gameState.mjs";
import { markCell } from "./markCell.mjs";
import { minimax } from "./minimax.mjs";

function computerTurn() {
  let chance = Math.floor(Math.random() * 10.5);
  let availSpots = GS.MAIN_BOARD.filter(cell => typeof cell == 'number');
  let bestCell, element;

  console.log(GS.MAIN_BOARD)
  console.log("Spots: ", availSpots)
  console.log("chance: ", chance)

  if (chance > 5) {
    console.log("i gave you a chance")
    let index = Math.floor(Math.random() * (availSpots.length));
    console.log("best", index)
    bestCell = availSpots[index];
    element = document.querySelector(`#cell-${bestCell}`);
  } else if (chance <= 7) {
    bestCell = minimax(GS.MAIN_BOARD, GS.computerToken)
    console.log("best", bestCell)
    element = document.querySelector(`#cell-${bestCell.index}`)
  }
  console.log("element: ", element)

  markCell(element, GS.computerToken)
  console.log("breaker #############")
}

export {computerTurn}