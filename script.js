const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoForm = document.querySelector(".new-todo-form");
const clearAllButton = document.querySelector(".clear-all-button");

// det ska inte vara en knapp utan man ska trycka enter men funktionen är densamma
newTodoForm.onsubmit = event => {
    event.preventDefault();
    if (newTodoInput.value) {
        addTodo(newTodoInput.value);
    }
    else {
        //prompt user to enter value
    }
}

clearAllButton.onclick = event => {
    clearAllButton.hidden = true;
    let removeCheckbox = document.querySelectorAll('input[type="checkbox"]');
    removeCheckbox.forEach(c => {
        if (c.checked) {
            c.parentNode.parentNode.removeChild(c.parentNode);
        }
    });
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

    liCheckbox.onchange = event => {
        if (liCheckbox.checked === true) {
            // gör liText genomstruken och grå också
            clearAllButton.hidden = false;
        }
        else if (liCheckbox.checked === false) {
            // ta bort det genomstrukna och gråa
            clearAllButton.hidden = true;
        }
    }
}