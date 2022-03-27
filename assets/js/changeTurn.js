import { gameState } from "./global.mjs";

function changeTurn() {
  const mainGame = document.querySelector(".main-game");
  const cross = "mg--cross-turn";
  const circle = "mg--circle-turn";

  console.log(`before: ${gameState.turn}`);

  if (gameState.turn == 1) {
    gameState.turn = 2;
    mainGame.classList.remove(cross);
    mainGame.classList.add(circle);
  } else {
    gameState.turn = 1;
    mainGame.classList.remove(circle);
    mainGame.classList.add(cross);
  }

  console.log(`after: ${gameState.turn}`);
}

export { changeTurn };
