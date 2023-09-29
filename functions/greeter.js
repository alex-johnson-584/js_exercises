let rlSync = require('readline-sync');

function getName(part) {
  return rlSync.question(`What is your ${part} name? `);
}
let first = getName("first");
let last = getName("last");
console.log(`Hello, ${first} ${last}!`);
