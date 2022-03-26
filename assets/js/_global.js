const gameState = {
  turn: 1,
  gameType: "PvP",
  roundWinner: "",
  player1Token: "circle",
};

const containersUI = {
  startMenu: document.querySelector(".start-menu"),
  mainGame: document.querySelector(".main-game"),
  modal: document.querySelector(".modals__round-result"),
};

const playField = {
  fields: document.querySelectorAll(".main-game__play-cell"),
  a1: document.querySelector("#a1"),
  a2: document.querySelector("#a2"),
  a3: document.querySelector("#a3"),
  b1: document.querySelector("#b1"),
  b2: document.querySelector("#b2"),
  b3: document.querySelector("#b3"),
  c1: document.querySelector("#c1"),
  c2: document.querySelector("#c2"),
  c3: document.querySelector("#c3"),
};

const sideEffects = {
  reminderMsg: document.querySelector(".start-menu__reminder-token"),
  indicatorCross: document.querySelector(".indicator--cross"),
  indicatorCircle: document.querySelector(".indicator--circle"),
};

const scoreBoard = {
  labelCross: document.querySelector("#cross-player"),
  labelCircle: document.querySelector("#circle-player"),
  counterCross: document.querySelector(".main-game__cross-counter"),
  counterCircle: document.querySelector(".main-game__circle-counter"),
  counterTies: document.querySelector(".main-game__ties-counter"),
};

const modalComponents = {
  roundMsg: document.querySelector(".announcement-box__message"),
  announcement: document.querySelector(".announcement-box__winner-text"),
  circleSVG: document.querySelector(".modal--circle"),
  crossSVG: document.querySelector(".modal--cross"),
};

export {
  gameState,
  containersUI,
  playField,
  sideEffects,
  scoreBoard,
  modalComponents,
};
