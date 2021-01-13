const clockContainer = document.querySelector('.js-clock'),
    clockTitle = document.querySelector('.js-title');

function getTime() {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    //일정시간마다 getTime 실행
    setInterval(getTime, 1000);
}
init()