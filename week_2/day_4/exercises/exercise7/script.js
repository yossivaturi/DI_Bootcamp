// Exercise 7 : Shopping List
// Instructions
// Create an array called shoppingList with the following 
//items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. 
//In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
let shoppingList =["banana", "orange", "apple"];
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
//Code
const myBill = () => {
    let sum = 0;
    for(let i=0; i<shoppingList.length; i++){    
        if(shoppingList[i] in stock && stock[shoppingList[i]] > 0){
            sum += prices[shoppingList[i]];
            stock[shoppingList[i]]--;
        }   
    }
    console.log(stock);
    return sum;
}

console.log(myBill());