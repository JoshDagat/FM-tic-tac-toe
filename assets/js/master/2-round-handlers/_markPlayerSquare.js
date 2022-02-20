import { gameState } from "../../_global.js";
import { checkWinner } from "./../1-game-state-handlers/_checkWinner.js";
import { markComputerSquare } from "./_markComputerSquare.js";

function markPlayerSquare(e) {
  e.target.setAttribute("data-value", gameState.turn);

  gameState.turn == 1 ? (gameState.turn = 2) : (gameState.turn = 1);

  e.target.style.pointerEvents = "none";

  if (checkWinner() == false && gameState.gameType == "CPU") {
    markComputerSquare();
  }
}

export { markPlayerSquare };
