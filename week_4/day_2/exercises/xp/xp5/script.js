// Exercise 5 : Composing
// Analyse the code below, and before executing it,
// predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
//compose its a function who accepts 2 functions as an input (f, g)
//and returns a function who accepts a number a
//invoking function g with input a
//then invoking function f with input g(a) 
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10));
//my prediction: 16
//because add5=g add1=f   a=10  g(a)=15  f(g(a))=f(15)=add1(15)=16