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
    liRemoveButton,textContent = 'Remove';

    let liElement = document.createElement('li');
    liElement.append(liText);
    liElement.append(liRemoveButton);

    todoList.append(liElement);

    liRemoveButton.onclick = event => {
        todoList.remove(liElement);
    }
}