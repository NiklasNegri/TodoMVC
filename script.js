const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoForm = document.querySelector(".new-todo-form");
const clearAllButton = document.querySelector(".clear-all-button");
const itemsLeft = document.querySelector(".items-left");
const itemsShowAllButton = document.querySelector(".items-show-all");
const itemsActiveButton = document.querySelector(".items-active");
const itemsCompletedButton = document.querySelector(".items-completed");
let amountChecked = 0;
let uncompletedItems = 0;
let completedItems = 0;

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
            amountChecked--;
        }
    });
}

function displayItemsLeft() {
    if (uncompletedItems === 0) {
        itemsLeft.textContent = '';
    }
    else if (uncompletedItems === 1) {
        itemsLeft.textContent = uncompletedItems + ' item left';
    }
    else {
        itemsLeft.textContent = uncompletedItems + ' items left';
    }
}

function displayClearAllButton() {
    if (amountChecked > 0) {
        clearAllButton.hidden = false;
    }
    else if (amountChecked === 0) {
        clearAllButton.hidden = true;
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

    uncompletedItems++;
    displayItemsLeft();

    liRemoveButton.onclick = event => {
        liElement.remove();
        uncompletedItems--;
        displayItemsLeft();
    }

    liCheckbox.onchange = event => {
        if (liCheckbox.checked) {
            amountChecked++;
            uncompletedItems--;
            displayItemsLeft();
            displayClearAllButton();
        }
        else {
            amountChecked--;
            uncompletedItems++;
            displayItemsLeft();
            displayClearAllButton();
        }
    }
}