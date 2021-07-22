// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member); // output: Person - NO! 
//OUTPUT IS: object