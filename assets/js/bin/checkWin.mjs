
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
  let outcome = {};

  let O_PLAYS = [],
      X_PLAYS = [],
      availableSpots = board.filter(cell => typeof cell === 'number');
  
  board.forEach((cell, index) => {
    if (cell === "X") {
      X_PLAYS.push(index)
    }

    if (cell === "O") {
      O_PLAYS.push(index)
    }
  })

  for (let condition of WIN_CONDITIONS) {
    let didCrossWin = condition.every(elem => X_PLAYS.indexOf(elem) > -1),
        didCircleWin = condition.every(elem => O_PLAYS.indexOf(elem) > -1);

    if (didCrossWin) {
      outcome.winner = "X";
      outcome.combo = condition;
      return outcome
    } else if (didCircleWin) {
      outcome.winner = "O"
      outcome.combo = condition;
      return outcome
    }
  }

  if (availableSpots.length === 0) {
    outcome.winner = 'tie'
    return outcome
  }
}

export {checkWin}