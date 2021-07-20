// Daily Challenge: Groceries
// What You Will Learn :
// Copying Objects


// Instructions
// Using this object :

let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson 
//Pass By Value & Pass By Reference

// 1.Copy this object using the method that was taught in today’s lesson.
// 2.Change the value of totalPrice to 35$. Will we also see this 
// modification in the copied objects ?
// 3.Change the value of payed to false.
// Will we also see this modification in the copied objects ? Why ?

// let groceriesCopy = groceries;
//Mutability : Copying By Reference => so its going to affect the original object


// let groceriesCopy = Object.assign({}, groceries);
// But be aware this is a shallow copy -
// nested objects are still copied as reference.

let groceriesCopy = JSON.parse(JSON.stringify(groceries));
// For "deep" copy, use JSON.parse(JSON.stringify(a))

groceriesCopy.totalPrice = "35$";
groceriesCopy.other.payed = false;

console.log(groceries);
console.log(groceriesCopy);