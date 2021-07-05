let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
// userCart["username"] = "Josh";
// console.log(userCart);
// console.log(userCart["cart"]["pear"]);
// console.log(userCart["prices"]["pear"]);
// let numberPear = userCart["cart"]["pear"];
// let pricePerPear = userCart["prices"]["pear"];
// let totalPricePear = numberPear * pricePerPear;
// alert(`The pears cost ${totalPricePear} shekels to ${userCart["username"]}`)

//exercise_in_class_1
// // 1.Change the price of the pear, so it will contain the Taxes
// userCart["prices"]["pear"] *= 1.17
// // let valueToChange = userCart["prices"]["pear"];
// // console.log(valueToChange);
// // userCart["prices"]["pear"] = valueToChange + (valueToChange * 0.17);
// console.log(userCart["prices"]["pear"]);

// // 2. Ask the user for the fruit he wants between Apple, Banana and Pear
// let userInput = prompt("pick a fruit between Apple, Banana and Pear");
// console.log(userInput);


// // 3. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// userInput = userInput.toLowerCase();
// console.log(userInput);

// // 4. Console.log the price for the specific fruit the user wants

// console.log(userCart["prices"][userInput]);





//exercise_in_class_2
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"
if (userCart["isUserSignedIn"]) {
    console.log(userCart["username"], userCart["password"]);
} else{
    alert("you need to sign in");
}

// Second Exercise - Try to change the password to 123456 for the 2nd instruction
// 1. If the user is John AND his password is 1234 - alert him "You are signed in"
// 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"
userCart["password"] = 123456;

if(userCart["username"] == "John" && userCart["password"] == "1234") {
    alert("You are signed in");
} else if(userCart["username"] == "John" || userCart["password"] == "1234") {
    alert("One credential is false");
} else{
    alert("you need to sign in");
}



