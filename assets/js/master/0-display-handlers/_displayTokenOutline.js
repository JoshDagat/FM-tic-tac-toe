import { gameState } from "../../_global.js";

function displayTokenOutline(e) {
  e.target.setAttribute("data-turn-flag", gameState.turn);
}

export { displayTokenOutline };
