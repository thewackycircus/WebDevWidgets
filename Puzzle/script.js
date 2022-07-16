const peices = document.querySelectorAll('.peice');
const empties = document.querySelectorAll('.empty');

let selectedPeice;

peices.forEach((peice) => {
    peice.addEventListener('dragstart', dragStart);
    peice.addEventListener('dragend', dragEnd);
});

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    selectedPeice = e.target;
}
function dragEnd() {
    this.className = 'peice';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty';
    if (!this.firstChild) {
        this.append(selectedPeice);
    } else {
        console.log(this.firstChild);
        selectedPeice.parentElement.append(this.firstChild);
        this.append(selectedPeice);
    }
}
