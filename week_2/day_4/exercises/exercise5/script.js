// Exercise 5 : Amazon Shopping
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

const checkBasket = () => {
    let item = prompt("enter item");
    if(item in amazonBasket){
        alert(`the item ${item} is in the basket`);
    } 
}

checkBasket();
