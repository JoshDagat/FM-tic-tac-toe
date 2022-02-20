import { playField } from "../../_global.js";

function disableFields() {
  playField.fields.forEach((field) => {
    field.style.pointerEvents = "none";
  });
}

function enableFields() {
  playField.fields.forEach((field) => {
    field.style.pointerEvents = "auto";
  });
}

export { disableFields, enableFields };
