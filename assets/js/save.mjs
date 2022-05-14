
// function setBoard() {
//   let savedState = JSON.parse(sessionStorage.getItem('game'))
//       if (!savedState) {return}
//       if (!savedState.gameStarted) {return}

//   // Show game UI:
//   const mainGame = document.querySelector('.main-game'),
//         startMenu = document.querySelector('.start-menu'),
//         modalSounds = document.querySelector('#modal-audio-toggle');

//         mainGame.classList.add('active');
//         startMenu.classList.remove('active');
//         modalSounds.classList.remove('active');

//   let savedBoard = JSON.parse(sessionStorage.getItem('board')),
//       xCount = 0,
//       oCount = 0,
//       emptySpots = 0;

//       for (let i = 0; i < savedBoard.length; i++) {
//         if (!isNaN(typeof savedBoard[i])) {
//           emptySpots++
//           continue;
//         }

//         let cell = document.querySelector(`#cell-${i} .cell__svg-link`);
//           if (savedBoard[i] == "X") {
//             xCount++
//             cell.setAttribute('href', "#cross");
//           } 
          
//           if (savedBoard[i] == "O") {
//             oCount++
//             cell.setAttribute('href', '#circle')
//           }
//       }
    
//   let turn = sessionStorage.getItem('turn'), 
//       turnIndicator = document.querySelector('.turn-indicator__svg-link')
      
//       if (turn == "O") {
//         turnIndicator.setAttribute('href', "#svg-indicator--circle");
//       }

//       if (turn == "X") {
//         turnIndicator.setAttribute('href', "#svg-indicator--cross");
//       }

//       reEnableCells();

      

//       // If the game is PvP, subsequent code is no longer needed:      
//       if (savedState.type == 'PvP') return;

//       // At this point, the game is a PvC. If the saved state
//       // is at an "X" turn, that means that one whole playerClick
//       // sequence has been completed. That is, the computer has already taken
//       // its turn.
//       if (turn == "X") return;

//       // This portion of the code will execute if:
//       //  1) The game is PvC.
//       //  2) The refresh button was clicked before computer could take its turn.
//       if (xCount > oCount) {
//         computerTurn(savedBoard)
//       }
// }
