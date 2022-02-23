const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoButton = document.querySelector(".new-todo-button");
const clearAllButton = document.querySelector(".clear-all-button");
let liCheckbox = document.querySelector("inp

while (liCheckbox.checked) {
    clearAllButton.removeAttribute("hidden");
}

// det ska inte vara en knapp utan man ska trycka enter men funktionen är densamma
newTodoButton.onclick = event => {
    if (newTodoInput.value) {
        addTodo(newTodoInput.value);
    }
}

function addTodo(todoText) {
    /*
    Den här checkboxen ska göra följande när den är ifylld:
    liText.textContent ska bli genomstruken och grå
    clearCompleted knappen blir synlig och klickbar
    */
    let liCheckbox = document.createElement('input');
    liCheckbox.setAttribute("type", "checkbox");

    let liText = document.createElement('p');
    liText.textContent = todoText;

    let liRemoveButton = document.createElement('button');
    liRemoveButton.setAttribute("type", "submit");
    liRemoveButton.textContent = 'Remove';

    let liElement = document.createElement('li');
    liElement.append(liCheckbox);
    liElement.append(liText);
    liElement.append(liRemoveButton);

    todoList.append(liElement);

    liRemoveButton.onclick = event => {
        liElement.remove();
    }

}