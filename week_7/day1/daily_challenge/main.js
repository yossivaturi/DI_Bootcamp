// STEPS BEFORE SOLUTION: 
// npm init -y (INSIDE PROJECT FOLDER)
// npm i --save-dev nodemon (INSIDE PROJECT FOLDER)
// add to "scripts" inside package.json file the nodemon script
// "start": "nodemon jsFileYouWantToExecute.js"
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon jsfile.js"
//   }
// npm start on terminal should listen to changes on your project


const largeNumber = 356;

console.log("hello");
// 2.Use the exported module in a script.js file.
module.exports = {
    lgNum: largeNumber
}