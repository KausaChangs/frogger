const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

function moveFrog() {
  console.log("moved");
}

document.addEventListener("keyup", moveFrog);
