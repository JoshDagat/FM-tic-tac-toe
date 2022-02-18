import { globals } from "./../../_global.js";

const indicatorCross = globals.elements.indicatorCross,
  indicatorCircle = globals.elements.indicatorCircle;

function toggleIndicator() {
  const turn = globals.turn;
  if (turn === 1) {
    indicatorCross.classList.add("active");
    indicatorCircle.classList.remove("active");
  } else {
    indicatorCircle.classList.add("active");
    indicatorCross.classList.remove("active");
  }
}

export { toggleIndicator };
