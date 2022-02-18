import { sideEffects } from "../../_global.js";

const reminder = sideEffects.reminderMsg;

function displayReminder() {
  reminder.classList.add("active");
}

function hideReminder() {
  reminder.classList.remove("active");
}

export { displayReminder, hideReminder };
