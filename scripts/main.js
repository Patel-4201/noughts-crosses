// ===== import another js file =====
import chances from "./chances";

const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

// ===== Game Variables =====
const players = ["O", "X"];
let currPlayer;
let virtualGrid;

// functions
function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return players[rn];
}

function swapPlayer() {
  const newPlayer = currPlayer === "O" ? "X" : "O";
  currPlayer = newPlayer;
  currentPlayerEl.textContent = currPlayer;
}

// ===== Start the game =====
function startGame() {
  // current player set the random player
  // console.log("1");
  currPlayer = getPlayer();
  virtualGrid = new Array(9).fill("");
  currentPlayerEl.textContent = currPlayer;
}
function checkifWon() {
  chances.forEach((chances) => {
    // destructure
    const [c1, c2, c3] = chances;
    if (
      virtualGrid[c1] !== "" &&
      virtualGrid[c1] !== "" &&
      virtualGrid[c1] !== "" &&
      virtualGrid[c1] === virtualGrid[c2] &&
      virtualGrid[c2] === virtualGrid[c1] &&
      virtualGrid[c3] === virtualGrid[c1]
    ) {
      const winner = virtualGrid[c1];
      headingEl.textContent = `winner: ${winner}`;

      boxes[c1].classList.add("green");
      boxes[c2].classList.add("green");
      boxes[c3].classList.add("green");

      boxes.forEach((box) => (box.style.pointerEvents = "none"));
      resetBtn.classList.toggle("active");

      return;
    }
  });
  const x = virtualGrid.every((e) => e !== "");

  if (x) {
    headingEl.textContent = "there is a tie!";
    resetBtn.classList.toggle("active");
  }
}

function handleBoxClick(input) {
  if (virtualGrid[input] === "") {
    console.log(input);
    // show the current player as text content
    boxes[input].textContent = currPlayer;
    // hidden pointer
    boxes[input].style.cursor = "auto";
    // addd current player in our virtual grid
    virtualGrid[input] = currPlayer;
    console.log(virtualGrid);
    // check if won
    checkifWon();
    //  swap the player
    swapPlayer();
  }
}

// console.log(boxes);

boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  //TODO:
  // alert("hii");
  // Clear the virtual grid
  virtualGrid = new Array(9).fill("");

  // Clear the text content of each box
  boxes.forEach((box) => {
    box.textContent = "";
    // Reset cursor style
    box.style.cursor = "pointer";
    box.classList.remove("green");
  });
}

resetBtn.addEventListener("click", handleReset);

// start the game on page load
document.addEventListener("DOMContentLoaded", startGame);
