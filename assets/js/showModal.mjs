import { GAME_STATE as GS } from "./gameState.mjs";

function showModal(result) {
  const baseModal = document.querySelector(".modal-container--base"),
        tiedModal = document.querySelector(".modal-container--tied"),
        baseSVG = baseModal.querySelector("#base-svg"),
        variableMsg = baseModal.querySelector("#variable-message"),
        constantMsg = baseModal.querySelector(".result-modal__constant-text"),
        audioTie = document.querySelector('#audio-tie'),
        audioWin = document.querySelector('#audio-win'),
        audioLose = document.querySelector('#audio-lose');
  
  if (result == "tie") {
    tiedModal.classList.add("active")
    audioTie.currentTime = 0;
    audioTie.play();
    return
  }

  if (GS.type == "PvC") {

    if (result === GS.computerToken) {
      audioLose.currentTime = 0;
      audioLose.play()
      variableMsg.textContent = "OH NO, YOU LOST..."
    } else {
      audioWin.currentTime = 0;
      audioWin.play()
      variableMsg.textContent = "YOU WON!"
    }

  } else if (GS.type == "PvP") {
    variableMsg.textContent = 
      (result == GS.player1Token) ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!"
    
    audioWin.currentTime = 0;
    audioWin.play();
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