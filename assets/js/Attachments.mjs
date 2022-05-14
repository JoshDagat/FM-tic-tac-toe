import { Sound } from "./Sound.mjs";
import { Game } from "./Game.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Cells } from "./Cell.mjs";
import { playerClick } from "./playerClick.mjs";

const Attachments = {
  cancelResetBtn : document.querySelector('.modal-reset .btn--denied'),
  confirmResetBtn : document.querySelector('.modal-reset .btn--affirmative'),
  newGameBtns : document.querySelectorAll('.btn--sm'),
  nextRoundBtns : document.querySelectorAll('.btn__next-round'),
  quitBtns : document.querySelectorAll('.btn__quit-game'),
  resetBtn : document.querySelector('.btn-reset'),
  saveSettingsBtn : document.querySelector('.modal-settings__save-btn'),
  settingsBtn : document.querySelector('.btn-settings'),

  init : function attach() {
    this.cancelResetBtn.addEventListener('click', () => {
      Game.hide('#modal-reset');
      Sound.play('#audio-hover')
    });

    this.confirmResetBtn.addEventListener('click', () => {
      Game.reset();
      Sound.play('#audio-lose');
    });

    for (let btn of this.newGameBtns) {
      btn.addEventListener('click', (e) => {
        Game.start(e);

        if (Game.type === 'PvC' && Game.tokenComputer === "X") {
          computerTurn();
        };
      });

      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'));
    };

    for (let btn of this.nextRoundBtns) {
      btn.addEventListener('click', Game.nextRound);

      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'))
    };

    for (let btn of this.quitBtns) {
      btn.addEventListener('click', Game.quit);

      btn.addEventListener('mouseenter', Sound.play('#audio-hover'));
    };

    this.resetBtn.addEventListener('click', () => {
      Game.show('#modal-reset')
      Sound.play('#audio-lose')
    });

    this.saveSettingsBtn.addEventListener('click', () => {
      Game.hide('#modal-settings')
      Sound.play('#audio-hover')
      Sound.init();
    });

    this.settingsBtn.addEventListener('click', () => {
      Game.show('#modal-settings')
      Sound.play('#audio-hover')
    });

    Game.tokenContainer.addEventListener('click', (e) => {
      Game.selectToken(e.target.classList)
      Sound.play('#audio-hover')
    });

    let nodes = [
      this.cancelResetBtn, this.confirmResetBtn, this.resetBtn, this.saveSettingsBtn,
      this.settingsBtn,
    ]

    for (let btn of nodes) {
      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'))
    }
    
    Sound.sfxSlider.addEventListener('input', () => Sound.modifySFX());

    Sound.sfxCheckBox.addEventListener('change', () => Sound.toggleSFX());

    Sound.bgmSlider.addEventListener('input', () => Sound.modifyBGM());

    Sound.bgmCheckBox.addEventListener('change', () => Sound.toggleBGM());

    for (let token of Game.tokens) {
      token.addEventListener('mouseenter', () => Sound.play('#audio-hover'));
    }

    for (let cell of Cells.allCells) {
      cell.addEventListener('click', playerClick);

      cell.addEventListener('mouseenter', Cells.hover);

      cell.addEventListener('mouseenter', Cells.showOutline);

      cell.addEventListener('mouseleave', Cells.hideOutline);
    }
  },
}

export {Attachments}