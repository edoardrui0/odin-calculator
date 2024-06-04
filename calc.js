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

console.log(operate(5, 8));
