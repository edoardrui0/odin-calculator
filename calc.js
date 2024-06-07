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

let operate = (numA, numB, operator) => add(numA, numB);

let displayValue = [];

let numClick = () => {
  numberBtn.forEach((num) => {
    num.addEventListener("click", () => {
      displayValue.push(num.value);
      let joinValue = displayValue.join("");
      display.textContent = parseInt(joinValue);
    });
  });

  zeroBtn.addEventListener("click", () => {
    if (displayValue.length > 0) {
      displayValue.push(zeroBtn.value);
      let joinValue = displayValue.join("");
      display.textContent = joinValue;
    }
  });
};

let clearClick = () => {
  clearBtn.addEventListener("click", () => {
    displayValue = [];
    display.textContent = "0";
  });
};

numClick();
clearClick();
