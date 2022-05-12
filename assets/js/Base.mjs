import { audio } from "./audio.mjs";
import { GAME_STATE as GS } from "./gameState.mjs"

const Base = {
  node : document.querySelector('#modal-base-result'),
  varMsg : node.querySelector('#variable-message'),
  SVG : node.querySelector('#base-svg'),
  constMsg : node.querySelector('.modal-base__winning-text'),

  show : function() {
    this.node.classList.add('active')
  },

  hide : function() {
    this.hide.classList.remove('active')
  },

  setVarMsg : function(result) {
    if (GS.type === 'PvC') {
      if (result === GS.computerToken) {
        this.varMsg.textContent = 'OH NO, YOU LOST...';
        audio.play('#audio-lose');
        return;
      }

      this.varMsg.textContent = "YOU WON!";
      audio.play('#audio-win');
      return;
    }

    if (GS.type === 'PvP') {
      if (result === GS.player1Token) {
        this.varMsg.textContent = "PLAYER 1 WINS!";
      } else {
        this.varMsg.textContent = "PLAYER 2 WINS!";
      }
      audio.play('#audio-win');
      return;
    }
  },

  setSVG : function(result) {
    if (result === "X") {
      this.SVG.setAttribute('href', '#cross');
      this.constMsg.style.color = '#31C3BD';
    }

    if (result === 'O') {
      this.SVG.setAttribute('href', '#circle');
      this.constMsg.style.color = '#F2B137';
    }
  },
}

export {Base}