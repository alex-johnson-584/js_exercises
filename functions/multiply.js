let rlSync = require('readline-sync');
let num1;
let num2;
function multiply() {
  num1 = rlSync.question("Enter the first number: ");
  num2 = rlSync.question("Enter the second number: ");
  return num1 * num2;
}
let result = multiply();
console.log(`${num1} * ${num2} = ${result}`);