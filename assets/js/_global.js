let globals = {
  turn: 1,
  elements: {
    // These elements are found on the start menu:
    crossToken: document.querySelector(".start-menu__cross-mark"),
    circleToken: document.querySelector(".start-menu__circle-mark"),
    startMenu: document.querySelector(".start-menu"),
    mainGame: document.querySelector(".main-game"),
    startBtnCPU: document.querySelector(".btn--new-game-cpu"),
    startBtnPlayer: document.querySelector(".btn--new-game-player"),
    tokens: document.querySelectorAll(".mark"),
    requireTokens: document.querySelector(".start-menu__require-token"),
  },
};

export { globals };
