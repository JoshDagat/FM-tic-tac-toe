import { GAME_STATE as GS } from "./gameState.mjs";

function reset() {
  // 1) Reset the token container:
  const tokenContainer = document.querySelector(".game-tokens__choices");
  tokenContainer.classList = "game-tokens__choices"

  // 2) Hide main game:
  const mainGame = document.querySelector(".main-game");
  mainGame.classList.remove("active")

  // 3) Show start-menu:
  const startMenu = document.querySelector(".start-menu");
  startMenu.classList.add("active");

  // 4) Reset turn-indicator:
  const turnIndicator = document.querySelector(".turn-indicator__svg-link");
  turnIndicator.setAttribute("href", "#svg-indicator--cross")

  // 5) Reset scoreboards
  const counters = document.querySelectorAll(".scoreboard__counter");
  counters.forEach(counter => counter.textContent = 0);

  GS.turn = "X"

  const audioRoll = document.querySelector('#audio-roll');
  audioRoll.pause();
  audioRoll.currentTime = 0;

  const audioBeep = document.querySelector("#audio-hover");
  audioBeep.currentTime = 0;
  audioBeep.play()
}

export {reset}