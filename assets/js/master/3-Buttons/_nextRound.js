import { gameState } from "../../global.js";
import { resetFields } from "./_reset.js";
import { displayPlayArea } from "./../0-display-handlers/_displayPlayArea.js";
import { markComputerSquare } from "../2-round-handlers/_markComputerSquare.js";

function nextRound() {
  resetFields();
  displayPlayArea();
  gameState.turn = 1;
  gameState.roundWinner = "";

  if (gameState.gameType === "CPU" && gameState.player1Token === "circle") {
    markComputerSquare();
  }
}

export { nextRound };
