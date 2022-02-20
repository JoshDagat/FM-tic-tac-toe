import { containersUI } from "../../_global.js";

function displayPlayArea() {
  containersUI.mainGame.classList.remove("hidden");
  containersUI.startMenu.classList.add("hidden");
  containersUI.modal.classList.remove("modal--active");
}

export { displayPlayArea };
