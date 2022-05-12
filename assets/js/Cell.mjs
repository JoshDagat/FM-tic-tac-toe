import { Game } from "./Game.mjs";
import { hoverSound } from "./hoverSound.mjs";
import { playerClick } from "./playerClick.mjs";
import { removeOutline, showOutline } from "./toggleOutline.mjs";

const Cell = {
  allCells: document.querySelectorAll('.cell'),
  cellEvents: {
    "click" : [playerClick],
    "mouseenter" : [showOutline, hoverSound],
    "mouseleave" : [removeOutline],
  },

  attach : function() {
    this.allCells.forEach(cell => {
      for (let [event, fn] of Object.entries(this.cellEvents)) {
        for (let i = 0; i < fn.length; i++) {
          cell.addEventListener(event, fn[i])
        }
      }
    })
  },

  detach : function() {

  },

  reset : function() {
    this.allCells.forEach(cell => {
      cell.setAttribute('href', null);
      cell.style.backgroundColor = '#1f3641';
      cell.style.cursor = "pointer"
    })
  },

  setSVG : function(cell, link) {
    let SVG = cell.target.querySelector('.cell__svg-link');
        SVG.setAttribute('href', link)
  },

  disable : function(cell) {
  },

  showOutline: function(cell) {
    if (Game.turn === "X") {
      this.setSVG(cell, '#cross--outline')
    }

    if (Game.turn === "O") {
      this.setSVG(cell, "#circle--outline")
    }
  },

  clear : function(cell) {
    this.setSVG(cell, null)
  },

  mark : function(cell, player) {
    if (player === 'X') {
      this.setSVG(cell, '#cross')
      Game.turn = "O"
    }

    if (player === "O") {
      this.setSVG(cell, '#circle')
      Game.turn = 'X'
    }
  }
}

export {Cell}