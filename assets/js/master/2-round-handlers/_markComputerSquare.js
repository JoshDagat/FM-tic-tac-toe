import { gameState } from "../../_global.js";
import { checkWinner } from "../1-game-state-handlers/_checkWinner.js";

function markComputerSquare() {
  const unmarkedFields = document.querySelectorAll("[data-value='0']");
  const iField = Math.floor(Math.random() * unmarkedFields.length);
  const choice = unmarkedFields[iField];

  choice.setAttribute("data-value", gameState.turn);

  gameState.turn == 1 ? (gameState.turn = 2) : (gameState.turn = 1);

  choice.style.pointerEvents = "none";

  checkWinner();
}

export { markComputerSquare };
