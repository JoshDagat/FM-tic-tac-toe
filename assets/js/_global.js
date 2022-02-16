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

    // These elements are found in "main-game"
    a1: document.querySelector("#a1"),
    a2: document.querySelector("#a2"),
    a3: document.querySelector("#a3"),
    b1: document.querySelector("#b1"),
    b2: document.querySelector("#b2"),
    b3: document.querySelector("#b3"),
    c1: document.querySelector("#c1"),
    c2: document.querySelector("#c2"),
    c3: document.querySelector("#c3"),
    playfield: document.querySelectorAll(".main-game__play-cell"),
  },
};

export { globals };
