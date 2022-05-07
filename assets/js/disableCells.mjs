import { playerClick } from "./playerClick.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";

function disableCells() {
  const cells = document.querySelectorAll(".cell")

  cells.forEach(cell => {
    cell.removeEventListener('click', playerClick);
    cell.removeEventListener('mouseenter', showOutline);
    cell.removeEventListener('mouseleave', removeOutline);
    cell.style.cursor = 'auto';
  })
}

export {disableCells}