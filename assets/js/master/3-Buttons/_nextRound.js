import { gameState } from "./../../_global.js";
import { resetFields } from "./_reset.js";
import { displayPlayArea } from "./../0-display-handlers/_displayPlayArea.js";

function nextRound() {
  gameState.turn = "1";
  gameState.roundWinner = "";

  resetFields();
  displayPlayArea();
}

export { nextRound };
