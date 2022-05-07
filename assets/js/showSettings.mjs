function showSettings() {
  const modalSettings = document.querySelector('#modal-settings'),
        audioOpen = document.querySelector('#audio-hover');

  modalSettings.classList.add('active')
  audioOpen.currentTime = 0;
  audioOpen.play();
}

export {showSettings}