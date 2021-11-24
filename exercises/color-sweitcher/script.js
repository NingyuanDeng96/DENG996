console.log('connected');

//select each circle
let yellowCircle = document.getElementById("yellowButton");
let blueCircle = document.getElementById("blueButton");
let grayCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");

yellowCircle.addEventListener("click", turnPageYellow)
blueCircle.addEventListener("click", turnPageBlue)
grayCircle.addEventListener("click", turnPageGray)
whiteCircle.addEventListener("click", turnPageWhite)

function turnPageYellow() {
    let heading = document.querySelector("h1");
    heading.style.color = "red";
    console.log('turn me yellow');
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
}

function turnPageBlue() {
    let heading = document.querySelector("h1");
    heading.style.color = "white";
    console.log('turn me BLUE');
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

function turnPageGray() {
    console.log('turn me GRAY');
    let body = document.querySelector("body");
    body.style.backgroundColor = "gray";
    body.style.color = pink;
}

function turnPageWhite() {
    let heading = document.querySelector("h1");
    heading.style.color = "black";
    console.log('turn me WHITE');
    let body = document.querySelector("body");
    body.style.backgroundColor = "white"
}