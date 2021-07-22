// Exercise

// Copy the object into another one (1 spread opeator)
// To allow copying the nested object, use 2 spread operator
// Create a new object that is equal to the student object, 
//with another property called goodstudent = true

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// let newStudent = {
//     ...student
// };
// console.log(newStudent);

// let newStudent2 = {
//     ...student,
//     scores: {
//         ...student.scores
//     }
// }

// console.log(newStudent2);




//Analyse the code below. Display the type of each rabbit and make them speak
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
console.log(killerRabbit.type, blackRabbit.type);
killerRabbit.speak("give carrot or i kill you");
blackRabbit.speak("wsup doc");