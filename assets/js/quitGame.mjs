import { reset } from "./reset.mjs";

function quitGame() {
  // 1) Hide modals:
  const modals = document.querySelectorAll(".modal-wrapper");
  modals.forEach(modal => modal.classList.remove("active"));

  // 2) reset
  reset()
}

export {quitGame} 
