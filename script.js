const container = document.querySelector(".container");
const button = document.querySelector(".btn");

function randomColor(){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function randomPosition(){
    return `${Math.floor(Math.random() * 100 - 5)}%`
}


button.addEventListener("click", (e) => {
    let newCircle = document.createElement ("div");
    newCircle.classList.add("circle");
    newCircle.style.backgroundColor = randomColor();
    newCircle.style.position = "absolute"
    newCircle.style.top = randomPosition();
    newCircle.style.left = randomPosition();

    container.appendChild(newCircle)
})