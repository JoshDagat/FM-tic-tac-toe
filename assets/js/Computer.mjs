import { Cells } from "./Cell.mjs"
import { Game } from "./Game.mjs";

const Computer = {
  
  choose : function choose(cells) {
    let chance = Math.floor(Math.random() * 10.5),
        id,
        index,
        element;
        if (chance > 8) {
          index = Math.floor(Math.random() * cells.length);
          id = cells[index],
          element = document.querySelector(`#cell-${id}`);
        }

        if (chance <= 8) {
          id = Computer.minimax(Game.origBoard, Game.tokenComputer);
          element = document.querySelector(`#cell-${id.index}`);
        }

        return element;
  }, 

  minimax: function (newBoard, player) {
    const emptyCells = Cells.emptyCells(newBoard);

    let outcome = Game.checkWin(newBoard, player);

        if (outcome?.winner === Game.tokenPlayer1) {
          return {score: -10};
        } else if (outcome?.winner === Game.tokenComputer) {
          return {score : 10};
        } else if (emptyCells.length === 0) {
          return {score : 0}
        }
    
    let moves = [];
        for (let i = 0; i < emptyCells.length; i++) {
          let move = {};
              move.index = emptyCells[i],
              newBoard[move.index] = player;
          
          if (player === Game.tokenComputer) {
            let result = Computer.minimax(newBoard, Game.tokenPlayer1);
                move.score = result.score;
          } else {
            let result = Computer.minimax(newBoard, Game.tokenComputer);
                move.score = result.score;
          }

          newBoard[move.index] = move.index;
          moves.push(move)
        }
    
    let bestMove;
        if (player === Game.tokenComputer) {
          let bestScore = -10000;
              for (let i = 0; i < moves.length; i++) {
                if(moves[i].score > bestScore) {
                  bestScore = moves[i].score;
                  bestMove = i;
                }
              }
        } else {
          let bestScore = 10000;
              for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                  bestScore = moves[i].score;
                  bestMove = i;
                }
              }
        }
    
    return moves[bestMove];
  },

  randomize : function (cells) {
      
      let i = Math.floor(Math.random() * cells.length),
          cell = document.querySelector(`#cell-${cells[i]} .cell__svg-link`);

          if (Game.tokenComputer === "X") {
            cell.setAttribute('href', '#cross')
          } else {
            cell.setAttribute('href', '#circle')
          }

          setTimeout(() => {
            cell.setAttribute('href', null)
          }, 500)
  },
}

export {Computer}