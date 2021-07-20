// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, 
// predict the outcome of the last line.
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);

// my prediction : 13

const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen); // prints the inner function y => x + y;
console.log(addToTen(3)); //im providing input of 3 to the inner function
//which remembers that the outer function accepted a input of 10