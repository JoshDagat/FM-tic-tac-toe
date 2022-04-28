import { GAME_STATE as GS} from "./gameState.mjs";

function selectToken(e) {
  const X_MODIFIER = "pt__choices--cross-selected",
        O_MODIFIER = "pt__choices--circle-selected",
        TOKEN_CONTAINER = document.querySelector(".pt__choices"),
        ALERT = document.querySelector(".pt__alert");

  TOKEN_CONTAINER.classList = "pt__choices"
  ALERT.classList.remove("active");

  if (e.target.classList.contains("pt__cross")) {
    TOKEN_CONTAINER.classList.add(X_MODIFIER);
  } else if (e.target.classList.contains("pt__circle")) {
    TOKEN_CONTAINER.classList.add(O_MODIFIER)
  }
}

export {selectToken}