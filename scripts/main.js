// const userInput = prompt("enter something");

// console.log(userInput);

// const username = "weekend";

// console.log(`hello ${username}`);

// function double() {
//   const userInput = prompt("enter number");
//   const userdouble = userInput * 2;
//   console.log(userdouble);
// }

// double();

// const resetBtn = document.querySelector(".btn-reset");
// const gameGrid = document.querySelector(".game-grid");

// const color = ["pink", "blue", "yellow", "orange", "red"];
// let count = 0;

// resetBtn.addEventListener("click", function () {
// alert("hii");
//   resetBtn.style.background = "red";

//   resetBtn.classList.remove("active");
// if (count > 5) count = count - 6;
// gameGrid.style.background = color[count];
// count = count + 1;
// });

// const fruits = ["orange", "cheeku", "apple", "guvava"];
// const b = fruits.shift();
// // const a = fruits.pop();

// console.log(b)
// const num = ["orange", "cheeku", "apple", "guvava"];
// function getBetween(input) {
//   return input.slice(1, input.length - 1);
// }
// const x = getBetween(num);
// console.log(x);

// console.log(num);

// const fruits = ["orange", "cheeku", "apple", "guvava"];
// const a = fruits.join("_");

// console.log(a);

// function table(num) {
//   for (let i = 1; i <= 10; i++);
//   // console.log(`${num}x${i}=${num * i}`);
//   console.log(num + "x" + i + "=" + num * i);
// }
// table(3);

// const nums = [45, 78, 525, 12, 564];

// for (let k = 0; k < nums.length; k++) {
//   nums[k] = nums[k] * 3;
// }

// console.log(nums);

// callback function,no name
// nums.forEach(function (v, idx) {
//   // console.log(a * 2);
//   nums[idx] = v * 2;
// });
// console.log(nums);

// const x = nums.map(function (value) {
//   return value % 2 == 0;
// });
// console.log(x);
import chances from "./chances";
//noughts-crosses

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
  currentPlayerEl.textContent = newPlayer;
}

// =====Start the game =====
function startGame() {
  // current player set the random player
  console.log("1");
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

console.log(boxes);

boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  //TODO:
  alert("hii");
}

resetBtn.addEventListener("click", handleReset);

// start the game on page load
document.addEventListener("DOMContentLoaded", startGame);
