// Project Brief
// Welcome to Coloring Squares.

// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.


let leftSide = document.getElementById("leftside");
let rightSide = document.getElementById("rightside");

const colorArr = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "Aqua",
"Brown", "Chartreuse", "Crimson", "DarkGoldenRod", "DarkOrchid", "DarkRed", "DeepPink", "Khaki",
"LightGreen", "OrangeRed", "Salmon", "SpringGreen", "Teal" ];

for(let i=0; i <= 20; i++) {
    let div = document.createElement("div");
    div.classList = "left-div";
    leftSide.appendChild(div);
    div.style.backgroundColor = colorArr[i];
}


//i took 25% of the screen already for the left div, so i need to
//use 75% of the screen remaining on the right side
let num = 24*60;
for(let i=0; i < num; i++) {
    let div = document.createElement("div");
    div.classList = "right-div";
    rightSide.appendChild(div); 
}



let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let colorDivs = document.getElementsByClassName("left-div");
let fillDivs = document.getElementsByClassName("right-div");
let clear_button = document.getElementsByTagName("button")[0];
console.log(colorDivs);

clear_button.addEventListener("click", function(){
    for (fillDiv of fillDivs){
        fillDiv.style.backgroundColor = "white";
    }
    color = null;
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (colorDiv of colorDivs){
    colorDiv.addEventListener("click", function(event){
        console.log(event.target.style.backgroundColor);
        color = event.target.style.backgroundColor;
    });
}

for (fillDiv of fillDivs){
    fillDiv.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    fillDiv.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}

