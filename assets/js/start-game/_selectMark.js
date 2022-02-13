const marks = document.querySelectorAll(".mark");

marks.forEach((mark) => {
  mark.addEventListener("click", selectMark);
});

function selectMark(e) {
  const cross = document.querySelector(".start-menu__cross-mark");
  const circle = document.querySelector(".start-menu__circle-mark");

  e.target.classList.toggle("start-menu__mark--selected");

  if (e.target === cross) {
    if (circle.classList.contains("start-menu__mark--selected")) {
      circle.classList.remove("start-menu__mark--selected");
    }
  } else {
    if (cross.classList.contains("start-menu__mark--selected")) {
      cross.classList.remove("start-menu__mark--selected");
    }
  }
}

export default selectMark;
