import { GAME_STATE } from "./gameState.mjs";
import { markCell } from "./markCell.mjs";

function playerClick(e) {
  markCell(e.target, GAME_STATE.turn)
}

export {playerClick}