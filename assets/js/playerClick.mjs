import { audio } from "./audio.mjs";
import { Cells } from "./Cell.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Game } from "./Game.mjs";

function playerClick(e) {
  let cell = e.target;

  // 1) Make a click sound:
  audio.play('#audio-generic-click');

  // 2) Mark the cell with the player's token:
  Cells.mark(cell.querySelector('.cell__svg-link'), Game.tokenPlayer1);
  
  // 3) Disable the marked cell:
  Cells.detach(cell)

  // 4) Update the board.  Note -> cell.id = `cell-${n}`
  Game.origBoard[cell.id[5]] = Game.turn;

  // 5) Disable all other cells:
  Cells.disable();

  // 6) Check for a winner:
  let result = Game.checkWin(Game.origBoard, Game.turn);
      if (result) {
        setTimeout(()=> {
          Game.showWinner(result)
        }, 750);
        return;
      }

      if (!Cells.emptyCells().length) {
        result = 'tie';
        setTimeout(()=> {
          Game.showWinner(result)
        }, 750);
        return;
      }

  // 7) Change the turn:
  Game.changeTurn();
  

  // 8) If result is null and game is "PvC" make computer take turn:
  if (Game.type == "PvC") {
    computerTurn(Game.origBoard)
  }

  // 9) If result is null and game is "PvP".
  //    Temporary disable cells to avoid overlap:
  if (Game.type == 'PvP') {
    Cells.disable();
    setTimeout(Cells.enable(), 1000)
  }
}

export {playerClick}