function modifyFxAudio() {
  const allSoundFx = document.querySelectorAll('.sound-fx'),
        volume = document.querySelector('#sound-fx-slider').value,
        sliderLabel = document.querySelector('.fx-slider-value'),
        audioBeep = document.querySelector('#audio-hover');

        allSoundFx.forEach(sfx =>sfx.volume = volume / 100)
        sliderLabel.textContent = volume
        audioBeep.currentTime = 0;
        audioBeep.play();
} 

export {modifyFxAudio}