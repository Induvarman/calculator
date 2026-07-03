const keyboard = document.querySelector(".keyboard");
const display = document.querySelector(".display");

let prevNum = "";
let currentNum = "";
let operator = "";

keyboard.addEventListener("click", e => {
  if (!e.target.matches("button")) return;

  if (e.target.matches(".btn")) {
    appendCurrentNum(e.target.id);
  } 
  else if (e.target.matches(".btn-op")) {
    clickOperator(e.target.id);
  }

  else if (e.target.matches("#eqls")) {
    display.textContent = operate(prevNum, currentNum, operator);
    clearData();
  }

  else if(e.target.matches(".AC")) {
    allClear();
  }
});

function appendCurrentNum(keyNum) {
  currentNum += keyNum;
  if (prevNum) {
    display.textContent += keyNum;
    return;
  }
  display.textContent = currentNum;
}

function clickOperator(op) {
  if (prevNum && currentNum) {
    prevNum = operate(prevNum, currentNum, operator)
    currentNum = "";
    operator = op;
    display.textContent = prevNum + operator;
    return;
  }
  prevNum = currentNum;
  currentNum = "";
  operator = op;
  display.textContent += op;
}

function allClear() {
  display.textContent = "0";
  clearData();
}

function clearData() {
  prevNum = "";
  currentNum = "";
  operator = "";
}