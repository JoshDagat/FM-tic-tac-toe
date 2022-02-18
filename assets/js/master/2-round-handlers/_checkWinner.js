import { globals } from "./../../_global.js";
import { disableFields, enableFields } from "./_fieldsHandler.js";
import { announceWinner } from "../0-display-handlers/_displayRoundResult.js";
import { handleScores } from "./_scoreHandler.js";

function checkWinner() {
  // Playing fields:
  const a1 = globals.elements.a1.getAttribute("data-value"),
    a2 = globals.elements.a2.getAttribute("data-value"),
    a3 = globals.elements.a3.getAttribute("data-value"),
    b1 = globals.elements.b1.getAttribute("data-value"),
    b2 = globals.elements.b2.getAttribute("data-value"),
    b3 = globals.elements.b3.getAttribute("data-value"),
    c1 = globals.elements.c1.getAttribute("data-value"),
    c2 = globals.elements.c2.getAttribute("data-value"),
    c3 = globals.elements.c3.getAttribute("data-value");

  const fields = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

  // Win conditions for cross
  const crossWins = [
    // Horizontal X wins
    a1 === "1" && a2 === "1" && a3 === "1", // row1Hx
    b1 === "1" && b2 === "1" && b3 === "1", // row2Hx
    c1 === "1" && c2 === "1" && c3 === "1", // row3Hx
    // Vertical X wins
    a1 === "1" && b1 === "1" && c1 === "1", // col1Vx
    a2 === "1" && b2 === "1" && c2 === "1", // col2Vx
    a3 === "1" && b3 === "1" && c3 === "1", // col3Vx
    // Diagonal X wins
    a1 === "1" && b2 === "1" && c3 === "1", // diag1x
    a3 === "1" && b2 === "1" && c1 === "1", // diag2x
  ];

  // Win conditions for circle
  const circleWins = [
    // Horizontal O wins
    a1 === "2" && a2 === "2" && a3 === "2", // row1Ho
    b1 === "2" && b2 === "2" && b3 === "2", // row2Ho
    c1 === "2" && c2 === "2" && c3 === "2", // row3Ho
    // Vertical O wins
    a1 === "2" && b1 === "2" && c1 === "2", // col1Vo
    a2 === "2" && b2 === "2" && c2 === "2", // col2Vo
    a3 === "2" && b3 === "2" && c3 === "2", // col3Vo
    // Diagonal O wins
    a1 === "2" && b2 === "2" && c3 === "2", // diag1o
    a3 === "2" && b2 === "2" && c1 === "2", // diag2o
  ];

  if (crossWins.some((cond) => cond)) {
    disableFields();
    globals.roundWinner = "cross";
  } else if (circleWins.some((cond) => cond)) {
    disableFields();
    globals.roundWinner = "circle";
  } else if (fields.every((val) => val > "0")) {
    globals.roundWinner = "tied";
  }

  handleScores();
  announceWinner();
}

export { checkWinner };
