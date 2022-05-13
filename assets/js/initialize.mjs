import { hoverSound } from "./bin/hoverSound.mjs";
import { nextRound } from "./nextRound.mjs";
import { quitGame } from "./bin/quitGame.mjs";
import { reset } from "./bin/reset.mjs";
import { selectToken } from "./bin/selectToken.mjs";
import { startGame } from "./bin/startGame.mjs";
import { enableSounds} from "./bin/enableSounds.mjs"
import { disableSounds} from "./bin/disableSounds.mjs"
import { modifyFxAudio } from "./bin/modifyFxAudio.mjs";
import { modifyMusic } from "./bin/modifyMusic.mjs";
import { showSettings } from "./bin/showSettings.mjs";
import { closeSettings } from "./bin/closeSettings.mjs";
import { toggleMusic } from "./bin/toggleMusic.mjs";
import { toggleFx } from "./bin/toggleFx.mjs";
import { restoreSession } from "./restoreSession.mjs";
import { newSession } from "./newSession.mjs";
import { showResetModal } from "./showResetModal.mjs";

function initialize() {
  let x = JSON.parse(sessionStorage.getItem('game'));

  if (x) {
    const restoreModal = document.querySelector('#modal-restore-session');
          restoreModal.classList.add('active');
  } else {
    const audioToggleModal = document.querySelector('#modal-audio-toggle');
          audioToggleModal.classList.add('active');
  }

  // Restore Modals Btns
  const restoreButton = document.querySelector('.modal-restore .btn--affirmative');
        restoreButton.addEventListener('click', restoreSession);

  const newSessionButton = document.querySelector('.modal-restore .btn--denied');
        newSessionButton.addEventListener('click', newSession);

  // Enable Audio Modals Btns
  const enableSoundsButton = document.querySelector('.modal-audio .btn--affirmative');
        enableSoundsButton.addEventListener('click', enableSounds);

  const disableSoundsButton = document.querySelector('.modal-audio .btn--denied');
        disableSoundsButton.addEventListener('click', disableSounds);
  

  // Reset Modal Buttons 
  const resetButton = document.querySelector('.btn-reset');
        resetButton.addEventListener('click', showResetModal);
        resetButton.addEventListener('mouseenter', hoverSound);

  const restartGameButton = document.querySelector('.modal-reset .btn--affirmative');
        restartGameButton.addEventListener('click', reset);
        restartGameButton.addEventListener('mouseenter', hoverSound);

  const continueGameButton = document.querySelector('.modal-reset .btn--denied');
        continueGameButton.addEventListener('click', closeResetModal);
        continueGameButton.addEventListener('mouseenter', hoverSound);

  // Settings Modal Buttons, Sliders, Checkboxes
  const settingsButton = document.querySelector('.btn-settings');
        settingsButton.addEventListener('mouseenter', hoverSound);
        settingsButton.addEventListener('click', showSettingsModal);

  const fxSlider = document.querySelector("#sfx-slider");
        fxSlider.addEventListener('input', modifyFxAudio);

  const musicSlider = document.querySelector('#music-slider');
        musicSlider.addEventListener('input', modifyMusic);

  const musicCheckBox = document.querySelector('#music-checkbox');
        musicCheckBox.addEventListener('change', toggleMusic);

  const fxCheckBox = document.querySelector('#sfx-checkbox');
        fxCheckBox.addEventListener('change', toggleFx);

  const settingsSave = document.querySelector('.modal-settings__save-btn');
        settingsSave.addEventListener('click', closeSettings);
        settingsSave.addEventListener('mouseenter', hoverSound); 

  // Result and Tied Modal Buttons
  const quitButtons = document.querySelectorAll(".btn__quit-game")
        quitButtons.forEach(button => {
          button.addEventListener('click', quitGame);
          button.addEventListener('mouseenter', hoverSound);
        })

  const nextRoundButtons = document.querySelectorAll('.btn__next-round');
        nextRoundButtons.forEach(button => {
          button.addEventListener('click', nextRound);
          button.addEventListener('mouseenter', hoverSound);
        })

  // Start Menu Buttons
  const tokenContainer = document.querySelector('.game-tokens__choices');
        tokenContainer.addEventListener('click', selectToken);
  
  const tokens = document.querySelectorAll('.choice-token');
        tokens.forEach(token => token.addEventListener('mouseenter', hoverSound));

  const newGameButtons = document.querySelectorAll('.btn--sm');
        newGameButtons.forEach(button => {
          button.addEventListener('click', startGame);
          button.addEventListener('mouseenter', hoverSound);
        })
} 

export {initialize}