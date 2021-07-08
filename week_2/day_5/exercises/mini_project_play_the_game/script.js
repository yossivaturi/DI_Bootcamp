function playTheGame() {
    let answer = confirm("Play a game?");
    if(!answer) {
        alert("No problem, Goodbye");
        return;
    } else {//user wants to play
        userNumber = parseInt(prompt("enter a number between 0 and 10"));
        console.log(typeof(userNumber))
        if(isNaN(userNumber)){
            alert("Sorry Not a number, Goodbye");
            return;
        } else if(userNumber<0 || userNumber>10) {
            alert("Sorry it’s not a good number, Goodbye");
            return;
        } else {
            let computerNumber = (Math.ceil(Math.random() * 10));
            console.log(computerNumber);
            test(userNumber, computerNumber);
        } 
    }
}

function test(userNumber,computerNumber) {
    console.log(computerNumber);
    let count = 0;
    for(count; count<4; count++){
        if(userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if(userNumber > computerNumber) {
            if(count === 3){
                alert("out of chances");
                return;
            }
            alert("Your number is bigger then the computer’s, guess again"); 
        } else {
            if(count === 3){
                alert("out of chances");
                return;
            }
            alert("Your number is smaller then the computer’s, guess again");
        }
        userNumber = parseInt(prompt("enter the number again"));
    }
       
}

