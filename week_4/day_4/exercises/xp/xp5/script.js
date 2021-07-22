// Exercise 5 : Dog Class
// Instructions
// Analyze the options below.
class Dog {
    constructor(name) {
        this.name = name;
    }
};
// 1.Which constructor will successfully extend the Dog class?
// i got -Uncaught ReferenceError: Must call super constructor in derived class 
//before accessing 'this' or returning from derived constructor
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };

// 2 - I think this one is perfect
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};


// 3 - no error but the name attribute of the labardor object
// will be equal to ""
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };


// 4 - i got Uncaught ReferenceError: Must call super constructor in 
//derived class before accessing 'this' or returning from derived constructor
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

let dog = new Labrador("will", 100);
console.log(dog);