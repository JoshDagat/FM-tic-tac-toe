import { audio } from "./audio.mjs";
import { Cells } from "./Cell.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Result } from "./Result.mjs";

const Game = {
  // Game parameters:
  origBoard : [],
  prevSession : false,
  tokenComputer : "O",
  tokenPlayer1 : "X",
  turn: "X",
  type: "PvP",

  // Win Conditions
  combos: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ],

  // Useful DOMS
  cancelResetBtn : document.querySelector('.modal-reset .btn--denied'),
  confirmResetBtn : document.querySelector('.modal-reset .btn--affirmative'),
  newGameBtns : document.querySelectorAll('.btn--sm'),
  nextRndBtns : document.querySelectorAll('.btn__next-round'),
  quitBtns : document.querySelectorAll('.btn__quit-game'),
  resetBtn : document.querySelector('.btn-reset'),
  saveSettingsBtn : document.querySelector('.modal-settings__save-btn'),
  settingsBtn : document.querySelector('.btn-settings'),
  tokenContainer : document.querySelector('.game-tokens__choices'),
  tokens : document.querySelectorAll('.choice-token'),

  // Game methods:
  init : function(e) {  
    this.origBoard = Array.from(Array(9).keys());

    this.setType(e.target.classList);
    this.setTokens();
    this.show('.main-game');
    this.hide('.start-menu');
  },

  attachListeners : function attachListeners() {
    this.cancelResetBtn.addEventListener('click', () => {
      this.hide(`#modal-reset`);
    });

    this.confirmResetBtn.addEventListener('click', () => {
      this.reset();
    });

    for (let btn of this.newGameBtns) {
      btn.addEventListener('click', (e) => {
        Game.start(e);

        if (Game.type === 'PvC' && Game.tokenComputer === "X") {
          computerTurn();
        };
      });
    };

    for (let btn of this.nextRndBtns) {
      btn.addEventListener('click', (e) => {
        let id = (e.target.classList.contains(tied)) ? '#modal-tied-result' : 'modal-base-result'
        
        Game.hide(id);
        Cells.reset();
      });
    };

    this.tokenContainer.addEventListener('click', (e) => this.selectToken(e.target.classList));

  },

  changeTurn : function changeTurn() {
    let ti = document.querySelector('.turn-indicator__svg-link')
    if (Game.turn === "X") {
      Game.turn = "O";
      ti.setAttribute('href', '#svg-indicator--circle');
    } else if (Game.turn === "O") {
      Game.turn = "X";
      ti.setAttribute('href', '#svg-indicator--cross');
    }
  },

  start : function(e) {
    if (this.tokenContainer.classList.length === 1) {
      this.show('.game-tokens__alert')
      audio.play('#audio-lose');
      return;
    }

    this.init(e);
    Cells.init();
    audio.play('#audio-select');
    this.storeSession();
  },

  show : function(id) {
    let node = document.querySelector(`${id}`);
        node.classList.add('active');
  },

  hide : function(id) {
    let node = document.querySelector(`${id}`);
        node.classList.remove('active');
  },

  setType : function(btn) {
    if (btn.contains('btn--ng-pvc')) {
      this.type = 'PvC'
    }
  },

  setTokens : function() {
    if (this.tokenContainer.classList.contains('circle-selected')) {
      this.tokenPlayer1 = "O";
      this.tokenComputer = "X"
    }
  },

  selectToken : function (arr) {
    this.hide('.game-tokens__alert');
    this.tokenContainer.classList = 'game-tokens__choices'

    if (arr.contains('cross')) {
      this.tokenContainer.classList.add('cross-selected');
    }

    if (arr.contains('circle')) {
      this.tokenContainer.classList.add('circle-selected');
    }

    audio.play('#audio-generic-click')
  },
  
  storeSession : function() {
    sessionStorage.setItem('board', JSON.stringify(this.origBoard));
    sessionStorage.setItem('turn', this.turn);
  },

  checkWin : function(board, player) {
    let outcome = {};

    let marked = [];
        for (let i = 0; i < board.length; i++) {
          if (board[i] === player) {
            marked.push(i);
          }
        }

        for (let combo of this.combos) {
          if (combo.every(elem => marked.indexOf(elem) > -1 )) {
            outcome.winner = player;
            outcome.combo = combo;
            return outcome
          }
        }
  },

  checkTie : function() {
    if (!Cells.emptyCells()) {
      return 'tie'
    }
  },

  updateScores : function (result) {
    let boards = document.querySelectorAll('.scoreboard__counter');

        for (let board of boards) {
          if (board.classList.contains(result)) {
            board.textContent = +boards.textContent + 1;
          };
        }
  },

  highlightWin: function(result) {
    let {winner, combo} = result;
    
    for (let i = 0; i < combo.length; i++) {
      let cell = document.querySelector(`#cell-${combo[i]}`),
          svg = cell.querySelector('.cell__svg-link'),    
          time = (i + 1) * 125;
      
          setTimeout(()=> {
            if (winner === 'X') {
              cell.style.backgroundColor = '#31C3BD';
              svg.setAttribute('href', '#cross--win');
            }

            if (winner === 'O') {
              cell.style.backgroundColor = '#F2B137';
              svg.setAttribute('href', '#circle--win')
            }

            audio.play('#audio-select')
          }, time)
    }
  },

  reset : function reset() {
    let boards = document.querySelectorAll('.scoreboard__counter');
        for (let board of boards) {
          board.textContent = 0;
        }

        Cells.reset();

        this.tokenContainer.classList = 'game-tokens__choices';
        this.hide('#modal-reset');
        this.hide('.main-game');
        this.show('.start-menu');
  },

  showWinner : function(result) {
    setTimeout(() => {
      if (result === 'tie') {
        Result.showTied();
      } else {
        Result.setVarMsg(result.winner);
        Result.setSVG(result.winner);
        Result.showWin();
        Game.highlightWin(result);
      }

      Game.updateScores(result);
    }, 750)
  },

  nextRound : function() {},

  quit : function() {
  },
}

export {Game}