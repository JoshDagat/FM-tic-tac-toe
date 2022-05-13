import {GAME_STATE as GS} from "./gameState.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { playerClick } from "../playerClick.mjs";
import { computerTurn } from "../computerTurn.mjs";

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
    
  // Is the game player vs player?:
  const targetBtn = e.target.classList;
        if (targetBtn.contains("btn--ng-pvc")) {
          GS.type = "PvC"       
        } else {
          GS.type = "PvP"
        }
  
  // What is player 1's token? What is the computer's token:
  const crossModifier = "cross-selected";
        if (tokenContainer.classList.contains(crossModifier)) {
          GS.player1Token = "X"
          GS.computerToken = "O"
        } else {
          GS.player1Token = "O"
          GS.computerToken = "X"
        }

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

        cell.style.backgroundColor = "#1f3641"
        cell.addEventListener("click", playerClick)
        cell.addEventListener("mouseenter", showOutline)
        cell.addEventListener("mouseleave", removeOutline)
        cell.style.cursor = "pointer"
    })

  // 5) Label Scoreboards
  const crossOwner = document.querySelector("#owner-cross"),
        circleOwner = document.querySelector("#owner-circle");

        // PVC
        if (GS.type == "PvC") {
          if (GS.player1Token == "X") {
            crossOwner.textContent = "(YOU)";
            circleOwner.textContent = "(CPU)";
          }

          if (GS.player1Token = "O") {
            crossOwner.textContent = "(CPU)";
            circleOwner.textContent = "(YOU)";
          }
        }
        
        // PVP
        if (GS.type == "PvP") {
          if (GS.player1Token == "X") {
            crossOwner.textContent = "(P1)";
            circleOwner.textContent = "(P2)";
          }

          if (GS.player1Token == "O") {
            crossOwner.textContent = "(P2)";
            circleOwner.textContent = "(P1)";
          }
        }

  // 6) Set GS.gameStart = true:
  GS.gameStarted = true;

  // 8) If game is PvC and Computer is X, make computer take turn:
  if (GS.type == "PvC" && GS.computerToken == "X") {
    computerTurn(GS.mainBoard);
  }

  // 7) Add sounds:
  const audioSelect = document.querySelector('#audio-select');
  
        audioSelect.volume = 0.2;
        audioSelect.currentTime = 0;
        audioSelect.play()

  // 8) Store gameState values:
  sessionStorage.setItem('game', JSON.stringify(GS))
}

export {startGame}