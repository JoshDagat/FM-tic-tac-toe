import { Cells } from "./Cell.mjs";
import { audio } from "./audio.mjs";
import { Game} from "./Game.mjs";
import { Computer } from "./Computer.mjs";

function computerTurn() {
  // 1) Choose cell to mark from empty cells:
  let emptyCells = Cells.emptyCells(),
      element = Computer.choose(emptyCells);

      if (!element) return; // Only happens if emptyCells is empty

  
  // 2) Temporarily disable the cells:
      Cells.disable();

  // 3) Raffle trough empty cells:
      if (emptyCells.length > 1) {
          let choose = setInterval(() => {
            Computer.randomize(emptyCells)
          }, 200);
        
          audio.loop('#audio-roll');

          setTimeout(() => {
            clearInterval(choose)
            audio.stop('#audio-roll');
          }, 5000)
      }

  // 4) Disable the chosen cell:
      Cells.detach(element);

  // 5) Mark the cell and update the board:
  let markTime = (emptyCells.length > 1) ? 5750 : 500;

      setTimeout(()=> {
        Cells.mark(element.querySelector(`.cell__svg-link`), Game.tokenComputer);
        audio.play('#audio-generic-click');

        Game.origBoard[element.id[5]] = Game.tokenComputer;
    
        // 6) Check for a win / a tie:
        setTimeout(() => {
          let result = Game.checkWin(Game.origBoard, Game.tokenComputer);
              if (result) {
                Game.showWinner(result);
                return
              }

              if (!Cells.emptyCells().length) {
                result = 'tie';
                Game.showWinner(result);
                return;
              }
        }, 750)
    }, markTime)
  
  // 7) 
  Game.changeTurn();
  
  // 8) Re-enable cells
  setTimeout(() => {
    Cells.enable();
  }, (markTime + 250))
  console.log(Game.turn)
}

export {computerTurn}