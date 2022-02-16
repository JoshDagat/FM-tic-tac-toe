let globals = {
  turn: 1,
  gameType: "CPU",
  elements: {
    /* 
    These elements are found on the start menu:
     */
    startMenu: document.querySelector(".start-menu"),

    // Tokens:
    choiceCross: document.querySelector(".start-menu__cross-mark"),
    choiceCircle: document.querySelector(".start-menu__circle-mark"),
    choiceTokens: document.querySelectorAll(".mark"),

    // Start Btns:
    startBtnCPU: document.querySelector(".btn--new-game-cpu"),
    startBtnPlayer: document.querySelector(".btn--new-game-player"),

    requireTokensMsg: document.querySelector(".start-menu__require-token"),

    /* 
    These elements are found in "main-game"
     */

    mainGame: document.querySelector(".main-game"),
    resetBtn: document.querySelector(".main-game__reset-btn"),

    // SVG Logos for turn indicators:
    indicatorCross: document.querySelector(".indicator--cross"),
    indicatorCircle: document.querySelector(".indicator--circle"),

    // Collection of playing fields:
    playfield: document.querySelectorAll(".main-game__play-cell"),
    a1: document.querySelector("#a1"),
    a2: document.querySelector("#a2"),
    a3: document.querySelector("#a3"),
    b1: document.querySelector("#b1"),
    b2: document.querySelector("#b2"),
    b3: document.querySelector("#b3"),
    c1: document.querySelector("#c1"),
    c2: document.querySelector("#c2"),
    c3: document.querySelector("#c3"),

    // Scoreboards
    crossID: document.querySelector("#cross-player"),
    circleID: document.querySelector("#circle-player"),
    crossCounter: document.querySelector(".main-game__cross-counter"),
    tiesCounter: document.querySelector(".main-game__ties-counter"),
    circleCounter: document.querySelector(".main-game__circle-counter"),
  },

  // Modals
};

export { globals };
