const toDoform = document.querySelector('.js-toDoForm'),
    toDoinput = toDoform.querySelector('input'),
    toDolist = document.querySelector('.js-toDoList');

const TODOS_STOR = 'toDos';

let toDos = [];

let idNumbers = 1;

function delToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDolist.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== par
        seInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_STOR, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = idNumbers;
    idNumbers += 1;
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', delToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDolist.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    //입려된값 초기화.
    toDoinput.value = '';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_STOR);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    } else {

    }
}
//출력
function init() {
    loadToDos();
    toDoform.addEventListener('submit', handleSubmit)
}

init();

// function sayHi(e) {
//     console.log(e);
// }
// sayHi('food')
