const textElem = document.getElementById('text');
const speedElem = document.getElementById('speed');

const text = "Let's learn web development!";
let idx = 1;
let speed = 300 / speedElem.value;

writeText();

function writeText() {
    textElem.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedElem.addEventListener('input', (e) => (speed = 300 / e.target.value));
