import { sideEffects } from "../../_global.js";

function displayReminder() {
  sideEffects.reminderMsg.classList.add("active");
}

function hideReminder() {
  sideEffects.reminderMsg.classList.remove("active");
}

export { displayReminder, hideReminder };
