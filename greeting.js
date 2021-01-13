const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_STOR = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

//LocalStorage에서 데이터 가져오기.
function loadName() {
    const currentUser = localStorage.getItem(USER_STOR);
    if (currentUser === null) {
        // he is not
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();
