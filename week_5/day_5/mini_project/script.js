async function homeFetch(people) {
    try {
        //2nd Fetch
        let homeWorldFetched = await fetch(people.homeworld);
        console.log(homeWorldFetched);
        let homeWorldResponse = await homeWorldFetched.json();
        console.log(homeWorldResponse);

        displayPeople(people, homeWorldResponse);
    } catch (err) {
        console.log("error in homeFetch(): ", err);
    }
}

async function displayPeople(people, homeWorldResponse) {
    try {
        //CREATING ELEMENTS
        let div = document.createElement("div");
        div.className = "people";
        let name = document.createElement("h1");
        let height = document.createElement("p");
        let gender = document.createElement("p");
        let birthYear = document.createElement("p");
        let homeWorld = document.createElement("p");
        //PUSHING TEXT
        name.innerHTML = `${people.name}`;
        height.innerHTML = `Height: ${people.height}`;
        gender.innerHTML = `Gender: ${people.gender}`;
        birthYear.innerHTML = `Birth Year: ${people.birth_year}`;
        homeWorld.innerHTML = `Home World: ${homeWorldResponse.name}`;
        //APPENDING ELEMENTS TOGETHER
        div.appendChild(name);
        div.appendChild(height);
        div.appendChild(gender);
        div.appendChild(birthYear);
        div.appendChild(homeWorld);
        //PUSHING TO DOM
        stopLoading();
        document.getElementById("root").appendChild(div);
    } catch (err) {
        console.log("error in displayPeople(): ", err);
    }
}


async function fetchPeople() {
    try {
        clearData();
        startLoading();
        let url = "https://swapi.dev/api/people/";
        url += `${(Math.floor(Math.random() * 83 )+ 1)}` //concats a number from 0 to 83
        console.log(url);
        let fetchedPeople = await fetch(url);
        let respPeople = await fetchedPeople.json();
        console.log("fetchedPeople: ", fetchedPeople);
        console.log("respPeople: ", respPeople);
        homeFetch(respPeople);

    } catch (err) {
        console.log("error in fetchPeople(): ", err);
        stopLoading();
        let h3 = document.createElement("h3");
        h3.innerHTML = "Oh no that person isnt available";
        document.getElementById("root").appendChild(h3);
    }

}


const startLoading = () => {
    console.log("inside startLoading()");
    let div = document.createElement("div");
    div.className = "fa-3x";

    let i = document.createElement("i");
    i.className = "fas fa-cog fa-spin";

    let h1 = document.createElement("h1");
    h1.innerHTML = "Loading...";

    div.appendChild(i);
    div.appendChild(h1);
    document.getElementById("root").appendChild(div);
}

const stopLoading = () => {
    console.log("inside stopLoading()");
    console.log(document.getElementById("root").getElementsByClassName("fa-3x")[0]);
    document.getElementById("root").getElementsByClassName("fa-3x")[0].remove();
}

const clearData = () => {
    console.log("inside clearData()");
    if (document.getElementById("root").getElementsByClassName("people").length > 0) {
        document.getElementById("root").getElementsByClassName("people")[0].remove();
    }
}


let btn = document.getElementById("btn").addEventListener("click", fetchPeople);