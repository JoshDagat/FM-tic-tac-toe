import { Sound } from "./Sound.mjs";
import { Cells } from "./Cell.mjs";
import { Result } from "./Result.mjs";
import { Memory} from "./Memory.mjs";
import { computerTurn } from "./computerTurn.mjs";

const Game = {
  // Game parameters:
  origBoard : [],
  tokenComputer : "O",
  tokenPlayer1 : "X",
  turn: "X",
  type: "PvP",
  status: 'idle',

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
  crossOwner : document.querySelector('#owner-cross'),
  circleOwner : document.querySelector('#owner-circle'),

  // Game methods:
  init : function(e) {
    let ti = document.querySelector('.turn-indicator__svg-link');
        ti.setAttribute('href', '#svg-indicator--cross'); 

    Game.origBoard = Array.from(Array(9).keys());

    Game.setType(e.target.classList);
    Game.setTokens();
    Game.setLabel();
    Game.turn = "X";
    Game.status = 'ongoing';
    Game.show('.main-game');
    Game.hide('.start-menu');
    Cells.setViewBoxes();
    Cells.reset();


    if (Game.type === 'PvC' && Game.tokenComputer === "X") {
          computerTurn();
    };

    Memory.store();
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
    } else {
      Game.type = 'PvP'
    }
  },

  setTokens : function() {
    if (Game.tokenContainer.classList.contains('circle-selected')) {
      Game.tokenPlayer1 = "O";
      Game.tokenComputer = "X";
    } else {
      Game.tokenPlayer1 = "X";
      Game.tokenComputer = "O";
    }
  },

  selectToken : function (arr) {
    Game.hide('.game-tokens__alert');
    Game.tokenContainer.classList = 'game-tokens__choices'

    if (arr.contains('cross')) {
      Game.tokenContainer.classList.add('cross-selected');
    }

    if (arr.contains('circle')) {
      Game.tokenContainer.classList.add('circle-selected');
    }

    Sound.play('#audio-generic-click')
  },
  
 

  checkWin : function(board, player) {
    let outcome = {};

    let marked = [];
        for (let i = 0; i < board.length; i++) {
          if (board[i] === player) {
            marked.push(i);
          }
        }

        for (let combo of Game.combos) {
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
    
    let crossScore = document.querySelector('#counter--cross').textContent,
        circleScore = document.querySelector('#counter--circle').textContent,
        tiesScore = document.querySelector('#counter--cross').textContent;
    
        sessionStorage.setItem('cross', crossScore);
        sessionStorage.setItem('circle', circleScore);
        sessionStorage.setItem('tied', tiesScore);
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

            if (Game.type === 'PvC' && Game.tokenComputer === winner) {
              Sound.play('#audio-lose');
            } else {
              Sound.play('#audio-win')
            }
          }, time)
    }
  },

  reset : function reset() {
    Game.countdown('reset');

    let boards = document.querySelectorAll('.scoreboard__counter');
        for (let board of boards) {
          board.textContent = 0;
        }


        Game.tokenContainer.classList = 'game-tokens__choices';
        Game.hide('#modal-reset');
        Game.hide('.main-game');
        Game.show('.start-menu');

        Game.origBoard = Array.from(Array(9).keys())
  },

  showWinner : function(result) {
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
        id = (target.contains('tied')) ? '#modal-tied-result' : '#modal-base-result',
        ti = document.querySelector('.turn-indicator__svg-link');
    
        Game.hide(id);
        Game.origBoard = Array.from(Array(9).keys());
        Game.turn = "X";
        Sound.play('#audio-win')
        Cells.detachAll();
        Cells.attachAll();
        Cells.reset();
        ti.setAttribute('href', '#svg-indicator--cross');

        sessionStorage.setItem('board', JSON.stringify(Game.origBoard));

        if (Game.type === 'PvC' && Game.tokenComputer === "X") {
          computerTurn();
        }
  },

  quit : function quit(e) {
    let target = e.target.classList,
        id = (target.contains('tied')) ? '#modal-tied-result' : "#modal-base-result";
    
    Game.hide(id);
    Cells.reset();
    Sound.play('#udio-tie');
    Memory.clear();
  },

  setLabel : function setLabel() {
    if (Game.type === "PvC"){
      if (Game.tokenComputer === "X"){
        Game.crossOwner.textContent = "(CPU)";
        Game.circleOwner.textContent = "(YOU)";
      }
    }

    if (Game.type === "PvP"){
      if (Game.tokenPlayer1 === "X"){
        Game.crossOwner.textContent = "(P1)";
        Game.circleOwner.textContent = "(P2)";
      } else {
        Game.crossOwner.textContent = "(P2)";
        Game.circleOwner.textContent = "(P1)";
      }
    }
  },

  countdown : function countdown(nature) {
    let cdModal = document.querySelector('#modal-countdown'),
        text = cdModal.querySelector('.modal__generic-text'),
        cdVal = cdModal.querySelector('#countdown'),
        resetModal = document.querySelector('#modal-reset'),
        restoreModal = document.querySelector('#modal-restore-session'),
        i = 5;

    if (nature === 'restart') {
      text.textContent = "Restarting in ...";
      resetModal.classList.remove('active');
    } else if (nature === 'restore') {
      text.textContent = "Restoring session, please wait ...";
      restoreModal.classList.remove('active');
    }

    cdModal.classList.add('active');

    let counter = setInterval(() => {
      cdVal.textContent = --i;
      Sound.play('#audio-lose');
      if (i === 0) {
        clearInterval(counter);
        cdModal.classList.remove('active');
        cdVal.textContent = 5;
      
        if (nature === 'restore') {
          Game.hide('.start-menu');
          Game.show('.main-game');
          Sound.play('.music');
        }
      }


    }, 1000);
  }
}

export {Game}