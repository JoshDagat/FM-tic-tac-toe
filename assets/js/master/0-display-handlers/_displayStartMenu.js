import { containersUI } from "../../_global.js";

function displayStartMenu() {
  containersUI.startMenu.classList.remove("hidden");
}

function hideStartMenu() {
  containersUI.startMenu.classList.add("hidden");
}

export { displayStartMenu, hideStartMenu };
