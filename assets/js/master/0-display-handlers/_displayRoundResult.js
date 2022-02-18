// import { globals } from "../../_global.js";

// function displayRoundResult() {
//   const result = globals.roundWinner;

//   if (result === "cross") {
//     showCrossSVG();
//     displayModal();
//   } else if (result === "circle") {
//     showCircleSVG();
//     displayModal();
//   } else if (result === "tied") {
//     hideSVGs();
//     displayModal();
//   }
// }

// function showCrossSVG() {
//   const modalCross = globals.elements.modalCross,
//     modalCircle = globals.elements.modalCircle;

//   modalCross.classList.add("active");
//   modalCircle.classList.remove("active");
// }

// function showCircleSVG() {
//   const modalCircle = globals.elements.modalCircle,
//     modalCross = globals.elements.modalCross;

//   modalCircle.classList.add("active");
//   modalCross.classList.remove("active");
// }

// function hideSVGs() {
//   // If round is tied
//   const modalCircle = globals.elements.modalCircle,
//     modalCross = globals.elements.modalCross;

//   modalCircle.classList.remove("active");
//   modalCross.classList.remove("active");
// }

// function displayMessage() {
//   const gameType = globals.gameType,
//     roundWinner = globals.roundWinner;
// }

// function displayModal() {
//   const modalRoundResult = globals.elements.modalRoundResult;

//   modalRoundResult.classList.add("modal--active");
// }

// export { displayRoundResult };
