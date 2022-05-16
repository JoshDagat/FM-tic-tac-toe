import { Sound } from "./Sound.mjs";
import { Game } from "./Game.mjs";

const Result = {
  node_base : document.querySelector('#modal-base-result'),
  node_tied : document.querySelector('#modal-tied-result'),
  varMsg : document.querySelector('#variable-message'),
  SVG : document.querySelector('#base-svg'),
  constMsg : document.querySelector('.modal-base__winning-text'),

  showWin : function() {
    this.node_base.classList.add('active');
  },

  showTied : function() {
    this.node_tied.classList.add('active');
  },

  hide : function() {
    this.node_base.classList.remove('active');
    this.node_tied.classList.remove('active');
  },

  setVarMsg : function(result) {
    if (Game.type === 'PvC') {
      if (result === Game.tokenComputer) {
       this.varMsg.textContent = 'OH NO, YOU LOST...';
        Sound.play('#audio-lose');
        return;
      }

      this.varMsg.textContent = "YOU WON!";
      Sound.play('#audio-win');
      return;
    }

    if (Game.type === 'PvP') {
      if (result === Game.tokenPlayer1) {
        this.varMsg.textContent = "PLAYER 1 WINS!";
      } else {
        this.varMsg.textContent = "PLAYER 2 WINS!";
      }
      Sound.play('#audio-win');
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

export {Result}