import { Game } from "./Game.mjs";
import { Cells} from "./Cell.mjs"
import { Result } from "./Result.mjs";
import { Computer } from "./Computer.mjs";
import { computerTurn } from "./computerTurn.mjs";

Game.attachListeners();

let newGameBtns = document.querySelectorAll('.btn--sm');
    newGameBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        Game.start(e)
        
        if (Game.type === 'PvC' && Game.tokenComputer === 'X') {
          computerTurn();
        }
      })
    })

// let tokenChoices = document.querySelectorAll('.choice-token');
//     tokenChoices.forEach(token => {
//       token.addEventListener('click', (e) => {
//         Game.selectToken(e.target.classList)
//       })
//     })
