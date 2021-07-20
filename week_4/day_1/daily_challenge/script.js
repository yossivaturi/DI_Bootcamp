// Instructions
// Using this array:

const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
// 1.Create an array using forEach that contains all
// the usernames from the gameInfo array, add an 
// exclamation point(ie.“!”) to the end of every username.
// 2.Create an array using forEach that contains 
// the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// 3.Find and display the total score of the users.
const usernameArr = [];
gameInfo.forEach((val, i, arr) => usernameArr[i] = `${arr[i].username}!`);
console.log(usernameArr);

const usernameBig5Arr = [];
gameInfo.forEach((val, i, arr) => {
    arr[i].score > 5 ? usernameBig5Arr.push(`${arr[i].username}`) :
        null;
});
console.log(usernameBig5Arr);

let sum;
gameInfo.forEach((val, i, arr) => {
    sum = 0;
    return sum += arr[i].score;
});
console.log(sum);