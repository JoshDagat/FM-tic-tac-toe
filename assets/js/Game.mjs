import { audio } from "./audio.mjs";

const Game = {
  // Game parameters:
  origBoard : [],
  prevSession : false,
  tokenComputer : "O",
  tokenPlayer1 : "X",
  turn: "X",
  type: "PvP",

  // Useful DOMS
  tokenContainer : document.querySelector('.game-tokens__choices'),

  // Game methods:
  show : function(id) {
    let node = document.querySelector(`${id}`);
        node.classList.add('active');
  },

  hide : function(id) {
    let node = document.querySelector(`${id}`);
        node.classList.remove('active');
  },

  start : function() {
    if (this.tokenContainer.classList.length === 1) {
      this.alert();
      audio.play('#audio-lose');
      return;
    }
  },

  setType : function(btn) {
    if (btn.classList.contains('btn--ng-pvc')) {
      this.type = 'PvC'
    }
  },

  setTokens : function() {
    if (this.tokenContainer.classList.contains('circle-selected')) {
      this.tokenPlayer1 = "O";
      this.tokenComputer = "X"
    }
  },

  storeSession : function() {
    sessionStorage.setItem('board', JSON.stringify(this.origBoard));
    sessionStorage.setItem('turn', this.turn);
  },

  init : function() {
    this.origBoard = Array.from(Array(9).keys());

    this.setType();
    this.setTokens();
    this.show('.main-game');
    this.hide('.start-menu');
  },

  nextRound : function() {},

  quit : function(){},
}

export {Game}