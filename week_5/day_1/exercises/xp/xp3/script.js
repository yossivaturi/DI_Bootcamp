let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}


// Convert this JS object into a JSON object. What happens to the nested objects ?

// Convert and pretty print this JS object into a JSON object. Hint : 
//Check out the JSON lesson on the platform.

// Use your web inspector to add a breakpoint. 
//Check the values of the JSON object in the debugger.


//the parameters for stringify method makes it easier to read by adding line breaks and spaces
// Pretty Print JSON String
// If you skip the optional parameters when calling JSON.stringify(),
//  the output JSON string will not include any spaces or line breaks.
//  This makes it hard to read the serialized JSON string, especially when you write it in a file.
let jsonString = JSON.stringify(marioGame, null, 3);
console.log(jsonString)