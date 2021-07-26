//1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
//2. Set the request
xhr.open('GET', "https://jsonplaceholder.typicode.com/users");
//3. Send the request
xhr.send();
//4. Add events
xhr.onreadystatechange = function () {
    let div = document.getElementById("results");
    if (xhr.readyState == 0) {
        // unsent
        console.log("unsent")
    } else if (xhr.readyState == 1) {
        // open called
        console.log("open called")
    } else if (xhr.readyState == 2) {
        // response headers received
        console.log("response headers received")
    } else if (xhr.readyState == 3) {
        // response is loading (a data packet is received)
        console.log("response is loading")
    } else if (xhr.readyState == 4) {
        console.log("xhr object = ", xhr)
        // request complete
        console.log("request complete")
        if (xhr.status != 200) { // analyze HTTP status of the response
            let err = document.createElement("h1");
            err.innerHTML = "ERROR STATUS!=200";
            div.appendChild(err);
        } else if (xhr.status === 200) {
            let response = xhr.response;
            let jsonObj = JSON.parse(response);
            console.log(response);
            console.log(jsonObj);

            jsonObj.forEach(element => {
                let p = document.createElement("p");
                p.innerHTML = `${element.name} ${element.email} ${element.address.city}`;
                div.appendChild(p);

            });
            //DISPLAY USERS HERE
        }
    }
};


// Createan HTML file and a JS FILE
// Make a GET request to the jsonplaceholder API
// If there are no errors, using the DOM, display the name,
//  the email and the adress city of each users.
//  You can display the using a table, or a list, or paragraphs. Whatever you prefer