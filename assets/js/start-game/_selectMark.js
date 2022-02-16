/*
  This function handles the user choosing cross or circle as their token.
*/

import { globals } from "../_global.js";

const tokens = globals.elements.tokens,
  circleToken = globals.elements.circleToken,
  crossToken = globals.elements.crossToken,
  requireTokens = globals.elements.requireTokens;

tokens.forEach((token) => {
  token.addEventListener("click", selectMark);
});

function selectMark(e) {
  e.target.classList.toggle("start-menu__mark--selected");
  requireTokens.classList.remove("active");

  if (e.target === crossToken) {
    if (circleToken.classList.contains("start-menu__mark--selected")) {
      circleToken.classList.remove("start-menu__mark--selected");
    }
  } else {
    if (crossToken.classList.contains("start-menu__mark--selected")) {
      crossToken.classList.remove("start-menu__mark--selected");
    }
  }
}

export default selectMark;
