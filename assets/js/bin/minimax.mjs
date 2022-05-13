import { checkWin } from "./checkWin.mjs";
import { Game } from "../Game.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";

function minimax(newBoard, player) {
  const emptyCells = Cells.emptyCells(newBoard);

  let outcome = checkWin(newBoard, player);

      if (outcome?.winner === Game.tokenPlayer1) {
        return {score: -10}
      } else if (outcome?.winner === Game.tokenComputer) {
        return {score: 10}
      } else if (emptyCells.length === 0) {
        return {score: 0}
      }

  let moves = [];
      for (let i = 0; i < emptyCells.length; i++) {
        let move = {};
            move.index = emptyCells[i]
            newBoard[move.index] = player
      
        if (player == Game.tokenComputer) {
          let result = minimax(newBoard, Game.tokenPlayer1);
              move.score = result.score;
        } else {
          let result = minimax(newBoard, Game.tokenComputer);
          move.score = result.score
        }
      
        newBoard[move.index] = move.index;
        moves.push(move)
      }

  let bestMove;
      if (player === Game.tokenComputer) {
        let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
              if (moves[i].score > bestScore) {
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
}

export {minimax}