function toggleMusic() {
  const music = document.querySelector('.music'),
        musicSlider = document.querySelector('#music-slider'),
        musicCheckBox = document.querySelector('#music-checkbox');
  
  if (musicCheckBox.checked === true) {
    music.volume = musicSlider.value / 100
    music.muted = false
  } else {
    music.muted = true
  }
}
export {toggleMusic}