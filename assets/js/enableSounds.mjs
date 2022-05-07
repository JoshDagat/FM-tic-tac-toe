function enableSounds() {
  const audioBGM = document.querySelector("#audio-bgm"),
        allSoundFx = document.querySelectorAll('.sound-fx'),
        modalAudio = document.querySelector('#modal-audio-toggle'),
        starMenu = document.querySelector('.start-menu');

  modalAudio.classList.remove('active');
  starMenu.classList.add('active')

  audioBGM.loop = true
  audioBGM.volume = 0.1
  audioBGM.play()

  allSoundFx.forEach(sfx => sfx.volume = 0.2)
}

export {enableSounds}