function toggleMusic() {
  const music = document.querySelector('.music'),
        musicSlider = document.querySelector('#music-slider'),
        musicCheckBox = document.querySelector('#music-checkbox');
  
  if (musicCheckBox.checked === true) {
    music.volume = musicSlider.value / 100
    music.muted = false
    music.play()
  } else {
    music.muted = true
    music.pause()
  }
}
export {toggleMusic}