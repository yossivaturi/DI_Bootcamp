// Exercise 3 : Star Wars
// Instructions
// Using this array 
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
//reduce() returns a single value accumalted

//build the callback function first (not neccesary)
let reducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;
console.log(epic.reduce(reducer));