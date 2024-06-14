const calcContainer = document.querySelector("#calc-container");
const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

const clearBtn = document.querySelector("#clear-btn");
const numberBtn = document.querySelectorAll("#number-btn");
const operandBtn = document.querySelectorAll("#operand-btn");
const zeroBtn = document.querySelector("#zero-btn");
const decimalBtn = document.querySelector("#decimal-btn");
const equalBtn = document.querySelector("#equal-btn");

// basic logical functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// object that holds all logical functions
let operators = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

// calc operation variables
let numA;
let operator;
let numB;

// handles the start of the math operations
let operate = (numA, numB, operator) => operator(numA, numB);

// displayed first before operands
let displayValue1 = [];
let isEnterFirstValue = true;

// displayed after operands are selected
let displayValue2 = [];
let isEnterSecondValue = false;

// holds value of the operands
let displayOperand = [];
let isEnterOperand = false;

// holds value of sum
let displaySum = [];
let isEnterSum = false;

// eventListeners to update display
let numClick = () => {
  numberBtn.forEach((num) => {
    num.addEventListener("click", () => {
      if (isEnterFirstValue) {
        if (num.value === "." && displayValue1.includes(".")) {
          return;
        }
        if (displayValue1.length < 9) {
          displayValue1.push(num.value);
          let joinValue = displayValue1.join("");
          display.textContent = joinValue;
        }
      } else {
        if (num.value === "." && displayValue2.includes(".")) {
          return;
        }
        if (displayValue2.length < 9) {
          displayValue2.push(num.value);
          let joinValue = displayValue2.join("");
          display.textContent = joinValue;
        }
      }
    });
  });

  zeroBtn.addEventListener("click", () => {
    if (isEnterFirstValue) {
      if (displayValue1.length > 0) {
        displayValue1.push(zeroBtn.value);
        let joinValue = displayValue1.join("");
        display.textContent = joinValue;
      }
    } else {
      if (displayValue2.length > 0) {
        displayValue2.push(zeroBtn.value);
        let joinValue = displayValue2.join("");
        display.textContent = joinValue;
      }
    }
  });
};

// func for operands
let operandClick = () => {
  operandBtn.forEach((oper) => {
    oper.addEventListener("click", () => {
      displayOperand = oper.value;
      if (displayValue1.length > 0) {
        display.textContent = "0";
        isEnterFirstValue = false;
        isEnterSecondValue = true;
        isEnterOperand = true;
      }
    });
  });
};

// calculates sum if conditions met
let equalClick = () => {
  equalBtn.addEventListener("click", () => {
    isEnterSum = true;
    if (
      !isEnterFirstValue &&
      displayValue2.length > 0 &&
      isEnterOperand &&
      isEnterSum
    ) {
      let numA = parseFloat(displayValue1.join(""));
      let numB = parseFloat(displayValue2.join(""));
      let operObj = operators[displayOperand];

      let operFunc = operate(numA, numB, operObj);

      displaySum.push(operFunc);
      display.textContent = displaySum;
    }
    displaySum = [];
    displayValue1 = [];
    displayValue2 = [];
  });
};

// clears display
function clearClick() {
  clearBtn.addEventListener("click", () => {
    displayValue1 = [];
    displayValue2 = [];
    displaySum = [];
    isEnterFirstValue = true;
    display.textContent = "0";
  });
}

equalClick();
operandClick();
numClick();
clearClick();
