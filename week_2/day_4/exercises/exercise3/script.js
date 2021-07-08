// Exercise 3: Odd Or Even
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

const checkNumber = () => {
    for(let i=0; i<=100; i++){
        if(i%2 == 0) {
            console.log(`the number ${i} is even`)
        } else {
            console.log(`the number ${i} is odd`) 
        }
    }
}

checkNumber();