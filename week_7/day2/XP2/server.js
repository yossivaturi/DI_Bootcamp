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


const express = require('express');
const app = express();

// In the server.js file, 
// create an express server and a route /, using the GET method.
app.get('/', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

    res.json(user);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));