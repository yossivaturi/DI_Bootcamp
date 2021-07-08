// Exercise 6 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true


const Quarters  = 0.25
const Dimes = 0.10
const Nickels = 0.05
const Pennies = 0.01

const changeEnough = (arr, itemPrice) => {
    let currentAmount = 0;
    currentAmount += arr[0] * Quarters;
    currentAmount += arr[1] * Dimes;
    currentAmount += arr[2] * Nickels;
    currentAmount += arr[3] * Pennies;
    if(currentAmount>=itemPrice){
        return true;
    }
    return false;   
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));