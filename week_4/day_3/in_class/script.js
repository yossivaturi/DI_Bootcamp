// "John" -> return ["J", "o", "h", "n"]
// 	   -> return ["J", "O", "H", "N"]
// 	   -> "J.0.H.N"
// EXAMPLE
// 1. Split the name
// 2. Uppercase each letter
// 3. Add . between each letter (join)

// const spl = str => str.split("");

// const upper = arr => {
//     arr.forEach((v, i, a) => {
//         a[i] = a[i].toUpperCase()
//     });
//     return arr;
// }
// const add = arr => {
//     arr = arr.join('.');
//     return arr;
// }

// console.log(add(upper(spl('John'))));

// ['J', 'o', 'h', 'n']


// Function Composition
// const g = n => {
//     console.log("in the g function")
//     return n + 1;
// }
// const f = n => {
//     console.log("in the f function")
//     return n * 2;
// }
// const h = x => {
//     console.log("in the h function")
//     return f(g(x));
// }
// console.log(h(20)); //=> 42


const students = [{
        name: 'Rich',
        score: 33
    },
    {
        name: 'Peter',
        score: 55
    }
];
//use map to create a new array containing only the score of the students

// const scores = students.map((v, i, a) => v.score);
// console.log(scores);


// 1use map to create a new array containing only the score of the students
// 2use map to create a new array of objects.
//  If the score of the student is bigger than 50 then the object should
//   have another property named "average" set to true, if  the score of 
//   the student is less than 50 then the object should have another property
//    named "average" set to false. This is the result that you should get:
// const newArrayStudent = [{
//         name: 'Rich',
//         score: 33,
//         average: false
//     },
//     {
//         name: 'Peter',
//         score: 55,
//         average: true
//     }
// ]

const newArrayStudent = students.map((v, i, a) => {
    let average = v.score > 50 ? true : false;
    return { //return a new object for each element in newArrayStudent
        name: v.name,
        score: v.score,
        average // dont need to prpvide a key cause its automaaticlly provided
        //cause its has the same name
    }
});

console.log(newArrayStudent);