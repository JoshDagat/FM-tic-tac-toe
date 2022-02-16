import { globals } from "./../../_global.js";

const playfield = globals.elements.playfield;

function disableFields() {
  playfield.forEach((field) => {
    field.style.pointerEvents = "none";
  });
}

function enableFields() {
  playfield.forEach((field) => {
    field.style.pointerEvents = "auto";
  });
}

export { disableFields, enableFields };
