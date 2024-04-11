const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const circleSize = 40;

console.log(containerHeight, containerWidth)

function randomColor(){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function randomPosition(){
    const x  = Math.floor(Math.random() * (containerWidth - circleSize - 10))
    const y = Math.floor(Math.random() *  (containerHeight -circleSize - 10))
    return [x,y];
}


button.addEventListener("click", (e) => {
    let newCircle = document.createElement ("div");
    let [x,y] = randomPosition();

    newCircle.classList.add("circle");
    newCircle.style.backgroundColor = randomColor();
    newCircle.style.position = "absolute"
    newCircle.style.left = x + "px";
    newCircle.style.top = y + "px";
   

    container.appendChild(newCircle)
})