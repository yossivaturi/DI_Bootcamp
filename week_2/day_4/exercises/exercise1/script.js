// Exercise 1 : Information

// Part I



// function infoAboutMe() {
//     console.log("My name is Yossi I'm 30 years old and i write code");
// }
// infoAboutMe();



function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies){
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
    for(let i=0; i<personHobbies.length; i++){
        console.log(`${personHobbies[i]}`);
    }
}

infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])