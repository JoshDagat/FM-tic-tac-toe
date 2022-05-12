function modifyFxAudio() {
  const volume = document.querySelector('#sfx-slider').value,
        allSoundFx = document.querySelectorAll('.sound-fx');

        allSoundFx.forEach(sfx => sfx.volume = volume / 100)

  const sliderLabel = document.querySelector('#sfx-value');
        sliderLabel.textContent = volume;

  const audioBeep = document.querySelector('#audio-hover');
        audioBeep.currentTime = 0;
        audioBeep.play();
} 

export {modifyFxAudio}  