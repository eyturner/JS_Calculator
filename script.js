const add = (a, b) => a + b;
const sub = (a, b) => b - a;
const mult = (a, b) => a * b;
const div = (a, b) => b / a;

const operate = function(a, b, op) {
  switch (op) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return sub(a, b);
      break;
    case '×':
      return mult(a, b);
      break;
    case '÷':
      return div(a, b);
      break;
    default:
      return "Error";
      break;
  }
}

main = function() {
  let savedResult = document.querySelector('#savedResult');
  let result = document.querySelector('#result');
  let nums = [];
  let ops = [];
  let currNum = "";
  const operators = document.querySelectorAll('.operator');
  const digits = document.querySelectorAll('.number');
  let editMode = true;

  operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
      op = operator.textContent.charAt(9);
      if (op == 'c') {
        nums = [];
        ops = [];
        currNum = "";
        savedResult.textContent = "";
        result.textContent = "";
        editMode = true;
      } else if (op == '<') {
        currNum = currNum.slice(0,-1);
        result.textContent = currNum;
      } else if (ops.length < 1) {
        ops.push(op);
        nums.push(parseFloat(currNum));
        savedResult.textContent = nums[0];
        currNum = "";
        editMode = true;
      } else {
        editMode = false;
        if (currNum != "") {
          nums.push(parseFloat(currNum));
          a = nums.pop();
          b = nums.pop()
          if (a == 0 && ops[0] == '÷') {
            result.textContent = "Nice try loser"
          } else {
            solution = operate(a, b, ops.pop());
            if (op != '=') {
              ops.push(op);
            }
            currNum = solution
            result.textContent = solution;
          }
        } else {
          editMode = true;
        }
      }
    });
  });

  digits.forEach((digit) => {
    digit.addEventListener('click', (e) => {
      if (editMode) {
        currNum += digit.textContent.charAt(9);
        result.textContent = currNum;
      }
    });
  });
}

main();
