function evenOrOdd(num) {
  if (!Number.isInteger(num)){
    console.log("oops");
    return;
  }
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(2.2);
evenOrOdd(2);
evenOrOdd(1);
evenOrOdd(0);
evenOrOdd(-1);