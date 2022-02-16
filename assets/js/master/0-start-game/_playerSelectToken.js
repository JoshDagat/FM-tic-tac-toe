/*
  This function handles the user choosing cross or circle as their token.
*/

import { globals } from "./../../_global.js";

const choiceTokens = globals.elements.choiceTokens,
  choiceCircle = globals.elements.choiceCircle,
  choiceCross = globals.elements.choiceCross,
  requireTokensMsg = globals.elements.requireTokensMsg;

choiceTokens.forEach((token) => {
  token.addEventListener("click", playerSelectToken);
});

function playerSelectToken(e) {
  highlightSelected(e);
  hideReminder();
  toggleHighlight(e);
}

function highlightSelected(e) {
  e.target.classList.toggle("start-menu__mark--selected");
}

function hideReminder() {
  requireTokensMsg.classList.remove("active");
}

function toggleHighlight(e) {
  // Removes highlight from token not selected (if highlighted)
  if (e.target === choiceCross) {
    choiceCircle.classList.remove("start-menu__mark--selected");
  } else {
    choiceCross.classList.remove("start-menu__mark--selected");
  }
}

export { playerSelectToken };
