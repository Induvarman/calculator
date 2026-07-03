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
  const prev = Number(pre);
  const current = Number(cur);

  switch(op) {
    case '+': 
      pre = add(prev, current);
      break;
    case '-': 
      pre = sub(prev, current);
      break;
    case 'x': 
      pre = mul(prev, current);
      break;
    case '/': 
      pre = divide(prev, current);
      break;
  }
  return pre;
}