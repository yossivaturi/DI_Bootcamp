// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it,
// predict the outcome of the last line.
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1)); //predictred outcome : 31
//because the the (1) acts as the input for the nested function
//which holds (30) in her scope