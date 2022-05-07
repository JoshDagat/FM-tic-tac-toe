function toggleFx() {
  const allSoundFx = document.querySelectorAll('.sound-fx'),
        soundFxSlider = document.querySelector('#sfx-slider'),
        fxCheckBox = document.querySelector('#sfx-checkbox');
  
  if (fxCheckBox.checked === true) {
    allSoundFx.forEach(sfx => {
      sfx.volume = soundFxSlider.value / 100
      sfx.muted = false
    })
  } else {
    allSoundFx.forEach(sfx => sfx.muted = true)
  }
  
}
export {toggleFx}