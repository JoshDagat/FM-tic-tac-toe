import { checkWin } from "./checkWin.mjs";
import { GAME_STATE as GS } from "./gameState.mjs";

function minimax(newBoard, player) {
  const availSpots = newBoard.filter(cell => typeof cell == "number");

  let outcome = checkWin(newBoard)
  if (outcome?.winner == GS.player1Token) {
    return {score: -10}
  } else if (outcome?.winner == GS.computerToken) {
    return {score: 10}
  } else if (availSpots.length === 0) {
    return {score: 0}
  }

  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = availSpots[i]
    newBoard[move.index] = player

    if (player == GS.computerToken) {
      let result = minimax(newBoard, GS.player1Token);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, GS.computerToken);
      move.score = result.score
    }

    newBoard[move.index] = move.index;

    moves.push(move)
  }

  let bestMove;
  if (player === GS.computerToken) {
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