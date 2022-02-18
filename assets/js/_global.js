const gameState = {
  turn: 1,
  gameType: "",
  roundWinner: "",
  player1Token: "",
};

const buttons = {
  startBtnCPU: document.querySelector(".btn--new-game-cpu"),
  startBtnPlayer: document.querySelector(".btn--new-game-player"),
  resetBtn: document.querySelector(".main-game__reset-btn"),
  quitGameBtn: document.querySelector(".modal__quit-game"),
  nextRoundBtn: document.querySelector(".modal__next-round"),
};

const containersUI = {
  startMenu: document.querySelector(".start-menu"),
  mainGame: document.querySelector(".main-game"),
  modal: document.querySelector("modals__round-result"),
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

const tokens = {
  tokenArr: document.querySelectorAll(".token"),
  circle: document.querySelector(".start-menu__circle-token"),
  cross: document.querySelector(".start-menu__cross-token"),
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
  announcement: document.querySelector(".announcement-box__message"),
  circleSVG: document.querySelector(".modal--circle"),
  crossSVG: document.querySelector(".modal--cross "),
};

export {
  gameState,
  buttons,
  containersUI,
  playField,
  tokens,
  sideEffects,
  scoreBoard,
  modalComponents,
};
