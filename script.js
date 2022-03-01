let form = document.querySelector('.new-todo');
let todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('.add-todo-input');



form.onsubmit = event => {
    event.preventDefault();

    addTodo(todoInput.value)
}

function addTodo(todoText) {
    let liCheckbox = document.createElement('input');
    liCheckbox.type = 'checkbox';

    let liText = document.createElement('p');
    liText.textContent = todoText;

    let liRemoveButton = document.createElement('button');
    liRemoveButton.type = 'button';
    liRemoveButton.textContent = '❌';

    let liElement = document.createElement('li');
    liElement.append(liCheckbox);
    liElement.append(liText);
    liElement.append(liRemoveButton);

    todoList.append(liElement);

    liRemoveButton.onclick = event => {
        liElement.remove();
    }
    todoInput.value = '';
}

