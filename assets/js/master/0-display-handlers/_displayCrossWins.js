import { modalComponents, gameState, containersUI } from "../../_global.js";

function displayCrossWins() {
  const isCPU = gameState.gameType === "CPU",
    isCross = gameState.player1Token === "cross";

  // isCPU:true  - isCross:true -> You won!
  // isCPU:true  - isCross:true -> Oh no, you lost...
  // isCPU:false - isCross:true -> Player 1 Wins!
  // isCPU:false - isCross:true -> Player 2 wins!
  if (isCPU && isCross) {
    modalComponents.roundMsg.textContent = "YOU WON!";
  }

  if (isCPU && !isCross) {
    modalComponents.roundMsg.textContent = "OH NO, YOU LOST...";
  }

  if (!isCPU && isCross) {
    modalComponents.roundMsg.textContent = "PLAYER 1 WINS!";
  }

  if (!isCPU && !isCross) {
    modalComponents.roundMsg.textContent = "PLAYER 2 WINS!";
  }

  modalComponents.crossSVG.classList.add("active");
  modalComponents.circleSVG.classList.remove("active");
  modalComponents.announcement.style.color = "#31c3bd";
  containersUI.modal.classList.add("modal--active");
}

export { displayCrossWins };
