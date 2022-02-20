import { playField, gameState } from "../../_global.js";
import { updateScores } from "../2-round-handlers/_updateScores.js";
import { enableFields, disableFields } from "./_fieldsHandler.js";
import {
  displayCircleWins,
  displayCrossWins,
  displayTied,
} from "./../0-display-handlers/indexDisplay.js";

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
  const crossWins = [
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
  const circleWins = [
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
  if (crossWins.some((cond) => cond)) {
    disableFields();
    gameState.roundWinner = "cross";
    updateScores();
    displayCrossWins();
    console.log(gameState);

    return true;
  }
  // If even one of the circleWins condition returns true,
  // entire playField is disabled.
  else if (circleWins.some((cond) => cond)) {
    disableFields();
    gameState.roundWinner = "circle";
    updateScores();
    displayCircleWins();
    console.log(gameState);

    return true;
  }

  // If all fields are marked, but no win conditions return true
  // it is a tie.
  else if (fields.every((val) => val > "0")) {
    gameState.roundWinner = "tied";
    updateScores();
    displayTied();
    console.log(gameState);

    return true;
  }

  return false;
}

export { checkWinner };
