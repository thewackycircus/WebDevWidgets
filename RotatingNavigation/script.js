const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    document.body.style.overflow = "auto";
});
