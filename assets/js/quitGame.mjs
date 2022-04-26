function quitGame() {
  const modals = document.querySelectorAll(".modal-container"),
        startMenu = document.querySelector(".start-menu"),
        mainGame = document.querySelector(".main-game"),
        TOKEN_CONTAINER = document.querySelector(".pt__choices"),
        X_MODIFIER = "pt__choices--cross-selected",
        O_MODIFIER = "pt__choices--circle-selected";

  modals.forEach(modal => modal.classList.remove("active"));
  mainGame.classList.remove("active")
  TOKEN_CONTAINER.classList.remove(X_MODIFIER, O_MODIFIER)

  startMenu.classList.add("active")

  const CELLS = document.querySelectorAll(".play-cell")
  CELLS.forEach(cell => {
    let target = cell.querySelector(".play-cell__link")
    target.setAttribute("href", null)
  })
}

export {quitGame} 
