// Exercise 1 : Landscape
// Using the code below, and before executing it,
// predict the outcome and explain how you came to this conclusion
let landscape = function () {
    let result = "";
    let flat = function (x) {
        for (let count = 0; count < x; count++) {
            result = result + "_";
        }
    }
    let mountain = function (x) {
        result = result + "/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + "\\" // its like adding \
    }

    flat(4);
    mountain(4);
    flat(4)
    return result;
}
// my prediction was : "____/''''\\____"
// the result was : "____/''''\____"
console.log("\\");
console.log(landscape());