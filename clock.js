const clockContainer = document.querySelector('.js-clock'),
    clockTitle = document.querySelector('.js-title');

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minute}:${seconds}`;
}

function init() {
    getTime();
}
init()