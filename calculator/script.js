let displayExpression = document.getElementById('expression');
let displayResult = document.getElementById('result');
let currentInput = '';
let fullExpression = '';

function appendNumber(number) {
  currentInput += number;
  fullExpression += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  fullExpression += ` ${op} `;
  currentInput = '';
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    fullExpression += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  fullExpression = '';
  updateDisplay('0');
}

function deleteLast() {
  if (currentInput !== '') {
    currentInput = currentInput.slice(0, -1);
    fullExpression = fullExpression.slice(0, -1);
    updateDisplay();
  }
}

function calculate() {
  try {
    let result = eval(fullExpression.replace(/×/g, '*').replace(/÷/g, '/'));
    displayResult.textContent = result;
    currentInput = result.toString();
    fullExpression = result.toString();
  } catch (error) {
    displayResult.textContent = 'Error';
  }
}

function updateDisplay() {
  displayExpression.textContent = fullExpression;
  displayResult.textContent = currentInput || '0';
}
