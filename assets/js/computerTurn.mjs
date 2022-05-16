import { Cells } from "./Cell.mjs";
import { Sound } from "./Sound.mjs";
import { Game} from "./Game.mjs";
import { Computer } from "./Computer.mjs";
import { Memory } from "./Memory.mjs";

function computerTurn() {
  // 1) Choose cell to mark from empty cells:
  let emptyCells = Cells.emptyCells(),
      element = Computer.choose(emptyCells);

      if (!element) return; // Only happens if emptyCells is empty

  
  // 2) Temporarily disable the cells:
      Cells.disableEmpty();

  // 3) Raffle trough empty cells:
      if (emptyCells.length > 1) {
          let choose = setInterval(() => {
            Computer.randomize(emptyCells)
          }, 200);
        
          Sound.loop('#audio-roll');

          setTimeout(() => {
            clearInterval(choose)
            Sound.stop('#audio-roll');
          }, 5000)
      }

  // 4) Disable the chosen cell:
      Cells.detach(element);

  // 5) Mark the cell and update the board:
  let markTime = (emptyCells.length > 1) ? 5750 : 500;

      setTimeout(()=> {
        Cells.mark(element.querySelector(`.cell__svg-link`), Game.tokenComputer);
        Sound.play('#audio-generic-click');

        Game.origBoard[element.id[5]] = Game.tokenComputer;
    
        // 6) Check for a win / a tie:
        setTimeout(() => {
          let result = Game.checkWin(Game.origBoard, Game.tokenComputer);
              if (result) {
                Game.showWinner(result);
                return
              }

              if (!Cells.emptyCells().length) {
                result = {winner:'tie', combo: null};
                Game.showWinner(result);
                return;
              }
        }, 750)

      Game.changeTurn();

      sessionStorage.setItem('board', JSON.stringify(Game.origBoard));
      sessionStorage.setItem('turn', Game.turn);

    }, markTime)
  
  // 7) Re-enable cells
  setTimeout(() => {
    Cells.enableEmpty();
  }, (markTime + 250))
}

export {computerTurn}