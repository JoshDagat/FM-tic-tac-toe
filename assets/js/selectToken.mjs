import { GAME_STATE as GS} from "./gameState.mjs";

function selectToken(e) {
  const X_MODIFIER = "pt__choices--cross-selected",
        O_MODIFIER = "pt__choices--circle-selected",
        tokenContainer = document.querySelector(".pt__choices"),
        alertMsg = document.querySelector(".pt__alert"),
        audioClick = document.querySelector('#audio-generic-click');

  tokenContainer.classList = "pt__choices"
  alertMsg.classList.remove("active");

  if (e.target.classList.contains("pt__cross")) {
    tokenContainer.classList.add(X_MODIFIER);
  } else if (e.target.classList.contains("pt__circle")) {
    tokenContainer.classList.add(O_MODIFIER)
  }

  audioClick.currentTime = 0;
  audioClick.play();

}

export {selectToken}