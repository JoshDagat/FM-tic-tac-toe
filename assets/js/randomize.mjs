import { GAME_STATE as GS} from "./gameState.mjs";

function randomize(board) {

  let index = Math.floor(Math.random() * (board.length)),
      cellID = board[index],
      cell = document.querySelector(`#cell-${cellID}`),
      cellSVG = cell.querySelector('.play-cell__link');
  if (GS.computerToken == "X") {
    cellSVG.setAttribute('href', '#cross')
  } else {
    cellSVG.setAttribute('href', '#circle')
  }

  setTimeout(()=> {
    cellSVG.setAttribute('href', null)
  }, 500)
}

export {randomize}