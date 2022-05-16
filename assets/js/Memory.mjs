import { Cells } from "./Cell.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Game } from "./Game.mjs";
import { Sound } from "./Sound.mjs";

const Memory = {
  node : document.querySelector('#modal-restore-session'),
  
  restore : function restore() {
    const {
      prevBoard, 
      prevTokenComputer, 
      prevTokenPlayer, 
      lastTurn, 
      prevType,
      prevCross,
      prevCircle,
      prevTied,
      prevCrossOwner,
      prevCircleOwner,
      prevSFX,
      prevBGM,
    } = Memory.retrieve();

    Game.origBoard = prevBoard;
    Game.tokenComputer = prevTokenComputer;
    Game.tokenPlayer1 = prevTokenPlayer;
    Game.crossOwner.textContent = prevCrossOwner;
    Game.circleOwner.textContent = prevCircleOwner;
    Game.turn = lastTurn;
    Game.type = prevType;

    let xCount = 0,
        oCount = 0,
        cell,
        svg;

        for (let i = 0; i < prevBoard.length; i++) {
            if (!isNaN(prevBoard[i])) {
              continue;
            }

            cell = document.querySelector(`#cell-${i}`);
            svg = cell.querySelector('.cell__svg-link');
            Cells.detach(cell)
            
            if (prevBoard[i] === "X") {
              xCount++;
              svg.setAttribute('href', '#cross');
            }

            if (prevBoard[i] === "O") {
              oCount++;
              svg.setAttribute('href', '#circle')
            }
        }
    
    let turnIndicator = document.querySelector('.turn-indicator__svg-link');
        if (lastTurn === "O") {
          turnIndicator.setAttribute('href', "#svg-indicator--circle");
        }

        if (lastTurn === "X") {
          turnIndicator.setAttribute('href', "#svg-indicator--cross")
        }

        if (prevType === "PvP") return;

        // Beyond this point game is PvC:
        if (prevTokenComputer === "X") {
          if (xCount > oCount) return;

          computerTurn(prevBoard);
        }

        if (prevTokenComputer === "O") {
          if (xCount > oCount) {
            computerTurn(prevBoard);
          }
        }

        if (prevSFX) {
          Sound.modifySFX();
        }

        if (prevBGM) {
          Sound.modifyBGM();
        }

        Game.setLabel();
        Game.hide('#modal-restore-session');
        Game.show('.main-game');
        document.querySelector('#counter--cross').textContent = prevCross;
        document.querySelector('#counter--circle').textContent = prevCircle;
        document.querySelector('#counter--ties').textContent = prevTied;
  },
  
   store : function store() {
    sessionStorage.setItem('board', JSON.stringify(Game.origBoard));
    sessionStorage.setItem('tokenComputer', Game.tokenComputer);
    sessionStorage.setItem('tokenPlayer1', Game.tokenPlayer1);
    sessionStorage.setItem('turn', Game.turn);
    sessionStorage.setItem('type', Game.type);
    sessionStorage.setItem('cross', document.querySelector('#counter--cross').textContent);
    sessionStorage.setItem('circle', document.querySelector('#counter--circle').textContent);
    sessionStorage.setItem('tied', document.querySelector('#counter--ties').textContent);
    sessionStorage.setItem('sfxVol', Sound.sfxSlider.value);
    sessionStorage.setItem('bgmVol', Sound.bgmSlider.value);
    sessionStorage.setItem('sfxEnabled', Sound.sfxCheckBox.checked);
    sessionStorage.setItem('bgmEnabled', Sound.bgmCheckBox.checked);
    sessionStorage.setItem('ownerCross', document.querySelector('#owner-cross').textContent);
    sessionStorage.setItem('ownerCircle', document.querySelector('#owner-circle').textContent);
  },

  retrieve : function retrieve() {
    let session = {};

    session.prevBoard = JSON.parse(sessionStorage.getItem('board'));
    session.prevTokenComputer = sessionStorage.getItem('tokenComputer');
    session.prevTokenPlayer = sessionStorage.getItem('tokenPlayer1');
    session.lastTurn = sessionStorage.getItem('turn');
    session.prevType = sessionStorage.getItem('type');
    session.prevCross = sessionStorage.getItem('cross');
    session.prevCircle = sessionStorage.getItem('circle');
    session.prevTied = sessionStorage.getItem('tied');
    session.prevCrossOwner = sessionStorage.getItem('ownerCross');
    session.prevCircleOwner = sessionStorage.getItem('ownerCircle');
    session.prevSFX = sessionStorage.getItem('sfxEnabled');
    session.prevBGM = sessionStorage.getItem('bgmEnabled');

    return session;
  },

  checkStorage : function checkStorage() {
    if (Memory.retrieve().prevBoard) {
      Game.show('#modal-restore-session');
      Game.hide('#modal-settings')
    } else {
      Game.show('#modal-settings')
    }
  },

  clear : function clear() {
    sessionStorage.removeItem('board');
    sessionStorage.removeItem('tokenComputer');
    sessionStorage.removeItem('tokenPlayer1');
    sessionStorage.removeItem('turn');
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('cross');
    sessionStorage.removeItem('circle');
    sessionStorage.removeItem('tied');
  }
}

export {Memory}
