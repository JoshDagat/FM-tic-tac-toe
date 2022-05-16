import { Sound } from "./Sound.mjs";
import { Cells } from "./Cell.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Game } from "./Game.mjs";
import { Memory } from "./Memory.mjs";

function playerClick(e) {
  let cell = e.target;

  // 1) Make a click sound:
  Sound.play('#audio-generic-click');

  // 2) Mark the cell with the player's token:
  Cells.mark(cell.querySelector('.cell__svg-link'), Game.turn);
  
  // 3) Disable the marked cell:
  Cells.detach(cell)

  // 4) Update the board.  Note -> cell.id = `cell-${n}`
  Game.origBoard[cell.id[5]] = Game.turn;

  // 5) Disable all other cells:
  Cells.disableEmpty();

  // 6) Check for a winner:
  let result = Game.checkWin(Game.origBoard, Game.turn);
      if (result) {
        setTimeout(()=> {
          Game.showWinner(result)
        }, 750);
        return;
      }

      if (!Cells.emptyCells().length) {
        result = {winner: 'tie', combo:null}
        setTimeout(()=> {
          Game.showWinner(result)
        }, 750);
        return;
      }

  // 7) Change the turn:
  Game.changeTurn();
  
  // 8) Store session:
  sessionStorage.setItem('board', JSON.stringify(Game.origBoard));
  sessionStorage.setItem('turn', Game.turn)

  // 9) If result is null and game is "PvC" make computer take turn:
  if (Game.type == "PvC") {
    computerTurn(Game.origBoard)
  }

  // 10) If result is null and game is "PvP".
  //    Temporary disable cells to avoid overlap:
  if (Game.type == 'PvP') {
    Cells.disableEmpty();
    setTimeout(Cells.enableEmpty(), 1000)
  }
}

export {playerClick}