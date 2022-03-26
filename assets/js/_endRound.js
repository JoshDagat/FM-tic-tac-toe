function endRound(result) {
  disableAllCells();
  // tally score
  // show modal
  if (result == "cross") {
    showModalCrossWins();
  } else if (result == "circle") {
    showModalCircleWins();
  } else if (result == "ties") {
    showModalTiedRound();
  }
}

function disableAllCells() {
  const playCells = document.querySelectorAll(".play-cell");

  playCells.forEach((cell) => {
    cell.style.pointerEvents = "none";
  });
}

function showModalCrossWins() {
  console.log("cross wins");
}
function showModalCircleWins() {
  console.log("circle wins");
}
function showModalTiedRound() {
  console.log("tied");
}
export { endRound };
