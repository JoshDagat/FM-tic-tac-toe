import { GAME_STATE as GS } from "./gameState.mjs";

function showModal(result) {
  // Audio
  const audioTie = document.querySelector('#audio-tie'),
        audioWin = document.querySelector('#audio-win'),
        audioLose = document.querySelector('#audio-lose');

  // Modals
  const baseModal = document.querySelector("#modal-base-result"),
        tiedModal = document.querySelector("#modal-tied-result");

  // Modal Elements
  const baseSVG = baseModal.querySelector("#base-svg"),
        variableMsg = baseModal.querySelector("#variable-message"),
        constantMsg = baseModal.querySelector(".modal-base__winning-text");

  // Tie -> Show tie modal:
  if (result == "tie") {
    tiedModal.classList.add("active")
    audioTie.currentTime = 0;
    audioTie.play();
    return
  }

  // If game is Player vs AI, create approproate messages:
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
  } 
  
  // If game is Player vs Player, create appropriate messages:
  if (GS.type == "PvP") {
    variableMsg.textContent = (result == GS.player1Token) ?
       "PLAYER 1 WINS!" : "PLAYER 2 WINS!"
    
    audioWin.currentTime = 0;
    audioWin.play();
  }

  // Show appropriate SVG token:
  if (result == "X") {
    baseSVG.setAttribute("href", "#cross");
    constantMsg.style.color = "#31C3BD"
  } else if (result == "O") {
    baseSVG.setAttribute("href", "#circle")
    constantMsg.style.color = "#F2B137"
  }
  
  // Show non tied modal:
  if (result == "X" || result == "O") {
    baseModal.classList.add("active")
  }

}

export {showModal}