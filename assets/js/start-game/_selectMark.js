import { globals } from "../_global.js";

const elements = globals.elements;

elements.tokens.forEach((token) => {
  token.addEventListener("click", selectMark);
});

function selectMark(e) {
  e.target.classList.toggle("start-menu__mark--selected");

  if (e.target === elements.crossToken) {
    if (elements.circleToken.classList.contains("start-menu__mark--selected")) {
      elements.circleToken.classList.remove("start-menu__mark--selected");
    }
  } else {
    if (elements.crossToken.classList.contains("start-menu__mark--selected")) {
      elements.crossToken.classList.remove("start-menu__mark--selected");
    }
  }
}

export default selectMark;
