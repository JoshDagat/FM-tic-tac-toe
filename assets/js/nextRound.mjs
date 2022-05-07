import { computerTurn } from "./computerTurn.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";
import { playerClick } from "./playerClick.mjs";
import { removeOutline, showOutline } from "./toggleOutline.mjs";

function nextRound() {
  // Re-initialize main board:
  GS.mainBoard = Array.from(Array(9).keys())

  // Computer's Turn
  if (GS.type === "PvC" && GS.computerToken === "X") {
    computerTurn()
  }

  // Reset the cells and re-attach the listeners:
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    let target = cell.querySelector(".cell__svg-link")
    target.setAttribute("href", null)

    cell.addEventListener("click", playerClick)
    cell.addEventListener("mouseenter", showOutline)
    cell.addEventListener("mouseleave", removeOutline)
    cell.style.cursor = "pointer"
  })

  // Close all modals:
  const modals = document.querySelectorAll(".modal-wrapper")
  modals.forEach(modal => modal.classList.remove("active"))

  // Reset turn indicator
  const turnIndicator = document.querySelector(".turn-indicator__svg-link");
  turnIndicator.setAttribute("href", "#ti--cross")
  GS.turn = "X"

  const audioBeep = document.querySelector("#audio-hover");
  audioBeep.currentTime = 0;
  audioBeep.play()
}

export {nextRound}