// Exercise 6 : Challenges
// 1.Evaluate these (ie True or False)
console.log([2] === [2]); //value of an object is memory address
console.log({} === {});


// 2.What is the value of property “number” for each object.

const object1 = {
    number: 5
};
const object2 = object1;
const object3 = object2;
const object4 = {
    number: 5
};
object1.number = 4;
console.log(object1.number, object2.number, object3.number, object4.number);
//obj1,obj2,obj3 - 4 ,obj4 - 5

// Create a class Animal with the attributes name, type and color
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class.
// It has a method called sound().
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`name:${this.name},type:${this.type},color:${this.color}`);
    }
}

// Create a cow that accepts a name,
// type and color and has a sound method that moo’s her name, type and color.
let cow = new Mamal("milly", "cow", "red");
cow.sound();