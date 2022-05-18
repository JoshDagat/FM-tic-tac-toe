  const Sound = {

    BGM : document.querySelector('.music'),
    allSFX : document.querySelectorAll('.sound-fx'),
    sfxSlider : document.querySelector('#sfx-slider'),
    sfxLabel : document.querySelector('#sfx-value'),
    sfxCheckBox : document.querySelector('#sfx-checkbox'),
    bgmSlider : document.querySelector('#music-slider'),
    bgmLabel : document.querySelector('#music-value'),
    bgmCheckBox : document.querySelector('#music-checkbox'),

    play : function play(identifier) {
      const sound = document.querySelector(`${identifier}`);

            sound.currentTime = 0;
            sound.play();
    },

    stop : function stop(identifier) {
      const sound = document.querySelector(`${identifier}`);

            sound.pause();
            sound.currentTime = 0;
    },
    
    init : function init() {
            Sound.allSFX.forEach(sfx => sfx.volume = Sound.sfxSlider.value / 100 );
      
            Sound.BGM.loop = true;
            Sound.BGM.volume = Sound.bgmSlider.value / 100;
            Sound.BGM.play();
    },

    loop : function loop(id) {
      let sound = document.querySelector(`${id}`);
          sound.loop = true;
          Sound.play(id)
    },

    modifySFX : function modifySFX() {
      const volume = Sound.sfxSlider.value;
            Sound.allSFX.forEach(sfx => sfx.volume = volume / 100);
            Sound.sfxLabel.textContent = volume;
            Sound.play('#audio-hover')
    },

    modifyBGM : function modifyBGM() {
      const volume = Sound.bgmSlider.value;
            Sound.BGM.volume = volume / 100;
            Sound.BGM.play();
      
            Sound.bgmLabel.textContent = volume;
    },

    toggleSFX : function toggleSFX() {      
            if (Sound.sfxCheckBox.checked === true) {
                Sound.allSFX.forEach(sfx => {
                  sfx.volume = Sound.sfxSlider.value / 100;
                  sfx.muted = false;
                })
              
                Sound.play('#audio-generic-click');

            } else {
                Sound.allSFX.forEach(sfx => sfx.muted = true);
            }
    },

    toggleBGM: function toggleBGM() {
            if (Sound.bgmCheckBox.checked === true) {
              Sound.BGM.volume = Sound.bgmSlider.value / 100;
              Sound.BGM.muted = false;
              Sound.play(`.music`);
            } else {
              Sound.BGM.muted = true;
              Sound.stop(`.music`);
            }
    }
  }

  export {Sound}