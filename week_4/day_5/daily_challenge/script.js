// Daily Challenge: Anagram

// Create a function that takes in two strings as two parameters and returns a boolean
//  that indicates whether or not the first string is an anagram of the second string.

const isAnagram = (s1, s2) => {
    let sorted1 = s1.toLowerCase().split("").filter(v => v != " ").sort().join("");
    let sorted2 = s2.toLowerCase().split("").filter(v => v != " ").sort().join("");
    return (sorted1 === sorted2);
}

console.log(isAnagram("Hello World", "i aint go no"));
console.log(isAnagram("Hello World", "woLrd hlleo"));