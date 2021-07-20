// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether
// the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (input) => typeof input === 'string';


console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));