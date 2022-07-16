const left = document.querySelector('.left');
const right = document.querySelector('.right');

const leftBtn = document.querySelector('.left .btn');
const rightBtn = document.querySelector('.right .btn');

const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

leftBtn.addEventListener('click', () => container.classList.toggle('selected-left'));
rightBtn.addEventListener('click', () => container.classList.toggle('selected-right'));