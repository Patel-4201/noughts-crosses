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

const resetBtn = document.querySelector(".btn-reset");
const gameGrid = document.querySelector(".game-grid");

const color = ["pink", "blue", "yellow", "orange", "red"];
let count = 0;

resetBtn.addEventListener("click", function () {
  // alert("hii");
  //   resetBtn.style.background = "red";

  //   resetBtn.classList.remove("active");
  if (count > 5) count = count - 6;
  gameGrid.style.background = color[count];
  count = count + 1;
});
