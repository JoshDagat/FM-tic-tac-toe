function highlightWin(result) {
  let{winner, combo} = result;

  for (let i = 0; i < combo.length; i++) {
    let cell = document.querySelector(`#cell-${combo[i]}`),
        svg = cell.querySelector('.cell__svg-link'),
        time = (i + 1) * 125,
        beep = document.querySelector('#audio-select')

    setTimeout(() => {
      if (winner == "X") {
        cell.style.backgroundColor = "#31C3BD";
        svg.setAttribute('href', '#cross--win')
      } else if (winner == "O") {
        cell.style.backgroundColor = "#F2B137";
        svg.setAttribute('href', '#circle--win')
      }

      beep.currentTime = 0;
      beep.play();
    }, time)
    
  }
}

export {highlightWin}