import { globals } from "./../../_global.js";
import { disableFields, enableFields } from "./_fieldsHandler.js";

function checkWinner() {
  const a1 = globals.elements.a1.getAttribute("data-value"),
    a2 = globals.elements.a2.getAttribute("data-value"),
    a3 = globals.elements.a3.getAttribute("data-value"),
    b1 = globals.elements.b1.getAttribute("data-value"),
    b2 = globals.elements.b2.getAttribute("data-value"),
    b3 = globals.elements.b3.getAttribute("data-value"),
    c1 = globals.elements.c1.getAttribute("data-value"),
    c2 = globals.elements.c2.getAttribute("data-value"),
    c3 = globals.elements.c3.getAttribute("data-value");

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
    a3 === "1" && b2 === "1" && c3 === "1", // diag2x
  ];

  const circleWins = [
    // Horizontal O wins
    a1 === "0" && a2 === "0" && a3 === "0", // row1Ho
    b1 === "0" && b2 === "0" && b3 === "0", // row2Ho
    c1 === "0" && c2 === "0" && c3 === "0", // row3Ho
    // Vertical O wins
    a1 === "0" && b1 === "0" && c1 === "0", // col1Vo
    a2 === "0" && b2 === "0" && c2 === "0", // col2Vo
    a3 === "0" && b3 === "0" && c3 === "0", // col3Vo
    // Diagonal O wins
    a1 === "0" && b2 === "0" && c3 === "0", // diag1o
    a3 === "0" && b2 === "0" && c3 === "0", // diag2o
  ];

  if (crossWins.some((cond) => cond)) {
    disableFields();
  } else if (circleWins.some((cond) => cond)) {
    disableFields();
  }
}

export { checkWinner };
