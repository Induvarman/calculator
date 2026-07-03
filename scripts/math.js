function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function divide(a, b) { 
  return a / b;
}

function operate(pre, cur, op) {
  const prev = Number(prevNum);
  const current = Number(currentNum);

  switch(op) {
    case '+': 
      pre = add(prev, current);
      break;
    case '-': 
      pre = sub(prev, current);
      break;
    case '*': 
      pre = mul(prev, current);
      break;
    case '/': 
      pre = divide(prev, current);
      break;
  }
  return pre;
}