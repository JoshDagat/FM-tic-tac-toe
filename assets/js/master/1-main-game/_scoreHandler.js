import { globals } from "./../../_global.js";

function handleScores(result) {
  if (result === "cross") {
    updateCross();
  } else if (result === "circle") {
    updateCircle();
  } else {
    updateTies;
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

updateCross();
console.log(globals.elements.crossCounter);

export { handleScores };
