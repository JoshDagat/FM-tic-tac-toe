import { Game } from "./Game.mjs";
import { hoverSound } from "./bin/hoverSound.mjs";
import { playerClick } from "./playerClick.mjs";
import { removeOutline, showOutline } from "./bin/toggleOutline.mjs";

const Cells = {
  allCells: document.querySelectorAll('.cell'),
  cellEvents: {
    "click" : [playerClick],
    "mouseenter" : [showOutline, hoverSound],
    "mouseleave" : [removeOutline],
  },

  
  
  init : function init() {
    for (let cell of this.allCells) { 
      for (let [event, fn] of Object.entries(this.cellEvents)) {
        for (let i = 0; i < fn.length; i++) {
          cell.addEventListener(event, fn[i])
        }
      }
    }
  },

  clear : function clear(cell) {
    this.setSVG(cell, null)
  },

  detach : function detach(cell) {
      for (let [event, fn] of Object.entries(this.cellEvents)) {
        for (let i = 0; i < fn.length; i++) {
          cell.removeEventListener(event, fn[i])
        }
      }
  },

  disable : function disable() {
    let emptyCells = this.emptyCells();
        
        for (let index of emptyCells) {   
          let cell = document.querySelector(`#cell-${index}`);
              cell.style.pointerEvents = 'none';
              cell.style.cursor = 'auto';
        }
  },

  emptyCells: function emptyCells(board = Game.origBoard) {
    return board.filter(cell => typeof cell === 'number')
  },

  enable : function enable() {
    let emptyCells = this.emptyCells();

        for (let index  of emptyCells) {
          let cell = document.querySelector(`#cell-${index}`);
              cell.style.pointerEvents = 'auto';
              cell.style.cursor = 'pointer';
        }
  },

  mark : function mark(cell, token) {
    if (token === "X") {
      cell.setAttribute('href', '#cross');
    }

    if (token === "O") {
      cell.setAttribute('href', '#circle')
    }
  },

  reset : function reset() {
    for (let cell of this.allCells) {
      cell.setAttribute('href', null);
      cell.style.backgroundColor = '#1f3641';
      cell.style.cursor = "pointer"

      this.detach(cell)
    }
  },

  showOutline: function showOutline(e) {
    if (Game.turn === "X") {
      let cell = e.target;
    }

    if (Game.turn === "O") {
      let cell = e.target;
    }
  },
}

export {Cells}