function closeSettings() {
  const modalSettings = document.querySelector('#modal-settings'),
        audioSave = document.querySelector('#audio-hover')

  modalSettings.classList.remove('active')
  audioSave.currentTime = 0;
  audioSave.play();
}

export {closeSettings}