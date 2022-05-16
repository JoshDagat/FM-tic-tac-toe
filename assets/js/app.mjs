import { Attachments } from "./Attachments.mjs";
import {Memory} from './Memory.mjs';

window.onload = function init() {
  Memory.checkStorage();
}

Attachments.init();

