function disableSounds() {
  const modalAudio = document.querySelector('#modal-audio-toggle');
  modalAudio.classList.remove('active');
  
  const startMenu = document.querySelector(".start-menu");
  startMenu.classList.add('active')

  const audioBGM = document.querySelector("#audio-bgm");
  audioBGM.loop = true;
  audioBGM.muted = true;

  const allSoundFx = document.querySelectorAll('.sound-fx');
  allSoundFx.forEach(sfx => sfx.muted = true)

  const checkboxes = document.querySelectorAll('.checkbox__input');
  checkboxes.forEach(checkbox => checkbox.checked = false)
}

export {disableSounds}