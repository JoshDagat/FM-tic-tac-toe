import { gameState, sideEffects } from "../../global.js";

function changeTurnIndicator() {
  if (gameState.turn === 2) {
    sideEffects.indicatorCircle.classList.add("active");
    sideEffects.indicatorCross.classList.remove("active");
  } else {
    sideEffects.indicatorCircle.classList.remove("active");
    sideEffects.indicatorCross.classList.add("active");
  }
}

export { changeTurnIndicator };
