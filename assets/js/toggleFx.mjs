function toggleFx() {
  const allSoundFx = document.querySelectorAll('.sound-fx'),
        soundFxSlider = document.querySelector('#sfx-slider'),
        fxCheckBox = document.querySelector('#sfx-checkbox'),
        audioBeep = document.querySelector('#audio-generic-click');
  
  if (fxCheckBox.checked === true) {
    allSoundFx.forEach(sfx => {
      sfx.volume = soundFxSlider.value / 100
      sfx.muted = false
    })
    audioBeep.currentTime = 0;
    audioBeep.play();
  } else {
    allSoundFx.forEach(sfx => sfx.muted = true)
  }
  
}
export {toggleFx}