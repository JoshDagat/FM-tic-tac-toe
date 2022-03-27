import { playField } from "./global.mjs";

function checkWinner() {
  // These fields can have either of the ff "data-value":
  //    1 - Field is marked with a cross
  //    2 - Field is marked with a circle
  //    0 - Field has yet to be marked
  const a1 = playField.a1.getAttribute("data-value"),
    a2 = playField.a2.getAttribute("data-value"),
    a3 = playField.a3.getAttribute("data-value"),
    b1 = playField.b1.getAttribute("data-value"),
    b2 = playField.b2.getAttribute("data-value"),
    b3 = playField.b3.getAttribute("data-value"),
    c1 = playField.c1.getAttribute("data-value"),
    c2 = playField.c2.getAttribute("data-value"),
    c3 = playField.c3.getAttribute("data-value");

  // Array containing "data-value" attribute for each field
  const fields = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

  // An array containing all the cross win conditions
  const crossWinConditions = [
    // Horizontal cross wins
    a1 === "1" && a2 === "1" && a3 === "1", // row1Hx
    b1 === "1" && b2 === "1" && b3 === "1", // row2Hx
    c1 === "1" && c2 === "1" && c3 === "1", // row3Hx
    // Vertical cross wins
    a1 === "1" && b1 === "1" && c1 === "1", // col1Vx
    a2 === "1" && b2 === "1" && c2 === "1", // col2Vx
    a3 === "1" && b3 === "1" && c3 === "1", // col3Vx
    // Diagonal cross wins
    a1 === "1" && b2 === "1" && c3 === "1", // diag1x
    a3 === "1" && b2 === "1" && c1 === "1", // diag2x
  ];

  // An array containing all the circle win conditions
  const circleWinConditions = [
    // Horizontal circle wins
    a1 === "2" && a2 === "2" && a3 === "2", // row1Ho
    b1 === "2" && b2 === "2" && b3 === "2", // row2Ho
    c1 === "2" && c2 === "2" && c3 === "2", // row3Ho
    // Vertical circle wins
    a1 === "2" && b1 === "2" && c1 === "2", // col1Vo
    a2 === "2" && b2 === "2" && c2 === "2", // col2Vo
    a3 === "2" && b3 === "2" && c3 === "2", // col3Vo
    // Diagonal circle wins
    a1 === "2" && b2 === "2" && c3 === "2", // diag1o
    a3 === "2" && b2 === "2" && c1 === "2", // diag2o
  ];

  // If even one of the crossWins condition returns true,
  // entire playField is disabled.
  const isCrossWinner = crossWinConditions.some((cond) => cond);
  if (isCrossWinner) {
    return "cross";
  }

  // If even one of the circleWins condition returns true,
  // entire playField is disabled.
  const isCircleWinner = circleWinConditions.some((cond) => cond);
  if (isCircleWinner) {
    return "circle";
  }

  // If all fields are marked (data vale != 0),
  // but no win conditions are arrived at,
  // result is a tie.
  if (fields.every((val) => val > "0")) {
    return "tie";
  }

  return false;
}

export { checkWinner };
