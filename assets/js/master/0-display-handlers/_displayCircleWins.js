import { modalComponents, gameState, containersUI } from "../../_global.js";

function displayCircleWins() {
  const isCPU = gameState.gameType === "CPU",
    isCircle = gameState.player1Token === "circle";

  // isCPU:true  - isCircle:true -> You won!
  // isCPU:true  - isCircle:true -> Oh no, you lost...
  // isCPU:false - isCircle:true -> Player 1 Wins!
  // isCPU:false - isCircle:true -> Player 2 wins!
  if (isCPU && isCircle) {
    modalComponents.roundMsg.textContent = "YOU WON!";
  }

  if (isCPU && !isCircle) {
    modalComponents.roundMsg.textContent = "OH NO, YOU LOST...";
  }

  if (!isCPU && isCircle) {
    modalComponents.roundMsg.textContent = "PLAYER 1 WINS!";
  }

  if (!isCPU && !isCircle) {
    modalComponents.roundMsg.textContent = "PLAYER 2 WINS!";
  }

  modalComponents.crossSVG.classList.remove("active");
  modalComponents.circleSVG.classList.add("active");
  modalComponents.announcement.style.color = "#F2B137";
  containersUI.modal.classList.add("modal--active");
}

export { displayCircleWins };
