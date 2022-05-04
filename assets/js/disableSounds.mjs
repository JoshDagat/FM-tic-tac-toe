function disableSounds() {
  const audioBGM = document.querySelector('#audio-bgm');

  audioBGM.pause()
  audioBGM.currentTime = 0;
}

export {disableSounds}