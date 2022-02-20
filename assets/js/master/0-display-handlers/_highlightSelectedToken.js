import { tokens } from "../../_global.js";
import { hideReminder } from "./_displayReminder.js";

function highlightSelected(e) {
  if (e.target === tokens.cross) {
    tokens.cross.classList.add("start-menu__token--selected");
    tokens.circle.classList.remove("start-menu__token--selected");
  } else {
    tokens.circle.classList.add("start-menu__token--selected");
    tokens.cross.classList.remove("start-menu__token--selected");
  }

  hideReminder();
}

export { highlightSelected };
