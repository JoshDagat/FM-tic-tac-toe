import { GAME_STATE as GS} from "./gameState.mjs";

function selectToken(e) {
  const crossModifier = "cross-selected",
        circleModifier = "circle-selected",
        tokenContainer = document.querySelector(".game-tokens__choices"),
        alertMsg = document.querySelector(".game-tokens__alert"),
        audioClick = document.querySelector('#audio-generic-click');

  tokenContainer.classList = "game-tokens__choices"
  alertMsg.classList.remove("active");

  if (e.target.classList.contains("cross")) {
    tokenContainer.classList.add(crossModifier);
  } else if (e.target.classList.contains("circle")) {
    tokenContainer.classList.add(circleModifier)
  }

  audioClick.currentTime = 0;
  audioClick.play();

}

export {selectToken}