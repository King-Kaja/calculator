let firstNum;
let secondNum;
let operation;

function add(firstNum, secondNum ) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum ) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum ) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum ) {
  return firstNum / secondNum;
}

function operate(firstNum, secondNum,operation ) {
  return operation(firstNum,secondNum);
}

console.log(operate(5,2, subtract));
