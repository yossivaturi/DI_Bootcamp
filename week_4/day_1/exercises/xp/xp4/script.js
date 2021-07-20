// Exercise 4 : Colors #2
// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
//ternary operator solution
colors.forEach((value, index, arr) => {
    index < 3 ?
        console.log(`${index + 1}${ordinal[index + 1]} choice is ${value}`) :
        console.log(`${index + 1}${ordinal[0]} choice is ${value}`);

});


//switch case solution
// colors.forEach((value, index, arr) => {
//     let ord;
//     switch (index) {
//         case 0:
//             ord = ordinal[1];
//             break;
//         case 1:
//             ord = ordinal[2];
//             break;
//         case 2:
//             ord = ordinal[3];
//             break;
//         default:
//             ord = ordinal[0];
//     }
//     console.log(`${index + 1}${ord} choice is ${value}`);
// });