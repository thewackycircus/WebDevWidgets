const toasts = document.getElementById('toasts');
sendBtn = document.getElementById('sendBtn');
cancelBtn = document.getElementById('cancelBtn');

sendBtn.addEventListener('click', () => createNotification('Hello World'));

function createNotification(notifMsg, type = 'info') {
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const message = document.getElementById('message');

    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type);
    notif.innerText = message.value;
    toasts.append(notif);

    setTimeout(() => {
        notif.remove()
    }, 1500);
}