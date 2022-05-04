import { playerClick } from "./playerClick.mjs";
import { removeOutline, showOutline } from "./toggleOutline.mjs";

function reEnableCells() {
  const cells = document.querySelectorAll('.play-cell');

  cells.forEach(cell => {
    const targetLink = cell.querySelector('.play-cell__link')
                           .getAttribute('href')

    
    if (targetLink === 'null') {
      cell.addEventListener('click', playerClick)
      cell.addEventListener('mouseenter', showOutline)
      cell.addEventListener('mouseleave', removeOutline)
      cell.style.cursor = 'pointer'
    }
  })
}

export {reEnableCells}