let userStr = prompt("please enter several words (separated by commas)");
const wordsArr = userStr.split(", ");
console.log(wordsArr);
let numOfStarsToWrap = 0;
let longestWordLength = 0;

//1st loop to check what is the length of the longest word in the array
for(let i=0; i<wordsArr.length; i++){
    let wordLength = wordsArr[i].length;
    if (wordLength>longestWordLength){
        longestWordLength = wordLength;
    }
}
numOfStarsToWrap = longestWordLength + 4;

//printing part of the code
console.log("*".repeat(numOfStarsToWrap));
//2nd loop
for(let i=0; i<wordsArr.length; i++) {
    let offset = longestWordLength - wordsArr[i].length;
    if(offset != 0){  
        console.log("*", wordsArr[i]," ".repeat(offset - 1), "*");   
    } else {
        console.log("*", wordsArr[i], "*");
    }
}
console.log("*".repeat(numOfStarsToWrap));
