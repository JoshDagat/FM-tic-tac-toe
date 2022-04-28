import { showModal } from "./showModal.mjs";
import { GAME_STATE as GS} from "./gameState.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { checkWin } from "./checkWin.mjs";
import { endRound } from "./endRound.mjs";
import { updateScores } from "./updateScores.mjs";
import { playerClick } from "./playerClick.mjs";

function markCell(cell, player) {
  // 1) Show appropriate SVG
  if (cell == null) return

  let target = cell.querySelector(".play-cell__link");

  if (player == "X") {
    target.setAttribute("href", "#cross")
    GS.turn = "O"
  } 
  
  else if (player == "O") {
    target.setAttribute("href", "#circle")
    GS.turn = "X"
  }

  // 2) Update the board || Note: cell.id[5] -> returns the number at the end of cell id.
  GS.MAIN_BOARD[cell.id[5]] = player

  // 3) Prevent events on the cell
  cell.removeEventListener("mouseleave", removeOutline)
  cell.removeEventListener("mouseenter", showOutline)
  cell.removeEventListener("click", playerClick)

  

  // 4) Check for a winner / a tie
  let winner = checkWin(GS.MAIN_BOARD);
  let availSpots = GS.MAIN_BOARD.filter(cell => typeof cell == 'number')
  
  if (winner) {
    showModal(winner)
    updateScores(winner)
    endRound()
  } 
  
  else if (availSpots.length == 0) {
    showModal("tie")
    updateScores("tie")
    endRound()
  }

  // 5) Change turn indicator
  const turnIndicator = document.querySelector(".ti-svg");
  let turnSVG = (GS.turn == "X") ? "#ti--cross" : "#ti--circle" 
  turnIndicator.setAttribute("href", turnSVG)

  return winner
}

export {markCell}