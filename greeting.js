const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_STOR = "currentUser",
    SHOWING_CN = "showing";

function savaName(text) {
    localStorage.setItem(USER_STOR, text);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    savaName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//LocalStorage에서 데이터 가져오기.
function loadName() {
    const currentUser = localStorage.getItem(USER_STOR);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();
