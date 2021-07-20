// Exercise 4 : Currying
// Analyse the code below, and before executing it,
// predict the outcome of the last line.
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5);
//now add5 should hold pointer the inner function with a=5

console.log(add5(12)); //now we provide b=12 for the inner function that holds a=5
//so my prediction is 17