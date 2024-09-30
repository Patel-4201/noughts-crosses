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

// =====Start the game =====
function startGame() {
  // current player set the random player
  // console.log("1");
  currPlayer = getPlayer();
  virtualGrid = new Array(9).fill("");
  currentPlayerEl.textContent = currPlayer;
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
    box.style.cursor = "pointer"; // Reset cursor style
  });
}

resetBtn.addEventListener("click", handleReset);

// start the game on page load
document.addEventListener("DOMContentLoaded", startGame);
