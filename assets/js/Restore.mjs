const Restore = {
  node : document.querySelector('#modal-restore-session'),
  
  show: function() {
    this.node.classList.add('active')
  },

  hide: function() {
    this.node.classList.remove('active')
  },
  
  confirm : function () {
    const prevSession = JSON.parse(sessionStorage.getItem('board'));
    
    let xCount = 0,
        oCount = 0,
        cell;

        for (let i = 0; i < prevSession.length; i++) {
            if (!isNaN(typeof prevSession[i])) {
              continue;
            }

            cell = document.querySelector(`#cell-${i} .cell__svg-link`);
            
            if (prevSession[i] === "X") {
              xCount++;
              cell.setAttribute('href', '#cross');
            }

            if (prevSession[i] === "O") {
              oCount++;
              cell.setAttribute('href', '#circle')
            }
        }
    
    let turn = sessionStorage.getItem('turn'),
        turnIndicator = document.querySelector('.turn-indicator__svg-link');

        if (turn === "O") {
          turnIndicator.setAttribute('href', "#svg-indicator--circle");
        }

        if (turn === "X") {
          turnIndicator.setAttribute('href', "#svg-indicator--cross")
        }
  }
}
