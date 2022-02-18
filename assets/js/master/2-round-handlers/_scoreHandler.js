import { globals } from "./../../_global.js";

function handleScores() {
  const result = globals.roundWinner;

  if (result === "cross") {
    updateCross();
  } else if (result === "circle") {
    updateCircle();
  } else if (result === "tied") {
    updateTies();
  }
}

function updateCross() {
  let countCross = +globals.elements.crossCounter.textContent;
  globals.elements.crossCounter.textContent = ++countCross;
}
function updateTies() {
  let countTies = +globals.elements.tiesCounter.textContent;
  globals.elements.tiesCounter.textContent = ++countTies;
}

function updateCircle() {
  let countCircle = +globals.elements.circleCounter.textContent;
  globals.elements.circleCounter.textContent = ++countCircle;
}

export { handleScores };
