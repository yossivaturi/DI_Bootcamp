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


//XP1
// 1 - Import Node.js core module
// const http = require('http');
// // 2 - creating server
// const server = http.createServer((req, res) => {
//     //handle incoming requests here..
//     res.write(`<h1>hello</h1>`);
//     res.write(`<p>what up</p>`);
//     res.write(`<p>asshole</p>`);
//     res.end();
// });
// //3 - listen for any incoming requests
// server.listen(3000);
// console.log('Node.js web server at port 3000 is running..');


//XP2
// const http = require('http');
// const server = http.createServer((req, res) => {
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//     // 1. inform the client that we send JSON response in the header with the appropriate content type.
//     res.setHeader("Content-Type", "application/json");
//     //2. 
//     res.writeHead(200);
//     res.end(JSON.stringify(user));

// });
// server.listen(8080);
// console.log('Node.js web server at port 8080 is running..');