import { computerTurn } from "./computerTurn.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";
import { markCell } from "./markCell.mjs";
import { minimax } from "./minimax.mjs";

function playerClick(e) {
  let result = markCell(e.target, GS.turn)
  let possibilities = ['X', 'O', 'tie']
  
   // 6) Make computer take turn if it is PvC
  if (GS.type == "PvC") {
    computerTurn()
  }
}

export {playerClick}