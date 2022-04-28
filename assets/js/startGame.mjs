import {GAME_STATE as GS} from "./gameState.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { markCell } from "./markCell.mjs";
import { playerClick } from "./playerClick.mjs";

function startGame(e) {
  const btnPressed = e.target.classList,
        TOKEN_CONTAINER = document.querySelector(".pt__choices"),
        ALERT = document.querySelector(".pt__alert"),
        X_MODIFIER = "pt__choices--cross-selected";

  
  // 1) Show alert message if no token is selected
  if (TOKEN_CONTAINER.classList.length == 1) {
    ALERT.classList.add("active");
    return
  }

  // 2) Set appropriate gameState properties:
  GS.type = (btnPressed.contains("btn--ng-pvc")) ? "PvC" : "PvP";
  GS.player1Token = (TOKEN_CONTAINER.classList.contains(X_MODIFIER)) ? "X" : "O";
  GS.computerToken = (GS.player1Token == "X") ? "O" : "X";
  GS.MAIN_BOARD = Array.from(Array(9).keys())

  // 3) Hide start menu + Show main game:
  const startUI = document.querySelector(".start-menu"),
        mainUI = document.querySelector(".main-game");
  
  startUI.classList.remove("active");
  mainUI.classList.add("active")

  // 4) Attach Event Listeners to the cells
  const CELLS = document.querySelectorAll(".play-cell")
  CELLS.forEach(cell => {
    let target = cell.querySelector(".play-cell__link");

    target.setAttribute("href", null)
    cell.addEventListener("click", playerClick)
    cell.addEventListener("mouseenter", showOutline)
    cell.addEventListener("mouseleave", removeOutline)
    cell.style.cursor = "pointer"
  })

  // 5) Label Scoreboards
  const crossOwner = document.querySelector("#scoreboard__cross-owner"),
        circleOwner = document.querySelector("#scoreboard__circle-owner");
  
  if (GS.type == "PvC") {
    crossOwner.textContent = (GS.player1Token == "X") ? "(YOU)" : "(CPU)";
    circleOwner.textContent = (GS.player1Token == "X") ? "(CPU)" : "(YOU)";
  } else if (GS.type == "PvP") {
    crossOwner.textContent = (GS.player1Token == "X") ? "(P1)" : "(P2)";
    circleOwner.textContent = (GS.player1Token == "X") ? "(P2)" : "(P1)"; 
  }

  
        
}

export {startGame}