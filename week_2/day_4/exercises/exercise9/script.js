// Exercise 9 : Vacations Costs

function hotelCost() {
    let numNights;
    const nightCost = 140;
    do {
        numNights = parseInt(prompt("the number of nights you want to stay?"));
    } while (isNaN(numNights) || numNights == "" || numNights == null);
    
    return numNights * nightCost;
}

function planeRideCost() {
    let dest = "";
    do {
        dest = prompt("whats your destination?");
    } while (dest == "" || typeof(dest) != "string");
    
    if(dest == "London") {
        return 183;
    }
    if(dest == "Paris") {
        return 220;
    }
    return 300;
}


function rentalCarCost() {
    let totalPrice = 0;
    let daysRent = 0;
    const rentCost = 40;
    do {
        daysRent = parseInt(prompt("the number of days you would like to rent a car?"));
    } while (isNaN(daysRent) || daysRent == "" || daysRent == null);

    totalPrice = daysRent * rentCost;
    if(daysRent > 10) {
        totalPrice *= 0.95;
    }
    return totalPrice;
}

function totalVacationCost() {
    let x = hotelCost();
    let y = planeRideCost();
    let z = rentalCarCost();
    console.log(`x = ${x} | y = ${y} | z = ${z}`);
    return x + y + z;
}

console.log(totalVacationCost());