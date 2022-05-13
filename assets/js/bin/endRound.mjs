import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { playerClick } from "../playerClick.mjs";

function endRound() {
  const cells = document.querySelectorAll(".play-cell");

  cells.forEach(cell => {
    cell.removeEventListener("click", playerClick)
    cell.removeEventListener("mouseenter", showOutline);
    cell.removeEventListener("mouseleave", removeOutline)
    cell.style.cursor = "auto";
  })
}

export {endRound}