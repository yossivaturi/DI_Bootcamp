// let sentence = "The movie is not that bad, I like it";
// sentence = sentence.replace(/[^a-zA-Z ]/g, "");
// console.log(sentence);
// let sentenceArr = sentence.split(" ");
// console.log(sentenceArr);

// let wordNot = sentenceArr.indexOf("not");
// console.log(wordNot);

// let wordBad = sentenceArr.indexOf("bad");
// console.log(wordBad);
// let newSenetence = "";

// if (wordBad > wordNot) {
//     diff = wordBad - wordNot;
//     sentenceArr.splice(wordNot, diff + 1, "good");
//     newSenetence = sentenceArr.join(" ");
//     console.log(newSenetence);
// } else {
//     newSenetence = sentenceArr.join(" ");
//     console.log(newSenetence);
// }


let sentence = "The movie is not that bad, I like it";
let start = sentence.indexOf("not");
console.log(start);
let end = sentence.indexOf("bad") + 3;
console.log(end);
let subStr = sentence.substring(start, end);
if(end>start) {
    sentence = sentence.replace(subStr, "good"); 
}
console.log(sentence);
