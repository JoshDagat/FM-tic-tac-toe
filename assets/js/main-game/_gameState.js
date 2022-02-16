import { globals } from "../_global.js";
import { disableFields, enableFields } from "./_fieldsHandler.js";

function gameState() {
  const a1 = globals.elements.a1.getAttribute("data-value"),
    a2 = globals.elements.a2.getAttribute("data-value"),
    a3 = globals.elements.a3.getAttribute("data-value"),
    b1 = globals.elements.b1.getAttribute("data-value"),
    b2 = globals.elements.b2.getAttribute("data-value"),
    b3 = globals.elements.b3.getAttribute("data-value"),
    c1 = globals.elements.c1.getAttribute("data-value"),
    c2 = globals.elements.c2.getAttribute("data-value"),
    c3 = globals.elements.c3.getAttribute("data-value"),
    playfield = globals.elements.playfield;

  // Horizontal cross wins
  if (a1 === "1" && a2 === "1" && a3 === "1") {
    disableFields();
  } else if (b1 === "1" && b2 === "1" && b3 === "1") {
    disableFields();
  } else if (c1 === "1" && c2 === "1" && c3 === "1") {
    disableFields();
  }
  // Vertical cross wins
  else if (a1 === "1" && b1 === "1" && c1 === "1") {
    disableFields();
  } else if (a2 === "1" && b2 === "1" && c2 === "1") {
    disableFields();
  } else if (a3 === "1" && b3 === "1" && c3 === "1") {
    disableFields();
  }
  // Diagonal cross wins
  else if (a1 === "1" && b2 === "1" && c3 === "1") {
    disableFields();
  } else if (a3 === "1" && b2 === "1" && c3 === "1") {
    disableFields();
  }
  // Horizontal cross wins
  else if (a1 === "0" && a2 === "0" && a3 === "0") {
    disableFields();
  } else if (b1 === "0" && b2 === "0" && b3 === "0") {
    disableFields();
  } else if (c1 === "0" && c2 === "0" && c3 === "0") {
    disableFields();
  }
  // Vertical cross wins
  else if (a1 === "0" && b1 === "0" && c1 === "0") {
    disableFields();
  } else if (a2 === "0" && b2 === "0" && c2 === "0") {
    disableFields();
  } else if (a3 === "0" && b3 === "0" && c3 === "0") {
    disableFields();
  }
  // Diagonal cross wins
  else if (a1 === "0" && b2 === "0" && c3 === "0") {
    disableFields();
  } else if (a3 === "0" && b2 === "0" && c3 === "0") {
    disableFields();
  }
}

export { gameState };
