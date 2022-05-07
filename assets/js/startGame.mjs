import {GAME_STATE as GS} from "./gameState.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { playerClick } from "./playerClick.mjs";
import { computerTurn } from "./computerTurn.mjs";

function startGame(e) {
  const tokenContainer = document.querySelector(".game-tokens__choices");

  // 1) Show alert message if no token is selected
  const alertMsg = document.querySelector(".game-tokens__alert"),
        audioAlert = document.querySelector('#audio-lose');
  if (tokenContainer.classList.length == 1) {
    alertMsg.classList.add("active");
    audioAlert.currentTime = 0;
    audioAlert.volume = 0.5;
    audioAlert.play();
    return
  }

  // 2) Set appropriate gameState properties:
  const btnPressed = e.target.classList,
        crossModifier = "cross-selected";
    
    // Is the game player vs player?:
    GS.type = (btnPressed.contains("btn--ng-pvc")) ? "PvC" : "PvP";
  
    // What is player 1's token?:
    GS.player1Token = (tokenContainer.classList.contains(crossModifier)) ? "X" : "O";

    // What is the computer's token?:
    GS.computerToken = (GS.player1Token == "X") ? "O" : "X";

    // Initialize the game-board array:
    GS.mainBoard = Array.from(Array(9).keys())

  // 3) Hide start menu + Show main game:
  const startUI = document.querySelector(".start-menu"),
        mainUI = document.querySelector(".main-game");
  
  startUI.classList.remove("active");
  mainUI.classList.add("active")

  // 4) Attach Event Listeners to the cells
  const CELLS = document.querySelectorAll(".cell")
  CELLS.forEach(cell => {
    let target = cell.querySelector(".cell__svg-link");

    target.setAttribute("href", null)
    cell.addEventListener("click", playerClick)
    cell.addEventListener("mouseenter", showOutline)
    cell.addEventListener("mouseleave", removeOutline)
    cell.style.cursor = "pointer"
  })

  // 5) Label Scoreboards
  const crossOwner = document.querySelector("#owner-cross"),
        circleOwner = document.querySelector("#owner-circle");
  
  if (GS.type == "PvC") {
    crossOwner.textContent = (GS.player1Token == "X") ? "(YOU)" : "(CPU)";
    circleOwner.textContent = (GS.player1Token == "X") ? "(CPU)" : "(YOU)";
  } else if (GS.type == "PvP") {
    crossOwner.textContent = (GS.player1Token == "X") ? "(P1)" : "(P2)";
    circleOwner.textContent = (GS.player1Token == "X") ? "(P2)" : "(P1)"; 
  }

  // 6) If game is PvC and Computer is X, make computer take turn:
  if (GS.type == "PvC" && GS.computerToken == "X") {
    computerTurn();
  }

  // 7) Add sounds:
  const audioSelect = document.querySelector('#audio-select');
  
  audioSelect.volume = 0.2;
  audioSelect.currentTime = 0;
  audioSelect.play()
}

export {startGame}