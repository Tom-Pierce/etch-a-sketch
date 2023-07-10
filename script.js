function createCanvas(size) {

    const canvas = document.querySelector("#canvas");

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("pixel");
            canvas.appendChild(div);

        }
    }
    listenForMouse();
}

function listenForMouse() {

    let pixels = document.querySelectorAll(".pixel");

    for (i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}

function changeCanvasSize() {
    const canvasSize = prompt("What size canvas would you like?");
    clearCanvas();
    createCanvas(canvasSize);
    changePixelSize(canvasSize);
}

function changePixelSize(canvasSize) {

    let pixels = document.querySelectorAll(".pixel");
    pixelWidth = 960/canvasSize;
    pixelHeight = 960/canvasSize;
    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.width = pixelWidth + "px";
        pixels[i].style.height = pixelHeight +"px";
        }
    }

function clearCanvas() {
    const canvas = document.querySelector("#canvas");
    while (canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

createCanvas(16);