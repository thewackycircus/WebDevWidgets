const imgDiv = document.querySelector('.imgDiv');

imgDiv.addEventListener('dblclick', () => {
    createHeart();
});

const createHeart = () => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    imgDiv.appendChild(heart);
};
