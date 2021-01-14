const toDoform = document.querySelector('.js-toDoForm'),
    toDoinput = toDoform.querySelector('input'),
    toDolist = document.querySelector('.js-toDoList');

const TODOS_STOR = 'ToDos';

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_STOR, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1
    delBtn.innerText = 'X';
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
function out() {
    loadToDos();
    toDoform.addEventListener('submit', handleSubmit)
}

out();

