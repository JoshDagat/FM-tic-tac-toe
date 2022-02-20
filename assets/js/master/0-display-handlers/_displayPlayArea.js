import { containersUI } from "../../_global.js";

function displayPlayArea() {
  containersUI.mainGame.classList.remove("hidden");
}

function hidePlayArea() {
  containersUI.mainGame.classList.add("hidden");
}

export { displayPlayArea, hidePlayArea };
