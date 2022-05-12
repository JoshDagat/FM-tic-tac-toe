import { checkWin } from "./checkWin.mjs";
import { disableCells } from "./disableCells.mjs";
import { GAME_STATE as GS} from "./gameState.mjs";
import { markCell } from "./markCell.mjs";
import { minimax } from "./minimax.mjs";
import { randomize } from "./randomize.mjs";
import { reEnableCells } from "./reEnableCells.mjs";
import { showWinner } from "./showWinner.mjs";

function computerTurn(board) {
  const audioRoll = document.querySelector('#audio-roll');
  // 1) Temporarily disable the cells:
  disableCells()

  // 1) Pretend to choose a cell:
  let availableSpots = board.filter(cell => typeof cell == 'number');

  if (availableSpots.length > 1) {
      let choose = setInterval( () => randomize(availableSpots), 200)
      setTimeout( () => {
        clearInterval(choose)
        audioRoll.pause();
      }, 5000)

      audioRoll.currentTime = 0;
      audioRoll.loop = true;
      audioRoll.play();
  }
  
      
  // 2) Choose a cell and mark:
  let chance = Math.floor(Math.random() * 10.5),
      bestCell,
      element,
      index;
  
  if (chance > 8) {
    index = Math.floor( Math.random() * availableSpots.length);
    bestCell = availableSpots[index];
    element = document.querySelector(`#cell-${bestCell}`);
  } else if (chance <= 8) {
    bestCell = minimax(board, GS.computerToken)
    element = document.querySelector(`#cell-${bestCell.index}`)
  }

  const audioClick = document.querySelector('#audio-generic-click')


  let markTime = (availableSpots.length > 1) ? 5750 : 500
  if (availableSpots.length > 1) {

  }
  setTimeout(()=> {
    markCell(element, GS.computerToken)
    audioClick.currentTime = 0;
    audioClick.play()
    
    setTimeout(() => {
    // 3) Check for a winner:
      let result = checkWin(GS.mainBoard);
      if (result === "X" || result === "O") {
        showWinner(result)
        return
      }
    }, 750)
  }, markTime)

  

  // 4) Re-enable cells
  setTimeout(() => {
    reEnableCells()
  }, (markTime + 250))

}

export {computerTurn}