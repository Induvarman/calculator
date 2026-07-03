const keyboard = document.querySelector(".keyboard");
const display = document.querySelector(".display");

let prevNum = "";
let currentNum = "";
let operator = "";

keyboard.addEventListener("click", e => {
  if (!e.target.matches("button")) return;

  if (e.target.matches(".btn")) {
    currentNum += e.target.id;
    
  } 
  else if (e.target.matches(".btn-op")) {
    currentNum = "";
  }
});