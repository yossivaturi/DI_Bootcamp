const robots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

//I only have one row that im pushing elements to
let row = document.getElementsByClassName("row")[0];
//I need to dynamiclly create the card element
//for each of the elements in the array and push them to the row element

const createCard = (details) => {
    //Creating the fundamental elements needed for the card
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("col-sm");

    let middleDiv = document.createElement("div");
    middleDiv.classList.add("card", "robot");
    middleDiv.style.width = "18rem";

    let img = document.createElement("img");
    img.setAttribute("src", details.image)

    let innerDiv = document.createElement("div");
    innerDiv.classList.add("card-body");

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = `${details.name}`;

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = `${details.email}`;

    //Appending each children element of the card in the right hierarchy
    innerDiv.appendChild(h5);
    innerDiv.appendChild(p);
    middleDiv.appendChild(img);
    middleDiv.appendChild(innerDiv);
    outerDiv.appendChild(middleDiv);

    return outerDiv;
}

const renderCards = (arr) => {
    arr.forEach((o, i, a) => {
        let card = createCard(o);
        row.appendChild(card);
    })
}

//getting a string from the input
//creating new array of objects depending on the input string
// and should call renderCard with the new array
const filterCards = (str) => {
    console.log(robots.filter((o, i, a) => o.name.toLowerCase().includes(str.toLowerCase())));
    row.innerHTML = "";
    return robots.filter((o, i, a) => o.name.toLowerCase().includes(str.toLowerCase()));
}

const searchChanged = (event) => {
    renderCards(filterCards(event.target.value));
    console.log(event.target.value);
};


let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", searchChanged);
renderCards(robots);