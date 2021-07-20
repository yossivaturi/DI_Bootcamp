// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount;
const vat = 0.17;
let details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((value, index, arr) => {
    let num = parseInt(value);
    if (num < 0) {
        arr[index] = (num * (1 + vat)).toString();
    }
})

console.log(details);