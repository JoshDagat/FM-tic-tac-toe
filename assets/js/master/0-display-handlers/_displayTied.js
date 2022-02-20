import { modalComponents, containersUI } from "../../_global.js";

function displayTied() {
  // Hide SVGs
  modalComponents.circleSVG.classList.remove("active");
  modalComponents.crossSVG.classList.remove("active");

  // Adjust text content
  modalComponents.roundMsg.textContent = "";
  modalComponents.announcement.textContent = "ROUND TIED";
  modalComponents.announcement.style.color = "#A8BFC9";

  // Display modal
  containersUI.modal.classList.add("modal--active");
}

export { displayTied };
