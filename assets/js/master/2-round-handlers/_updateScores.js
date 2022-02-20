import { gameState, scoreBoard } from "../../_global.js";

function updateScores() {
  const result = gameState.roundWinner;

  if (result === "cross") {
    updateCross();
  } else if (result === "circle") {
    updateCircle();
  } else if (result === "tied") {
    updateTies();
  }
}

function updateCross() {
  let x = +scoreBoard.counterCross.textContent;
  scoreBoard.counterCross.textContent = ++x;
}

function updateTies() {
  let t = +scoreBoard.counterTies.textContent;
  scoreBoard.counterTies.textContent = ++t;
}

function updateCircle() {
  let o = +scoreBoard.counterCircle.textContent;
  scoreBoard.counterCircle.textContent = ++o;
}

export { updateScores };
