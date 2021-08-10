// STEPS BEFORE SOLUTION: 
// npm init -y (INSIDE PROJECT FOLDER)
// npm install --save-dev nodemon (INSIDE PROJECT FOLDER)
// add to "scripts" inside package.json file the nodemon script
// "start": "nodemon jsFileYouWantToExecute.js"
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon jsfile.js"
//   }
// npm start on terminal should listen to changes on your project


// Exercise 1 + 2 : Hello Node.Js
// Create a new folder called - npm-node
// Create a JS file called - main.js
// Add the following code to the file main.js :

// let a = 5;
// let b = 10;


// Write some more code in the main.js file so when you run it in the 
// command prompt it logs Hello you are 15


// console.log(`Hello you are ${a+b}`);



// Exercise 3 : Nodemon


let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b;


console.log("first run:", a + b);
console.log("second run:", x + c);