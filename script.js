const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoForm = document.querySelector(".new-todo-form");
const clearAllButton = document.querySelector(".clear-all-button");
const itemsLeft = document.querySelector(".items-left");
const itemsShowAll = document.querySelector(".items-show-all");
const itemsActive = document.querySelector(".items-active");
const itemsCompleted = document.querySelector(".items-completed");

let countItemsLeft = 0;

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
    let removeCheckbox = document.querySelectorAll('input[type="checkbox"]');
    clearAllButton.hidden = true;
    removeCheckbox.forEach(c => {
        if (c.checked) {
            c.parentNode.parentNode.removeChild(c.parentNode);
        }
    });
}

function displayFilters() {
    if (countItemsLeft === 0) {
        itemsLeft.textContent = '';
    }
    else if (countItemsLeft === 1) {
        itemsLeft.textContent = countItemsLeft + ' item left';
    }
    else {
        itemsLeft.textContent = countItemsLeft + ' items left';
    }
}

function addTodo(todoText) {
    /*
    Den här checkboxen ska göra följande när den är ifylld:
    liText.textContent ska bli genomstruken och grå
    clearCompleted knappen blir synlig och klickbar
    */
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

    countItemsLeft++;
    displayFilters();

    liRemoveButton.onclick = event => {
        liElement.remove();
        countItemsLeft--;
        displayFilters();
    }

    liCheckbox.onchange = event => {
        if (liCheckbox.checked) {
            amountChecked++;
        }
        else if (!liCheckbox.checked) {
            amountChecked--;
        }
        if (amountChecked > 0) {
            clearAllButton.hidden = false;
        }
        else if (amountChecked === 0) {
            clearAllButton.hidden = true;
        }
    }
}