import { GAME_STATE as GS } from "./gameState.mjs";

const WIN_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function checkWin(board) {
  let result;

  let O_PLAYS = [],
      X_PLAYS = [],
      availableSpots = board.filter(cell => typeof cell === 'number');
  
  board.forEach((cell, index) => {
    if (cell == "X") {
      X_PLAYS.push(index)
    }

    if (cell == "O") {
      O_PLAYS.push(index)
    }
  })

  for (let condition of WIN_CONDITIONS) {
    let didCrossWin = condition.every(elem => X_PLAYS.indexOf(elem) > -1),
        didCircleWin = condition.every(elem => O_PLAYS.indexOf(elem) > -1);

    if (didCrossWin) {
      result = "X";
      return result
    } else if (didCircleWin) {
      result = "O"
      return result
    }
  }

  if (availableSpots.length === 0) {
    result = 'tie'
    return result
  }
}

export {checkWin}