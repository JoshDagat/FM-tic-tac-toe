import { gameState } from "../_global.js";
import { changeTurn } from "../_changeTurn.js";

function markComputerCell() {
  const unmarkedFields = Array.from(
    document.querySelectorAll("[data-value='0']")
  );
  const choice = Math.floor(Math.random() * unmarkedFields.length);

  disableFields(unmarkedFields);

  const simulatePicking = setInterval(() => {
    pickCell(unmarkedFields);
  }, 500);

  setTimeout(() => {
    clearInterval(simulatePicking);
  }, 4000);

  setTimeout(() => {
    markCell(unmarkedFields, choice);
    changeTurn();
  }, 4250);

  setTimeout(() => {
    enableFields(unmarkedFields, choice);
  }, 5000);
}

function pickCell(choices) {
  const index = Math.floor(Math.random() * choices.length);

  const currField = choices[index];
  if (gameState.turn == 1) {
    currField.setAttribute("data-value", 1);
  } else {
    currField.setAttribute("data-value", 2);
  }

  setTimeout(() => {
    currField.setAttribute("data-value", 0);
  }, 250);
}

function markCell(choices, index) {
  const choice = choices[index];

  if (gameState.turn == 1) {
    choice.setAttribute("data-value", 1);
  } else {
    choice.setAttribute("data-value", 2);
  }
}

function disableFields(fields) {
  fields.forEach((field) => (field.style.pointerEvents = "none"));
}

function enableFields(fields, index) {
  fields.splice(index, 1);
  fields.forEach((field) => (field.style.pointerEvents = null));
}

export { markComputerCell };
