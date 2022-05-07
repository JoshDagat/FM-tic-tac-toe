function modifyMusic() {
const music = document.querySelector('.music'),
      volume = document.querySelector('#music-slider').value;

      music.volume = volume / 100;
      music.play();

const labelSlider = document.querySelector('#music-value');
      labelSlider.textContent = volume;
}

export {modifyMusic}