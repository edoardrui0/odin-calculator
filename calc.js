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

/* 
  let test1 = ["2", ".", "5"];
  let test2 = ["2", ".", "5"];
  let parse1 = parseFloat(test1.join(""));
  let parse2 = parseFloat(test2.join(""));
  console.log(operate(parse1, parse2, multiply));
*/

// displayed first before operands
let displayValue1 = [];
let isEnterFirstValue = true;

// displayed after operands are selected
let displayValue2 = [];

// eventListeners to update display
let numClick = () => {
  numberBtn.forEach((num) => {
    num.addEventListener("click", () => {
      if (isEnterFirstValue) {
        if (num.value === "." && displayValue1.includes(".")) {
          return;
        }
        displayValue1.push(num.value);
        let joinValue = displayValue1.join("");
        display.textContent = joinValue;
        console.log(displayValue1);
      } else {
        if (num.value === "." && displayValue2.includes(".")) {
          return;
        }
        displayValue2.push(num.value);
        let joinValue = displayValue2.join("");
        display.textContent = joinValue;
        console.log(displayValue2);
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
      display.textContent = "0";
      isEnterFirstValue = false;
    });
  });
};

// clears display
let clearClick = () => {
  clearBtn.addEventListener("click", () => {
    displayValue1 = [];
    display.textContent = "0";
  });
};

operandClick();
numClick();
clearClick();

// floatValue1 = parseFloat(displayValue1.join(""));
