let firstNum;
let secondNum;
let operation = "clear";
let actualValue = 0;
let start = true;
let lastClickOp = false;

function add(firstNum, secondNum) {
	return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
	return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
	return firstNum / secondNum;
}

function operate(firstNum, secondNum, operFunc) {
	return operFunc(firstNum, secondNum);
}

const digitButtons = document.querySelector('.digit-buttons');

// Add every grid square to grid
for (let i = 0; i < 10; i++) {

	const button = document.createElement('button');
	button.textContent = i;
	button.className = "num"

	// Add color changing function to square
	button.addEventListener('click', function() {
		sendToInput(button);
	});


	digitButtons.appendChild(button);
}


const funcButtons = document.querySelectorAll('.func');

// we use the .forEach method to iterate through each button
funcButtons.forEach((button) => {

	// and for each one we add a 'click' listener
	button.addEventListener('click', () => {
		sendToInput(button);
	});
});

const resetButtons = document.querySelectorAll('.reset');

// we use the .forEach method to iterate through each button
resetButtons.forEach((button) => {

	// and for each one we add a 'click' listener
	button.addEventListener('click', () => {
		sendToInput(button);
	});
});

// changes color of square based on current value of color input
function sendToInput(button) {

	const input = document.querySelector('#input');
	if (button.className == "num") {

		// does not replace display if start
		if (start) {

			input.textContent = button.textContent;
			input.textContent = parseInt(input.textContent);
			actualValue = parseInt(input.textContent);
      start = false;
		}
    else {
			if (lastClickOp) {
				input.textContent = button.textContent;
        lastClickOp = false;
			}
      else {
				input.textContent += button.textContent;
			}
		}
	}
  if(button.className == "func" && !start){
    if(!lastClickOp){
      if(operation != "clear"){
        if(operation == "add"){actualValue = operate(actualValue,parseInt(input.textContent), add);}
        if(operation == "subtract"){actualValue = operate(actualValue,parseInt(input.textContent), subtract);}
        if(operation == "multiply"){actualValue = operate(actualValue,parseInt(input.textContent), multiply);}
        if(operation == "divide"){actualValue = operate(actualValue,parseInt(input.textContent), divide);}
        input.textContent = actualValue;
      }
    }
    lastClickOp = true;
    operation = button.name;
  }
  if(button.className == "reset"){
    if(button.name == "clear"){
      operation = "clear";
      actualValue = 0;
      start = true;
      lastClickOp = false;
      input.textContent = 0;
    }
    if(button.name == "equal"){
      if(operation == "add"){actualValue = operate(actualValue,parseInt(input.textContent), add);}
      if(operation == "subtract"){actualValue = operate(actualValue,parseInt(input.textContent), subtract);}
      if(operation == "multiply"){actualValue = operate(actualValue,parseInt(input.textContent), multiply);}
      if(operation == "divide"){actualValue = operate(actualValue,parseInt(input.textContent), divide);}
      input.textContent = actualValue;
      operation = "clear";
      actualValue = 0;
      start = true;
      lastClickOp = false;
    }

  }
}
