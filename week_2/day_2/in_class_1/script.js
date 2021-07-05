let nameVar = "username";
// key value pair
let userCart = {
    username : "John",
    password : 1234,
    cart : ["Apple", "Banana", "Pear"],
    isUserSignedIn : true,
    cart2 : {
        apple : 2

    }

};

//calling by key with dot notation (not the best way)
console.log(userCart.username);

//better way of using key value pairs with objects
console.log(userCart["username"]);

//calling by name of variable we declared (sometimes we need this)
console.log(userCart[nameVar]);

//one way (not recomended)
console.log(userCart.cart[1]);
//2nd way (recomended)
console.log(userCart["cart"][1]);

console.log(userCart["cart2"]["apple"]);

//change value of object
userCart["username"] = "Josh";

