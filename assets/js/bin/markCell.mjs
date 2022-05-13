import { GAME_STATE as GS} from "./gameState.mjs";
import { showOutline, removeOutline } from "./toggleOutline.mjs";
import { playerClick } from "../playerClick.mjs";

function markCell(cell, player) {
  // 1) Handles minimax trying to take a turn with a full board:
  if (cell == null) return;

  // 2) Show appropriate SVG (cross x circle)
  let target = cell.querySelector(".cell__svg-link");

    if (player == "X") {
      target.setAttribute("href", "#cross")
      GS.turn = "O"
    } 
  
    else if (player == "O") {
      target.setAttribute("href", "#circle")
      GS.turn = "X"
    }

  // 3) Update the board.
  //    Note: cell.id[5] -> returns the number at the end of cell id.
  GS.mainBoard[cell.id[5]] = player

  // 3) Prevent events on the cell
  cell.removeEventListener("mouseleave", removeOutline)
  cell.removeEventListener("mouseenter", showOutline)
  cell.removeEventListener("click", playerClick)

  // 4) Change turn indicator
  const turnSVG = (GS.turn == "X") ? 
          "#svg-indicator--cross" : "#svg-indicator--circle";

  const turnIndicator = document.querySelector(".turn-indicator__svg-link");  
        turnIndicator.setAttribute("href", turnSVG)

  // 5) Save the new state of the board to sessionStorage:
  sessionStorage.setItem('board', JSON.stringify(GS.mainBoard));
  sessionStorage.setItem('turn', GS.turn);
}

export {markCell}