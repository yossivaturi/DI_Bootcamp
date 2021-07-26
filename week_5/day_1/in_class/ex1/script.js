// 1.Add a submit event to the form
// 2.Validate the username : it must be at least 4 characters long.
// If the username is not valid, the form won't be submitted
// 3.If the username is valid, send the query in the index.html 
//and display it on the page in a HTML table

let formEle = document.forms[0];

formEle.addEventListener("submit", (e) => {
    // console.log(window.location.search);
    if (formEle.username.value.length >= 4) {
        console.log("tyest");
        const urlSearchParams = new URLSearchParams(window.location.search);
        console.log(urlSearchParams)
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params)
        let results = document.getElementById("results");

        for (const [key, value] of Object.entries(params)) {
            let paragraph = document.createElement("p");
            paragraph.textContent = `${key}: ${value}`;
            results.appendChild(paragraph)
        }
        // e.preventDefault();
    } else {
        e.preventDefault();
    }
})