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

// calc operation variables
let numA;
let operator;
let numB;

// handles the start of the math operations
let operate = (numA, numB, operator) => operator(numA, numB);

// displayed first before operands
let displayValue1 = [];

// displayed after operands are selected
let displayValue2 = [];

// eventListeners to update display
let numClick = () => {
  numberBtn.forEach((num) => {
    num.addEventListener("click", () => {
      if (num.value === "." && displayValue1.includes(".")) {
        return;
      }
      displayValue1.push(num.value);
      let joinValue = displayValue1.join("");
      display.textContent = joinValue;
    });
  });

  zeroBtn.addEventListener("click", () => {
    if (displayValue1.length > 0) {
      displayValue1.push(zeroBtn.value);
      let joinValue = displayValue1.join("");
      display.textContent = joinValue;
    }
    console.log(displayValue1);
  });
};

// clears display
let clearClick = () => {
  clearBtn.addEventListener("click", () => {
    displayValue1 = [];
    display.textContent = "0";
  });
};

numClick();
clearClick();
