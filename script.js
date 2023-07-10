function createCanvas(size) {

    // set the main container to "canvas"
    const canvas = document.querySelector("#canvas");

    //loops through to make each "pixel" and appends it to the canvas
    for (j = 0; j < size * size; j++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        canvas.appendChild(div);

    }
    listenForMouse();
}

// add a mouseover event listener to each pixel
function listenForMouse() {

    let pixels = document.querySelectorAll(".pixel");

    for (i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}

function changeCanvasSize() {
    const canvasSize = document.getElementById("canvasSize").value;
    
    clearCanvas();
    createCanvas(canvasSize);
    changePixelSize(canvasSize);
    updateLabel(canvasSize);
}

function updateLabel(size){
    let sizeLabel = document.getElementById("canvasSizeLabel");
    sizeLabel.textContent = "Canvas Size :" + size;

}

function changePixelSize(canvasSize) {

    //loops through each pixel and changes the size of each one to fit in the canvas
    let pixels = document.querySelectorAll(".pixel");
    pixelWidth = 500 / canvasSize;
    pixelHeight = 500 / canvasSize;
    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.width = pixelWidth + "px";
        pixels[i].style.height = pixelHeight + "px";
    }
}

function clearCanvas() {

    //removes every single appended node to clear the canvas
    const canvas = document.querySelector("#canvas");
    while (canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

function resetCanvas() {

    //sets all pixels to white to reset the canvas
    let pixels = document.querySelectorAll(".pixel");

    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";

    }
}
//initializes the canvas
changeCanvasSize();