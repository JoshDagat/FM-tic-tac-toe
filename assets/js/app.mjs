import { selectToken } from "./selectToken.mjs";
import { startGame } from "./startGame.mjs";
import { quitGame } from "./quitGame.mjs";
import { nextRound } from "./nextRound.mjs";


const TOKEN_CONTAINER = document.querySelector(".pt__choices")
TOKEN_CONTAINER.addEventListener("click", selectToken)

const NEW_GAME_BTNS = document.querySelectorAll(".btn--sm");
NEW_GAME_BTNS.forEach(btn => btn.addEventListener("click", startGame));



const quitBtns = document.querySelectorAll(".btn__quit-game")
quitBtns.forEach(button => button.addEventListener("click", quitGame))

const nextRoundBtns = document.querySelectorAll(".btn__next-round");
nextRoundBtns.forEach(button => button.addEventListener("click", nextRound))