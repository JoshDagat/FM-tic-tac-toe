import { endRound } from "./endRound.mjs";
import { Game } from "../Game.mjs";
import { highlightWin } from "./highlightWin.mjs";
import { Result } from "../Result.mjs";
import { updateScores } from "./updateScores.mjs";

function showWinner(result) {

  setTimeout(() => {
    if (result.winner === 'tie') {
      Result.showTied()
    } else {
      Result.setVarMsg(result.winner);
      Result.setSVG(result.winner);
      Result.showWin();
    }

    Game.updateScores(result.winner)
    Game.detach()
  }, 750)
  
  Game.highlightWin(result);
}

export {showWinner}