function init() {

    const container = document.querySelector(".container");

    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add("pixel");
            container.appendChild(div);

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

init();