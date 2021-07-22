// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) 
//that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik'`
// Destructure this object inside the function.

const displayStudentInfo = (studentObject) => {
    let {
        first,
        last
    } = studentObject;
    return `your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({
    first: 'Elie',
    last: 'Schoppik'
}));