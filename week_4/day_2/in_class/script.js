//FIRST EXERCISE
// let username = "John";

// function checkName(user) {
//     console.log("username = user", username === user)
//     user += "Smith";//CREATES A NEW ADDRESS IN STACK with the new value
//     console.log("username = user", username === user)
//     console.log("username = ", user, username)
// }
// console.log("before username = ", username)
// checkName(username)
// console.log("after username = ", username)

// JOHN 
// TRUE - because user parameter has the same value and type as username global variable
// user POINTS TO THE SAME ADDRESS as username 
// FALSE - because we changed the user parameter value and we didnt changed username global variable
// JOHNSMITH JOHN
// JOHN

// -----------------------------------------------------------------------------
let name = "John";

function checkName() {
    console.log("in the checkName func : ", aname)
    let nameUppercase = aname.toUpperCase();
    //lexical scope, the inner function has access to the variables 
    //of the outer function
    function addExclamation() {
        let test = "hello";
        nameUppercase += "!"
        console.log("in the addExclamation func NAME_TO_UPPERCASE: ",
            nameUppercase);
    };
    addExclamation();
    addExclamation();
    addExclamation();
}
checkName();


// Represent the call stack

//checkName() => toUpperCase() => addExclamation() => console.log()
// => addExclamation() => console.log() => addExclamation() => console.log()