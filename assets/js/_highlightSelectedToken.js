function highlightSelectedToken(e) {
  const isCrossSelected = e.target.classList.contains("pt__cross"),
    tokenContainer = document.querySelector(".pt__choices"),
    modifierCross = "pt__choices--cross-selected",
    modifierCircle = "pt__choices--circle-selected",
    alertMsg = document.querySelector(".pt__alert");

  tokenContainer.classList.remove(modifierCross, modifierCircle);
  alertMsg.classList.remove("active");

  if (isCrossSelected) {
    tokenContainer.classList.add(modifierCross);
  } else {
    tokenContainer.classList.add(modifierCircle);
  }
}

export { highlightSelectedToken };
