// Exercise 8 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)


const calcBill = () => {
    let bill = parseInt(prompt("Hey john, what is the bill amount?"));
    let tip = 0;
    if(bill<50){
        tip = bill * 0.2;
    } else if(bill>=50 && bill<=200){
        tip = bill * 0.15;
    } else {
        tip = bill * 0.1;
    }
    alert(`Tip amount: ${tip}$ | Final bill (bill + tip): ${bill + tip}`);
}
calcBill();