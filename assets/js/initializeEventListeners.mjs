import { hoverSound } from "./hoverSound.mjs";
import { nextRound } from "./nextRound.mjs";
import { quitGame } from "./quitGame.mjs";
import { reset } from "./reset.mjs";
import { selectToken } from "./selectToken.mjs";
import { startGame } from "./startGame.mjs";
import { enableSounds} from "./enableSounds.mjs"
import { disableSounds} from "./disableSounds.mjs"
import { modifyFxAudio } from "./modifyFxAudio.mjs";
import { modifyMusic } from "./modifyMusic.mjs";
import { showSettings } from "./showSettings.mjs";
import { closeSettings } from "./closeSettings.mjs";
import { toggleMusic } from "./toggleMusic.mjs";
import { toggleFx } from "./toggleFx.mjs";


function initializeEventListeners() {
  // 1) Tokens
  const tokenContainer = document.querySelector('.pt__choices');
  tokenContainer.addEventListener('click', selectToken)

  const tokens = document.querySelectorAll('.token');
  tokens.forEach(token => token.addEventListener('mouseenter', hoverSound))

  // 2) Buttons:
  const newGameButtons = document.querySelectorAll('.btn--sm');
  newGameButtons.forEach(button => {
    button.addEventListener('click', startGame)
    button.addEventListener('mouseenter', hoverSound)
  })

  const quitButtons = document.querySelectorAll(".btn__quit-game")
  quitButtons.forEach(button => {
    button.addEventListener('click', quitGame)
    button.addEventListener('mouseenter', hoverSound)
  })

  const nextRoundButtons = document.querySelectorAll('.btn__next-round');
  nextRoundButtons.forEach(button => {
    button.addEventListener('click', nextRound)
    button.addEventListener('mouseenter', hoverSound)
  })

  const resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', reset);
  resetButton.addEventListener('mouseenter', hoverSound)

  const enableSoundsButton = document.querySelector('.btn--affirmative');
  enableSoundsButton.addEventListener('click', enableSounds)

  const disableSoundsButton = document.querySelector('.btn--denied');
  disableSoundsButton.addEventListener('click', disableSounds);

  const settingsButton = document.querySelector('.btn-settings')
  settingsButton.addEventListener('mouseenter', hoverSound)
  settingsButton.addEventListener('click', showSettings)

  // 3) Settings:
  const fxSlider = document.querySelector("#sound-fx-slider");
  fxSlider.addEventListener('input', modifyFxAudio)

  const musicSlider = document.querySelector('#music-slider');
  musicSlider.addEventListener('input', modifyMusic)

  const settingsSave = document.querySelector('.modal-settings__save-btn');
  settingsSave.addEventListener('click', closeSettings)
  settingsSave.addEventListener('mouseenter', hoverSound) 

  const musicCheckBox = document.querySelector('#music-checkbox');
  musicCheckBox.addEventListener('change', toggleMusic);

  const fxCheckBox = document.querySelector('#sound-fx-checkbox');
  fxCheckBox.addEventListener('change', toggleFx)
} 

export {initializeEventListeners}