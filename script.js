const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoForm = document.querySelector(".new-todo-form");
const clearAllButton = document.querySelector(".clear-all-button");
const itemsLeft = document.querySelector(".items-left");
const itemsShowAllButton = document.querySelector(".items-show-all");
const itemsActiveButton = document.querySelector(".items-active");
const itemsCompletedButton = document.querySelector(".items-completed");
const toggleAll = document.querySelector(".toggle-all");

let amountChecked = 0;
let uncompletedItems = 0;

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
    let removeCheckbox = document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]');
    for (let c of removeCheckbox) {
        if (c.checked) {
            c.parentNode.parentNode.removeChild(c.parentNode);
            uncompletedItems--;
            amountChecked--;
        }
    }
    displayItemsLeft();
    displayToggleAll();
}

toggleAll.onchange = event => {
    let removeCheckbox = document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]');
    if (toggleAll.checked) {
        for (let c of removeCheckbox) {
            c.checked = true;
            uncompletedItems--;
            amountChecked++
        }
    }
    else {
        for (let c of removeCheckbox) {
            c.checked = false;
            uncompletedItems++;
            amountChecked--;
        }
    }
    displayItemsLeft();
    displayClearAllButton();
}

itemsActiveButton.onclick = event => {
    let removeCheckbox = document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]');
    for (let c of removeCheckbox) {
        if (!c.checked) {
            c.parentNode.style.display = 'none';
        }
        else {
            c.parentNode.style.display = 'flex';
        }
    }
}

itemsCompletedButton.onclick = event => {
    let removeCheckbox = document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]');
    for (let c of removeCheckbox) {
        if (!c.checked) {
            c.parentNode.style.display = 'flex';
        }
        else {
            c.parentNode.style.display = 'none';
        }
    }
}

itemsShowAllButton.onclick = event => {
    let removeCheckbox = document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]');
    for (let c of removeCheckbox) {
        c.parentNode.style.display = 'flex';
    }
}

function displayItemsLeft() {
    if (uncompletedItems === 0) {
        itemsLeft.textContent = '0 items left';
    }
    else if (uncompletedItems === 1) {
        itemsLeft.textContent = uncompletedItems + ' item left';
    }
    else {
        itemsLeft.textContent = uncompletedItems + ' items left';
    }
}

function displayToggleAll() {
    if (completedItems === 0 && uncompletedItems === 0 ) {
        toggleAll.hidden = true;
    }
    else {
        toggleAll.hidden = false;
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
    displayToggleAll();

    liRemoveButton.onclick = event => {
        liElement.remove();
        uncompletedItems--;
        displayItemsLeft();
        displayToggleAll();
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