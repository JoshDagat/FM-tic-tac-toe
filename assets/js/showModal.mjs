import { GAME_STATE as GS } from "./gameState.mjs";

function showModal(result) {
  const baseModal = document.querySelector(".modal-container--base"),
        tiedModal = document.querySelector(".modal-container--tied"),
        baseSVG = baseModal.querySelector("#base-svg"),
        variableMsg = baseModal.querySelector("#variable-message"),
        constantMsg = baseModal.querySelector(".result-modal__constant-text");
  
  if (result == "tie") {
    tiedModal.classList.add("active")
    return
  }

  if (GS.type == "PvC") {
    variableMsg.textContent = 
      (result == GS.player1Token) ? "YOU WON!" : "OH NO, YOU LOST..." 
  } else if (GS.type == "PvP") {
    variableMsg.textContent = 
      (result == GS.player1Token) ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!"
  }

  if (result == "X") {
    baseSVG.setAttribute("href", "#cross");
    constantMsg.style.color = "#31C3BD"
  } else if (result == "O") {
    baseSVG.setAttribute("href", "#circle")
    constantMsg.style.color = "#F2B137"
  }
  
  if (result == "X" || result == "O") {
    baseModal.classList.add("active")
  }
}

export {showModal}