const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=60" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, praesentium.';
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'May 31, 2022';

    animated_bgs.forEach ((bg) => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach ((bg) => bg.classList.remove('animated-bg-text'));
}
