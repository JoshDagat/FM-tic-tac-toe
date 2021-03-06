import { Sound } from "./Sound.mjs";
import { Game } from "./Game.mjs";
import { computerTurn } from "./computerTurn.mjs";
import { Cells } from "./Cell.mjs";
import { playerClick } from "./playerClick.mjs";
import { Memory } from "./Memory.mjs";

const Attachments = {
  cancelResetBtn : document.querySelector('.modal-reset .btn--denied'),
  confirmResetBtn : document.querySelector('.modal-reset .btn--affirmative'),
  newGameBtns : document.querySelectorAll('.btn--sm'),
  nextRoundBtns : document.querySelectorAll('.btn__next-round'),
  quitBtns : document.querySelectorAll('.btn__quit-game'),
  resetBtn : document.querySelector('.btn-reset'),
  restoreBtn : document.querySelector('.modal-restore .btn--affirmative'),
  newSessionBtn : document.querySelector('.modal-restore .btn--denied'),
  saveSettingsBtn : document.querySelector('.modal-settings__save-btn'),
  settingsBtn : document.querySelector('.btn-settings'),

  init : function attach() {
    // Token Container
    Game.tokenContainer.addEventListener('click', (e) => {
      Game.selectToken(e.target.classList)
      Sound.play('#audio-hover')
    });
    
    // Tokens
    for (let token of Game.tokens) {
      token.addEventListener('mouseenter', () => Sound.play('#audio-hover'));
    }

    // New Game Buttons:
    for (let btn of this.newGameBtns) {
      btn.addEventListener('click', (e) => {

        if (Game.tokenContainer.classList.length === 1 ) {
          Game.show('.game-tokens__alert');
          Sound.play('#audio-lose');
          return;
        }

        Game.init(e)
      });

      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'));
    };

    // Reset Button
    this.resetBtn.addEventListener('click', () => {
      Game.show('#modal-reset')
      Sound.play('#audio-lose')
    });

    // Cancel Reset Button:
    this.cancelResetBtn.addEventListener('click', () => {
      Game.hide('#modal-reset');
      Sound.play('#audio-hover')
    });

    // Confirm Reset Button:
    this.confirmResetBtn.addEventListener('click', () => {
      Game.reset();
    });

    // Next Round Buttons:
    for (let btn of this.nextRoundBtns) {
      btn.addEventListener('click', Game.nextRound);

      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'))
    };

    // Quit Buttons
    for (let btn of this.quitBtns) {
      btn.addEventListener('click', Game.quit);

      btn.addEventListener('mouseenter', Sound.play('#audio-hover'));
    };
    
    // Restore Button
    this.restoreBtn.addEventListener('click', Memory.restore);

    // New Session Button
    this.newSessionBtn.addEventListener('click', () => {
      Game.hide('#modal-restore-session');
      Game.show('.start-menu');
      Memory.clear();
    })

    // Save Settings Button
    this.saveSettingsBtn.addEventListener('click', () => {
      if (Game.status === 'idle') {
        Game.show('.start-menu')
      }
      
      Game.hide('#modal-settings')
      Sound.play('#audio-hover')
      Sound.init();
    });

    // Open Settings Button
    this.settingsBtn.addEventListener('click', () => {
      Game.show('#modal-settings')
      Sound.play('#audio-hover')
    });

    
    // For hover sound:
    let nodes = [
      this.cancelResetBtn, this.confirmResetBtn, this.resetBtn, this.saveSettingsBtn,
      this.settingsBtn, this.restoreBtn, this.newSessionBtn
    ]

    for (let btn of nodes) {
      btn.addEventListener('mouseenter', () => Sound.play('#audio-hover'))
    }
    
    Sound.sfxSlider.addEventListener('input', () => Sound.modifySFX());

    Sound.bgmSlider.addEventListener('input', () => Sound.modifyBGM());

    Sound.sfxCheckBox.addEventListener('change', () => Sound.toggleSFX());

    Sound.bgmCheckBox.addEventListener('change', () => Sound.toggleBGM());


    // Cells
    for (let cell of Cells.allCells) {
      cell.addEventListener('click', playerClick);

      cell.addEventListener('mouseenter', Cells.hover);

      cell.addEventListener('mouseenter', Cells.showOutline);

      cell.addEventListener('mouseleave', Cells.hideOutline);
    }

    // For cell svgs
    window.addEventListener('resize', Cells.setViewBoxes)
  },
}

export {Attachments}