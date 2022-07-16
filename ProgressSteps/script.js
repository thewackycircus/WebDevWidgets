const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progressHeaders = document.querySelectorAll('.progress-header');

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < 4) {
        currentActive++;
    }

    update();
});

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    }

    update();
});

function update() {
    progressHeaders.forEach((progressHeader, index) => {
        progressHeader.classList.remove('active');
        progressHeader.classList.remove('complete');

        if (index + 1 === currentActive) {
            progressHeader.classList.add('active');
        } else if (index + 1 < currentActive) {
            progressHeader.classList.add('complete');
        }
    });

    circles.forEach((circle, index) => {
        circle.classList.remove('active');
        circle.classList.remove('complete');

        if (index + 1 === currentActive) {
            circle.classList.add('active');
        } else if (index + 1 < currentActive) {
            circle.classList.add('complete');
        }
    });

    const contents = document.querySelector('.contents');

    switch (currentActive) {
        case 1:
            contents.innerHTML =
                '<p>The first step in web development is the Design Phase. This is where a lot of the visual and structural planning comes into play.</p>';
            break;
        case 2:
            contents.innerHTML =
                '<p>The actual Development Stage is yet another phase that can be broken down into smaller sub-phases. These sub-phases include early, mid and late stage development.</p>';
            break;
        case 3:
            contents.innerHTML =
                '<p>Post development is the buttoning up of website essentials that has to happen once the site goes live. Generally, these are items that need the live URL to begin optimizing.</p>';
            break;
        case 4:
            contents.innerHTML =
                '<p>Ongoing maintenence is a crucial part of Web Development. A website is not something that is created and just let go afterwards. Websites are meant to be added to, adjusted and continuously developed to keep up with industry changes, maintain a positive user experience and more.</p>';
            break;
    }

    const actives = document.querySelectorAll('.active');
    const completes = document.querySelectorAll('.complete');

    progress.style.width = (((actives.length / 2) + (completes.length / 2) - 1) / (circles.length - 1)) * 100 + '%';

    console.log((actives.length / 2) + (completes.length / 2));

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
