// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// //[2,4,6]
// console.log(
//     [1, 2, 3].map(num => {
//         if (typeof num === 'number') return num * 2;
//         return;
//     })
// );


// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

//[1,2,0,1,2,3]
// console.log(
//     [
//         [0, 1],
//         [2, 3]
//     ].reduce(
//         (acc, cur) => {
//             return acc.concat(cur);
//         },
//         [1, 2], //initial value
//     )
// );



// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// });
// What is the value of i ? the index of each element


// Exercise 4 : Nested Arrays

// Using a method, take this array 
// const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArrray = array.filter((v,i,a) => v[0] <= 3 ||  ?  );