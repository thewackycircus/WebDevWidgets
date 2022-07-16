// bring in toggle buttons
const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach((toggleBtn) => {
    // add click event listener
    toggleBtn.addEventListener('click', () => {
        // toggle the active class
        toggleBtn.parentNode.classList.toggle('active');
    });
});
