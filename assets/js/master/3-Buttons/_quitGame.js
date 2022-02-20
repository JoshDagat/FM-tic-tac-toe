import { resetGame } from "./_reset.js";
import { displayStartMenu } from "./../0-display-handlers/_displayStartMenu.js";

function quitGame() {
  resetGame();
  displayStartMenu();
}

export { quitGame };
