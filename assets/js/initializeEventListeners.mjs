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
  // Token Container
  const tokenContainer = document.querySelector('.game-tokens__choices');
  tokenContainer.addEventListener('click', selectToken)

  // Tokens
  const tokens = document.querySelectorAll('.choice-token');
  tokens.forEach(token => token.addEventListener('mouseenter', hoverSound))

  // New Game Buttons
  const newGameButtons = document.querySelectorAll('.btn--sm');
  newGameButtons.forEach(button => {
    button.addEventListener('click', startGame)
    button.addEventListener('mouseenter', hoverSound)
  })

  // Quit Buttons
  const quitButtons = document.querySelectorAll(".btn__quit-game")
  quitButtons.forEach(button => {
    button.addEventListener('click', quitGame)
    button.addEventListener('mouseenter', hoverSound)
  })

  // Next Round Buttons
  const nextRoundButtons = document.querySelectorAll('.btn__next-round');
  nextRoundButtons.forEach(button => {
    button.addEventListener('click', nextRound)
    button.addEventListener('mouseenter', hoverSound)
  })

  // Reset Button
  const resetButton = document.querySelector('.btn-reset');
  resetButton.addEventListener('click', reset);
  resetButton.addEventListener('mouseenter', hoverSound)

  // Enable Sounds Button
  const enableSoundsButton = document.querySelector('.btn--affirmative');
  enableSoundsButton.addEventListener('click', enableSounds)

  // Disable SOunds Button
  const disableSoundsButton = document.querySelector('.btn--denied');
  disableSoundsButton.addEventListener('click', disableSounds);

  // Settings Button
  const settingsButton = document.querySelector('.btn-settings')
  settingsButton.addEventListener('mouseenter', hoverSound)
  settingsButton.addEventListener('click', showSettings)

  // SFX Slider
  const fxSlider = document.querySelector("#sfx-slider");
  fxSlider.addEventListener('input', modifyFxAudio)

  // Music Slider
  const musicSlider = document.querySelector('#music-slider');
  musicSlider.addEventListener('input', modifyMusic)

  // Settings Save Button
  const settingsSave = document.querySelector('.modal-settings__save-btn');
  settingsSave.addEventListener('click', closeSettings)
  settingsSave.addEventListener('mouseenter', hoverSound) 

  // Music Chxbox
  const musicCheckBox = document.querySelector('#music-checkbox');
  musicCheckBox.addEventListener('change', toggleMusic);

  // SFX Chkbox
  const fxCheckBox = document.querySelector('#sfx-checkbox');
  fxCheckBox.addEventListener('change', toggleFx)
} 

export {initializeEventListeners}