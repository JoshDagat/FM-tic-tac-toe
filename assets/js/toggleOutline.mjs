import { GAME_STATE as GS } from "./gameState.mjs"
import { hoverSound } from "./hoverSound.mjs"

function showOutline(e) {
  let cellSVG = e.target.querySelector(".cell__svg-link")

  if (GS.turn == "X") {
    cellSVG.setAttribute("href", "#cross--outline")
  } else if (GS.turn == "O") {
    cellSVG.setAttribute("href", "#circle--outline")
  }

  hoverSound()
}

function removeOutline(e) {
  e.target.querySelector(".cell__svg-link").setAttribute("href", null)
}


export {showOutline, removeOutline}