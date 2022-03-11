const todoList = document.querySelector(".todo-list");
const addTodoInpur = document.querySelector(".add-todo-input");
const newTodoForm = document.querySelector(".new-todo");
const clearAllButton = document.querySelector(".clear-all-button");
const itemsLeft = document.querySelector(".items-left");
const showAllButton = document.querySelector(".all-button");
const activeButton = document.querySelector(".active-button");
const completedButton = document.querySelector(".completed-button");
const toggleAll = document.querySelector("#arrow-button");
const toggleLabel = document.querySelector(".toggle-label");
const bottomBarList = document.querySelector(".bottom-bar-list");
const replacementBar = document.querySelector(".replacement-bar")
let completedItems = 0;
let uncompletedItems = 0;
let filter = setFilter("all");
bottomBarList.style.display = 'none';

newTodoForm.onsubmit = event => {
    event.preventDefault();
    if (addTodoInpur.value) {
        addTodo(addTodoInpur.value);
        addTodoInpur.value = '';
        setFilter(filter);
    }
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

    uncompletedItems++;
    displayItemsLeft();
    bottomBarList.style.display = 'flex';

    liRemoveButton.onclick = event => {
        if (!liCheckbox.checked) {
            uncompletedItems--;
        } else {
            completedItems--;
        }
        liElement.remove();
        displayItemsLeft();
        displayClearAllButton();
    }
    liCheckbox.onchange = event => {
        if (liCheckbox.checked) {
            completedItems++;
            uncompletedItems--;
            liElement.setAttribute("class", "completed");
        } else {
            completedItems--;
            uncompletedItems++;
            liElement.removeAttribute("class");
        }
        displayItemsLeft();
        displayClearAllButton();
    }
    replacementBar.hidden = true;
}
toggleAll.onclick = event => {
    if (isAllToggled()) {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            c.checked = false;
            uncompletedItems++;
            completedItems--;
            c.parentElement.removeAttribute("class");
        }
    } else {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.checked = true;
                uncompletedItems--;
                completedItems++
                c.parentElement.setAttribute("class", "completed");
            }
        }
    }

    setFilter(filter)
    displayItemsLeft();
    displayClearAllButton();
}

function isAllToggled() {
    let amountToggled = 0;
    let idAmount = 0;
    for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
        idAmount++;
        if (c.checked) {
            amountToggled++;
        }
    }
    if (amountToggled === idAmount) {
        return true;
    } else {
        return false;
    }
}
activeButton.onclick = event => {
    activeButton.style.border = "1px solid rgba(175, 47, 47, 0.2)";
    completedButton.style.border = "0"
    showAllButton.style.border = "0"
    filter = setFilter("active");
}
completedButton.onclick = event => {
    activeButton.style.border = "0";
    completedButton.style.border = "1px solid rgba(175, 47, 47, 0.2)"
    showAllButton.style.border = "0"
    filter = setFilter("completed");
}
showAllButton.onclick = event => {
    activeButton.style.border = "0";
    completedButton.style.border = "0"
    showAllButton.style.border = "1px solid rgba(175, 47, 47, 0.2)"
    filter = setFilter("all");
}

function setFilter(newFilter) {
    if (newFilter === "all") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            c.parentNode.style.display = 'grid';
        }
    } else if (newFilter === "active") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.parentNode.style.display = 'grid';
            } else {
                c.parentNode.style.display = 'none';
            }
        }
    } else if (newFilter === "completed") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.parentNode.style.display = 'none';
            } else {
                c.parentNode.style.display = 'grid';
            }
        }
    }
    return newFilter;
}
clearAllButton.onclick = event => {
    clearAllButton.hidden = true;
    for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
        if (c.checked) {
            c.parentNode.parentNode.removeChild(c.parentNode);
            completedItems--;
        }
    }
    displayItemsLeft();
    if (completedItems == 0 && uncompletedItems == 0) {
        replacementBar.hidden = false;
    }
}

function displayClearAllButton() {
    if (completedItems > 0) {
        clearAllButton.hidden = false;
    } else if (completedItems === 0) {
        clearAllButton.hidden = true;
    }
}

function displayItemsLeft() {
    if (uncompletedItems === 0 && completedItems === 0) {
        toggleAll.checked = false;
        toggleLabel.hidden = true;
        bottomBarList.style.display = 'none';
        itemsLeft.textContent = '0 items left';
    } else if (uncompletedItems === 1) {
        toggleLabel.hidden = false;
        itemsLeft.textContent = uncompletedItems + ' item left';
    } else {
        toggleLabel.hidden = false;
        itemsLeft.textContent = uncompletedItems + ' items left';
    }
}