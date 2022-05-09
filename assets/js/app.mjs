import { initializeEventListeners } from "./initializeEventListeners.mjs";
import { GAME_STATE, GAME_STATE as GS } from "./gameState.mjs";
initializeEventListeners();

window.onload = function setBoard() {
  let state = sessionStorage.getItem('board');
  if (sessionStorage.getItem('board') == null) {
    return
  } else {

    for (let i = 0; i < state.length; i++) {
      let x = document.querySelector(`.cell-${i}`);
      console.log(x)
    }

  }
  console.log(sessionStorage.getItem('board'));
} 