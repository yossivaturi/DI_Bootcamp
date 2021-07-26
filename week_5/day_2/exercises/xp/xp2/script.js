// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”.
//  The starting position of the results should be 2.


//-----------------
// WITH ONLOAD,ONPROGRESS,ONERROR
// ----------------------
// 1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
console.log(xhr)
//2. Set the request
//CHANGED THE QUERY STRING PARAMETERS TO RETRIVE THE "SUN" GIPHYS ETC...
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//3. Set the response
xhr.responseType = 'json';
//4. Send the request
xhr.send();
//5. when the request is complete and the response is fully downloaded.
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("error status")
        displayError(xhr)
    } else {
        let obj = xhr.response; //THATS MY ONLY CHANGE
        console.log(obj); //AND THIS
        console.log("Finished Loading")
        displayUser(xhr.response)
    }
};
// 6. triggers periodically while the response is being downloaded
xhr.onprogress = function (event) {
    console.log("Progressing")
    // console.log("progress", xhr)
    // console.log("event.lengthComputable", event.lengthComputable)
    // console.log(`Received ${event.loaded}`)
    // console.log("progress", xhr)
};
//7. when the request couldn't be made
xhr.onerror = function (event) {
    console.log("error", xhr);
    displayError(xhr)
};



const displayUser = (animals) => {
    let results = document.getElementById("results")
    animals.forEach(info => {
        let li = document.createElement("li");
        li.textContent = `${info.name} - ${info.species}`
        results.appendChild(li)
    });
}
const displayError = (xhr) => {
    console.log("in display error")
    let error = document.getElementById("error");
    let h2 = document.createElement("h2");
    h2.textContent = `Error`;
    // h2.textContent = `Error : ${xhr.status}`
    h2.style.backgroundColor = 'pink';
    error.appendChild(h2);
}