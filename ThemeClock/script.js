const hoursElem = document.querySelector('.hour');
const minutesElem = document.querySelector('.minute');
const secondsElem = document.querySelector('.second');
const timeElem = document.querySelector('.time');
const dateElem = document.querySelector('.date');
const dropDown = document.querySelector('.dropDown');

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

let currentMode = 'light';

dropDown.addEventListener('change', (e) => {

    console.log("hello");
    const html = document.querySelector('html');

    html.classList.remove(currentMode);
    currentMode = e.target.value.toLowerCase();
    html.classList.add(currentMode);
});

setInterval(setTime, 1000);

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourNeedle = document.querySelector('.needle.hour');
    minuteNeedle = document.querySelector('.needle.minute');
    secondNeedle = document.querySelector('.needle.second');

    hourNeedle.style.transition = `${
        hoursForClock === 0 ? 'none' : 'all .5s ease-in'
    }`;
    minuteNeedle.style.transition = `${
        minutes === 0 ? 'none' : 'all .5s ease-in'
    }`;
    secondNeedle.style.transition = `${
        seconds === 0 ? 'none' : 'all .5s ease-in'
    }`;

    hoursElem.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
    )}deg)`;
    minutesElem.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
    )}deg)`;
    secondsElem.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
    )}deg)`;

    timeElem.innerHTML = `${hours}:${minutes < 10 ? ` 0${minutes}` : minutes}`;
    dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};