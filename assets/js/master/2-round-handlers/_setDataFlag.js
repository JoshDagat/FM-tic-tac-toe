import { globals } from "./../../_global.js";

function setDataFlag(e) {
  e.target.setAttribute("data-turn-flag", globals.turn);
}

export default setDataFlag;
