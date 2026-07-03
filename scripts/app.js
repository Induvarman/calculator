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
    clickOperator(e.target, e.target.id);
    avoidConsecutiveOp();
  }

  else if (e.target.matches("#eqls")) {
    if(edgeCasesOfEquals())
      return;
    display.textContent = operate(prevNum, currentNum, operator);
    clearData();
  }

  else if(e.target.matches(".AC")) {
    allClear();
  }
});

function appendCurrentNum(keyNum) {
  currentNum += keyNum;
  avoidConsecutiveOp();
  if (prevNum) {
    display.textContent += keyNum;
    return;
  }
  display.textContent = currentNum;
}

function clickOperator(element, op) {
  if (prevNum && currentNum) {
    prevNum = operate(prevNum, currentNum, operator);

    if (typeof prevNum === "string") {
      display.textContent = prevNum;
      clearData();
      return;
    }

    currentNum = "";
    operator = op;
    avoidConsecutiveOp();
    display.textContent = prevNum + operator;
    return;
  }

  prevNum = currentNum;
  currentNum = "";
  operator = op;
  avoidConsecutiveOp();
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

function avoidConsecutiveOp() {
  if (!currentNum) {
    disableOpButtons();
  } 
  else {
    enableOpButtons();
  }
}

function disableOpButtons() {
  const buttons = document.querySelectorAll(".btn-op");
  for (const button of buttons) {
    button.disabled = true;
  }
}

function enableOpButtons() {
  const buttons = document.querySelectorAll(".btn-op");
  for (const button of buttons) {
    button.disabled = false;
  }
}

function edgeCasesOfEquals() {
  let isEdgeCase = 0;
  if (!currentNum && !prevNum && !operator) {
    display.textContent = "0";
    return ++isEdgeCase;
  }
  else if(!prevNum && !operator) {
    display.textContent = currentNum;
    return ++isEdgeCase;
  }
  else if(!currentNum && operator && prevNum) {
    display.textContent = 0;
    return ++isEdgeCase;
  }
}