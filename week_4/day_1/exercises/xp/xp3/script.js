// Exercise 3 : Colors
// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Check if this array includes the color “Violet”.
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
if (colors.includes("Violet")) {
    console.log("exists");
}

colors.forEach((value, index, arr) => console.log(`${index + 1}# choice is ${value}`));