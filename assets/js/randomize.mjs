import { GAME_STATE as GS} from "./gameState.mjs";

function randomize(board) {
  // board -> Is an array of integers representing indexes from the main-board
  //          which are still available for play.


  // 1) Create a random number to access board.
  let index = Math.floor(Math.random() * (board.length));

  // 2) Extract the element:
  let cellID = board[index],
      cell = document.querySelector(`#cell-${cellID}`),
      cellSVG = cell.querySelector('.cell__svg-link');
  
  // 3) Flash the appropriate svg:
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