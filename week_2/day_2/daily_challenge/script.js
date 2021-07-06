// Lise Solution using Arrays 
// let sentence = "This dinner is not that very very bad ! You cook well";
// let sentenceArray = sentence.split(" ");
// console.log("sentenceArray", sentenceArray);
// let wordNot = sentenceArray.indexOf("not");
// let wordBad = sentenceArray.indexOf("bad");
// console.log("wordNot", wordNot, "wordBad", wordBad);
// if (wordNot != -1 && wordBad != -1 && wordNot<wordBad){
// 	sentenceArray.splice(wordNot, wordBad-wordNot + 1,"good")
// 	let newSentence = sentenceArray.join(" ");
// 	console.log("the new sentence is : ", newSentence);
// } else {
// 	console.log(sentence)
// }

// My Solution using String Methods
let sentence = "The movie is not that bad, I like it";
let start = sentence.indexOf("not");
console.log("index of the word not: ", start);
let end = sentence.indexOf("bad");
console.log("index of the word bad: ", end);
let subStr = sentence.substring(start, end + 3);
if(end != -1 && start != -1 && end > start) {
    sentence = sentence.replace(subStr, "good"); 
}
console.log(sentence);
