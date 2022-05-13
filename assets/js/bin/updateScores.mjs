function updateScores(result) {
  const counterCross = document.querySelector("#counter--cross"),
        counterCircle = document.querySelector("#counter--circle"),
        counterTies = document.querySelector("#counter--ties");

  if (result == 'tie') {
    counterTies.textContent = +counterTies.textContent + 1
  }

  if (result == 'X') {
    counterCross.textContent = +counterCross.textContent + 1
  }

  if (result == "O") {
    counterCircle.textContent = +counterCircle.textContent + 1
  }
}

export {updateScores}