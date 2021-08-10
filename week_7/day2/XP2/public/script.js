// In the script.js file, fetch your server and get the response. 
// The response should be the JSON Object.


async function getResponse() {
    fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data);
        })
        .catch(e => {
            console.log(e);
        })
}

getResponse();