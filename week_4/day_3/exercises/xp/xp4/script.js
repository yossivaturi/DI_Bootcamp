// Exercise 4: Employees #2

// Instructions

// Using this object:

let student = [{
    name: "Ray",
    course: "Computer Science",
    isPassed: true
}, {
    name: "Liam",
    course: "Computer Science",
    isPassed: false
}, {
    name: "Jenner",
    course: "Information Technology",
    isPassed: true
}, {
    name: "Marco",
    course: "Robotics",
    isPassed: true
}, {
    name: "Kimberly",
    course: "Artificial Intelligence",
    isPassed: false
}, {
    name: "Jamie",
    course: "Big Data",
    isPassed: false
}];
//1. Use the filter() method to congratulate 
//the students that passed the course.
student.filter((v) => v.isPassed === true)
    .map((v) => console.log(`Congraulations ${v.name}`));