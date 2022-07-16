const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElem = document.getElementById('size');
const colorElem = document.getElementById('color');
const drawModeElem = document.querySelectorAll('input[name="drawMode"]');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = colorElem.value;
let drawMode = "draw";
let x;
let y;

console.log(drawModeElem);

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    console.log(isPressed, x, y);
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        if (drawMode === "draw") {
            draw(x, y, x2, y2);
            x = x2;
            y = y2;
        }

    }
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x2 = e.offsetX;
    y2 = e.offsetY;

    switch(drawMode) {
        case "circ":

            console.log("circ");

            drawCircle(x, y, x2, y2);

            break;
        case "rect":
            drawRect(x, y, x2, y2);
    }

    x = undefined;
    y = undefined;
});

colorElem.addEventListener('change', (e) => {
    console.log(e.target.value);
    color = e.target.value;
})

increaseBtn.addEventListener('click', () => {
    if (size < 50) {
        size += 5;
    }

    updateSizeDisplay();
})

decreaseBtn.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
    }

    updateSizeDisplay();
})

drawModeElem.forEach((radio) => {
    if(radio.value === "draw") {
        radio.checked = true;
    }
    radio.addEventListener('change', () => drawMode = radio.value);
})

clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

function updateSizeDisplay() {
    sizeElem.innerText = size;
}

function draw(x1, y1, x2, y2) {
    console.log("draw");

    // circle at mouse point
    ctx.beginPath();
    ctx.arc(x1, y1, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // fill line between circles
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawRect(x1, y1, x2, y2) {

    w = x2 - x1;
    h = y2 + y1;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x1, x2, w, h);
}

function drawCircle(x1, y1, x2, y2) {

    centerX = x2 - x1;
    centerY = y2 - y1;

    size = (x2 - x1) / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
