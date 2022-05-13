import { Game } from "../Game.mjs";
import { hoverSound } from "./hoverSound.mjs";

function showOutline(e) {
  let cellSVG = e.target.querySelector(".cell__svg-link")

  if (Game.turn === "X") {
    cellSVG.setAttribute("href", "#cross--outline")
  } else if (Game.turn === "O") {
    cellSVG.setAttribute("href", "#circle--outline")
  }

  hoverSound()
}

function removeOutline(e) {
  e.target.querySelector(".cell__svg-link").setAttribute("href", null)
}


export {showOutline, removeOutline}