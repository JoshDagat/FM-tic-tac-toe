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
      X_PLAYS = [];
  
  board.forEach((cell, index) => {
    if (cell == "X") {
      X_PLAYS.push(index)
    }

    if (cell == "O") {
      O_PLAYS.push(index)
    }
  })

  WIN_CONDITIONS.forEach(condition => {
    if (condition.every(elem => X_PLAYS.indexOf(elem) > -1)) {
      result = "X"
    } else if (condition.every(elem => O_PLAYS.indexOf(elem) > -1)) {
      result = "O"
    }
  })

  return result
}

export {checkWin}