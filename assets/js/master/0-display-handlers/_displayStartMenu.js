import { containersUI } from "../../_global.js";

function displayStartMenu() {
  containersUI.startMenu.classList.remove("hidden");
  containersUI.mainGame.classList.add("hidden");
  containersUI.modal.classList.remove("modal--active");
}

export { displayStartMenu };
