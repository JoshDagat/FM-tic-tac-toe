import { computerTurn } from "./computerTurn.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";
import { playerClick } from "./playerClick.mjs";
import { removeOutline, showOutline } from "./toggleOutline.mjs";

function nextRound() {
  GS.MAIN_BOARD = Array.from(Array(9).keys())

  if (GS.type === "PvC" && GS.computerToken === "X") {
    computerTurn()
  }

  let cells = document.querySelectorAll(".play-cell");
  cells.forEach(cell => {
    let target = cell.querySelector(".play-cell__link")
    target.setAttribute("href", null)

    cell.addEventListener("click", playerClick)
    cell.addEventListener("mouseenter", showOutline)
    cell.addEventListener("mouseleave", removeOutline)
    cell.style.cursor = "pointer"
  })

  const modals = document.querySelectorAll(".modal-container")
  modals.forEach(modal => modal.classList.remove("active"))

  // 6) Reset turn indicator
  const turnIndicator = document.querySelector(".ti-svg");
  turnIndicator.setAttribute("href", "#ti--cross")

  GS.turn = "X"

  const audioBeep = document.querySelector("#audio-hover");
  audioBeep.currentTime = 0;
  audioBeep.play()
}

export {nextRound}