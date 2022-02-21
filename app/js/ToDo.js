const form  = document.getElementById('todos-form')
const input = document.querySelector('.todos-input')
const todos = document.getElementById('todos')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const todo = input.value;

    if (todo) {
        addToDo(todo);

        updateLS();
    } else {
        warningMessage('todo');
    }
})

function addToDo(todo) {
    const todoEl = document.createElement('li');
    todoEl.innerText = todo;
    todos.appendChild(todoEl);
    todoEl.classList.add("animate__animated", "animate__zoomIn", "todos-el");

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        todoEl.remove();
        updateLS();
    })

    input.value = '';
}

function updateLS() {
    const todosEls = document.querySelectorAll('.todos-el');

    const todos = []

    todosEls.forEach( (el) => {
        todos.push({
            text: el.innerText,
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

function loadingTodos() {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    savedTodos.forEach( (td) => {
        addToDo(td['text'])
    })   
}

loadingTodos();