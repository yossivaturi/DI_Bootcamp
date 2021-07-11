function bottlesOfBeer() {
    let userInput;
    do{
    userInput = parseInt(prompt("enter a number"));
    } while(isNaN(userInput));
    
    let sub = 1;
    while (userInput > 0 && userInput>=sub) {
        console.log(`${userInput} bottles of beer on the wall`);
        console.log(`${userInput} bottles of beer`);
        if (sub == 1) {
            console.log(`take ${sub} down, pass it around`);
        } else {
            console.log(`take ${sub} down, pass them around`);
        }
        userInput -= sub;
        sub++;
    }
    //outside the while loop
    if(userInput == 0){
        console.log("Congrats! You knock them all down, there are 0 left");
    } else{
        console.log(`You can't, you have only ${userInput} bottles left, and youre trying to knock ${sub} down`);
    }
}
bottlesOfBeer();