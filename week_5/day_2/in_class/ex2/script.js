let jsonstring = '{"result":true, "count":42}';
let obj = JSON.parse(jsonstring);
console.log(obj["result"]);
let stringified = JSON.stringify(obj);
console.log(stringified);
// Use the JSON method - first parse, and console.log the result
// then stringify and console.log