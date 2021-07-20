// // Exercise
// 2 functions : 1 is retrieve the name of the user, the other is is capitalizing it
// function retrieve() {
//     let username = prompt("enter your name");
//     return username;
// }


// function capitalize(username = retrieve()) {
//     console.log(username);
//     username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
//     console.log(username);
// }

// capitalize();
// capitalize('Sarah');


// function compare(a, b, operator) {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     }
//     return [a, b];
// }

// const compare = (a, b, operator) => {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     }
//     return [a, b];
// }

// console.log(compare(2, 3, "+"));

let classmates = ["Josh", "Lily", "Sophie", "Mark"];
classmates.forEach((name, index, arr) => arr[index] = `${name}!`);

console.log(classmates);
// Add exclamation point at the end of each element