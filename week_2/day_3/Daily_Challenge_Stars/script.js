
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


//first way
for (let line = "*"; line.length < 12; line += " *"){
    console.log(line);
}

//second way
let line = "";
let i = 0;
for(let i=0; i<6; i++){ 
    for(let j=0; j <= i; j++){
        line += "* "
    }
    console.log(line);
    line = "";
}
