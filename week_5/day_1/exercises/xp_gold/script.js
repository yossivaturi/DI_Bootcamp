let formE = document.forms[0];


// from display.html
// document.getElementById("write").innerHTML = window.location.search;
// you will have to parse

// the query string to extract the

// parameter you need

formE.addEventListener("submit", (e) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams);
    let results = document.getElementById("results");

    for (const [key, value] of Object.entries(params)) {
        let paragraph = document.createElement("p");
        paragraph.textContent = `${key}: ${value}`;
        results.appendChild(paragraph);
    }
})