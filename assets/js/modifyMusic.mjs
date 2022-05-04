function modifyMusic() {
  const music = document.querySelector('.music'),
        volume = document.querySelector('#music-slider').value,
        labelSlider = document.querySelector('.music-slider-value');

        music.volume = volume / 100;
        labelSlider.textContent = volume
}

export {modifyMusic}