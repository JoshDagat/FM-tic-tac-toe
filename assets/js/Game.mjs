import { Sound } from "./Sound.mjs";
import { Cells } from "./Cell.mjs";
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
  tokenContainer : document.querySelector('.game-tokens__choices'),
  tokens : document.querySelectorAll('.choice-token'),

  // Game methods:
  init : function(e) {  
    Game.origBoard = Array.from(Array(9).keys());

    Game.setType(e.target.classList);
    Game.setTokens();
    Game.show('.main-game');
    Game.hide('.start-menu');

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
      Game.show('.game-tokens__alert')
      Sound.play('#audio-lose');
      return;
    }

    Game.init(e);
    Sound.play('#audio-select');
    Game.storeSession();
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
      Game.type = 'PvC'
    }
  },

  setTokens : function() {
    if (Game.tokenContainer.classList.contains('circle-selected')) {
      Game.tokenPlayer1 = "O";
      Game.tokenComputer = "X"
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

    Sound.play('#audio-generic-click')
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
          if (board.classList.contains(result.winner)) {
            board.textContent = +board.textContent + 1;
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

            console.log(winner, Game.tokenComputer, Game.type)

            if (Game.type === 'PvC' && Game.tokenComputer === winner) {
              Sound.play('#audio-lose');
            } else {
              Sound.play('#audio-win')
            }
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

        this.origBoard = Array.from(Array(9).keys())
  },

  showWinner : function(result) {
    console.log(result)
    setTimeout(() => {
      if (result.winner === 'tie') {
        Result.showTied();
        Sound.play('#audio-tie')
      } else {
        Result.setVarMsg(result.winner);
        Result.setSVG(result.winner);
        Result.showWin();
        Game.highlightWin(result);
      }

      Game.updateScores(result);
    }, 750)
  },

  nextRound : function nextRound(e) {
    let target = e.target.classList,
        id = (target.contains('tied')) ? '#modal-tied-result' : '#modal-base-result';
    
        Game.hide(id);
        Cells.reset();
        Game.origBoard = Array.from(Array(9).keys());
        Sound.play('#audio-win')
        Cells.detachAll();
        Cells.attachAll();
  },

  quit : function quit(e) {
    let target = e.target.classList,
        id = (target.contains('tied')) ? '#modal-tied-result' : "#modal-base-result";
    
    Game.hide(id);
    Cells.reset();
    Sound.play('#udio-tie');
  }
}

export {Game}