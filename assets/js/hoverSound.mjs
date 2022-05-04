function hoverSound() {
  const audioHover = document.querySelector('#audio-hover');

  audioHover.currentTime = 0;
  audioHover.play();
}

export {hoverSound}