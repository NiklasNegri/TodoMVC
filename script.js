const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoButton = document.querySelector(".new-todo-button");

newTodoButton.onclick = event => {
    addTodo(newTodoInput.value);
}

function addTodo(todoText) {
    let liText = document.createElement('p');
    liText.textContent = todoText;

    let liRemoveButton = document.createElement('button');
    liRemoveButton.setAttribute("type", "submit");
    liRemoveButton.textContent = 'Remove';

    let liCheckbox = document.createElement('input');
    liCheckbox.setAttribute("type", "checkbox");

    let liElement = document.createElement('li');
    liElement.append(liText);
    liElement.append(liRemoveButton);
    liElement.append(liCheckbox);

    todoList.append(liElement);

    liRemoveButton.onclick = event => {
        todoList.remove(liElement);
    }
}