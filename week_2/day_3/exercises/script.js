// // Exercise 1 : Your Favorite Colors

// let colors = ["blue", "green", "purple", "yellow"];
// let suffixes = ["st", "nd", "rd", "th"];

// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i + 1}${suffixes[i]} choice is`, colors[i]);
// }

//------------------------------------------------------------------------------

// // Exercise 2 : List Of People

// let people = ["Greg", "Mary", "Devon", "James"];
// //remove “Greg” from the people array.
// people.shift();
// console.log(people);
// //replace “James” to “Jason”.
// let index = people.indexOf("James");
// people[index] = "Jason";
// console.log(people);
// //add your name to the end of the people array.
// people.push("Yossi");
// console.log(people);
// //iterate through the people array and console.log each person.
// for (let i = 0; i < people.length; i++) {
//      console.log(people[i]);
// }
// //iterate through the people array and after you console.log “Jason” exit the loop.
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] == "Jason") {
//         break;
//     }   
// }
// //6.Write code to make a copy of the people array using slice.
// // The copy should NOT include “Mary” or your name.
// // The slice() method returns a shallow copy of a portion of an 
// // array into a new array object selected from start to 
// // end (end not included) where start and end represent the 
// // index of items in that array. The original array will not be modified.
// let copyPeople = people.slice(1, 3);
// console.log(copyPeople);

// //console.logs Mary’s index. take a look at indexOf on google.
// console.log(people.indexOf("Mary"));

// //Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// console.log(people.indexOf("Foo"));

// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of 
// // the last element in the array and the length of the array?
// // index of the last element = length of the array - 1

// let last = people[people.length - 1];
// console.log(last);

//------------------------------------------------------------------------------

// Exercise 3 : Repeat The Question
// let userInput;
// let num;
// do {
//     userInput = prompt("enter a number my man");
//     num = parseInt(userInput);
//     console.log(num);
//     console.log(typeof(num));
//     console.log(typeof(userInput));
// } while ( isNaN(num) || num < 10 );

//------------------------------------------------------------------------------

// Exercise 4 : Attendance
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// userName = prompt("Whats is your name?");
// userName = userName.toLowerCase();
// if(userName in guestList) {
//     console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`);
// } else{
//     console.log("Hi! I'm a guest.");
// }

//------------------------------------------------------------------------------

// Exercise 5 : Family
// let family = {
//     mom: "sara",
//     dad: "david",
//     child1: "avi",
//     child2: "miri"
// }

// for (let x in family) {
//   console.log(x); //keys
// }
// for (let x in family) {
//     console.log(family[x]); // values
// }

//------------------------------------------------------------------------------

// Exercise 6

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// console.log(`my name is ${details['is']} the ${details['the']}`);

//------------------------------------------------------------------------------

// Exercise 7 : Secret Group
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let letters = [];
// let secretSocietyName = "";
// //Build the letters array
// for(let i = 0; i < names.length; i++) {
//     letters[i] = names[i].charAt(0);  
// }
// console.log(letters);
// letters.sort();
// console.log(letters);
// secretSocietyName = letters.join(" ");
// console.log(secretSocietyName);