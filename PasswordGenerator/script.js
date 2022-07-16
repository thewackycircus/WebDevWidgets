const resultElem = document.getElementById('result');
const lengthElem = document.getElementById('length');
const uppercaseElem = document.getElementById('uppercase');
const lowercaseElem = document.getElementById('lowercase');
const numbersElem = document.getElementById('numbers');
const symbolsElem = document.getElementById('symbols');
const generateElem = document.getElementById('generate');
const clipboardElem = document.getElementById('clipboard');

//----------------------------------------------------------------------------------------------------------------------------------
// CHARACTER TYPE OBJECT
//----------------------------------------------------------------------------------------------------------------------------------

const getRandomChar = {
    lowercase: getRandomLowercaseChar,
    uppercase: getRandomUppercaseChar,
    number: getRandomNumberChar,
    symbol: getRandomSymbolChar,
};

//----------------------------------------------------------------------------------------------------------------------------------
// RANDOM FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------

function getRandomLowercaseChar() {
    // 97 is 'a' + a number between 1 and 25 for the amount of letters in the alphabet
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomUppercaseChar() {
    // 65 is 'A' + a number between 1 and 25 for the amount of letters in the alphabet
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomNumberChar() {
    // 48 is 'A' + a number between 1 and 9 for the amount of digits possible
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function getRandomSymbolChar() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//----------------------------------------------------------------------------------------------------------------------------------
// OTHER FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    // returns an array of only the types that are true
    const typesArr = [
        { lowercase },
        { uppercase },
        { number },
        { symbol },
    ].filter((item) => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const charType = Object.keys(type)[0];
            console.log(charType);
            generatedPassword += getRandomChar[charType]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return Shuffle(finalPassword);
}

function Shuffle(password) {
    var chars = password.split('');
    var length = chars.length;

    for (var i = length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }

    return chars.join('');
}

generateElem.addEventListener('click', () => {
    const length = lengthElem.value;
    const hasLower = lowercaseElem.checked;
    const hasUpper = uppercaseElem.checked;
    const hasNumbers = numbersElem.checked;
    const hasSymbols = symbolsElem.checked;

    resultElem.innerText = generatePassword(
        length,
        hasLower,
        hasUpper,
        hasNumbers,
        hasSymbols
    );
});

clipboardElem.addEventListener('click', () => {
    const password = resultElem.innerText;

    if (!password) {
        return;
    }

    navigator.clipboard.writeText(password);
    createNotification('Password copied to clipboard');
});

function createNotification(notifMsg, type = 'info') {

    const notif = document.createElement('div');

    notif.classList.add('toast');
    notif.classList.add(type);
    notif.innerText = notifMsg;
    toasts.append(notif);

    setTimeout(() => {
        notif.remove()
    }, 1500);
}