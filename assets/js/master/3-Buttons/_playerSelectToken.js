import { globals } from "../../_global.js";

const choiceTokens = globals.elements.choiceTokens;

choiceTokens.forEach((token) => {
  token.addEventListener("click", playerSelectToken);
});

function playerSelectToken(e) {
  highlightSelected(e);
  hideReminder();
  toggleHighlight(e);
}

export { playerSelectToken };
