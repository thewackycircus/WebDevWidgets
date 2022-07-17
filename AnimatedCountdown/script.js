const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'showNum' && idx !== nextToLast) {
                num.classList.remove('show');
                num.classList.add('hide');
            } else if (e.animationName === 'hideNum' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('show');
            } else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        });
    });
}
