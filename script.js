const todoList = document.querySelector(".todo-list");
const newTodoInput = document.querySelector(".new-todo-input");
const newTodoForm = document.querySelector(".new-todo-form");
const clearAllButton = document.querySelector(".clear-all-button");
const itemsLeft = document.querySelector(".items-left");
const itemsShowAllButton = document.querySelector(".items-show-all");
const itemsActiveButton = document.querySelector(".items-active");
const itemsCompletedButton = document.querySelector(".items-completed");
const toggleAll = document.querySelector(".toggle-all");
const filters = document.querySelector(".filters");

let completedItems = 0;
let uncompletedItems = 0;
filters.style.display = 'none';
let filterView = "all";

function setFilter(newFilter) {
    filterView = newFilter;

    if (filterView === "all") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            c.parentNode.style.display = 'flex';
        }
    }

    else if (filterView === "active") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.parentNode.style.display = 'flex';
            }
            else {
                c.parentNode.style.display = 'none';
            }
        }
    }

    else if (filterView === "completed") {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.parentNode.style.display = 'none';
            }
            else {
                c.parentNode.style.display = 'flex';
            }
        }
    }
}

newTodoForm.onsubmit = event => {
    event.preventDefault();
    if (newTodoInput.value) {
        addTodo(newTodoInput.value);
        setFilter(filterView);
        toggleAll.checked = false;
        newTodoInput.value = '';
    }
    else {
        //prompt user to enter value
    }
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
}

toggleAll.onclick = event => {
    if (toggleAll.checked) {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            if (!c.checked) {
                c.checked = true;
                uncompletedItems--;
                completedItems++
                c.parentElement.setAttribute("class", "completed");
            }
        }
    }
    else {
        for (let c of document.querySelector(".todo-list").querySelectorAll('input[type="checkbox"]')) {
            c.checked = false;
            uncompletedItems++;
            completedItems--;
            c.parentElement.removeAttribute("class");
        }
    }
    displayItemsLeft();
    displayClearAllButton();
}

itemsActiveButton.onclick = event => {
    setFilter("active");
}

itemsCompletedButton.onclick = event => {
    setFilter("completed");
}

itemsShowAllButton.onclick = event => {
    setFilter("all");
}

function displayItemsLeft() {
    if (uncompletedItems === 0 && completedItems === 0) {
        toggleAll.hidden = true;
        toggleAll.checked = false;
        filters.style.display = 'none';
        itemsLeft.textContent = '0 items left';
    }
    else if (uncompletedItems === 1) {
        toggleAll.hidden = false;
        itemsLeft.textContent = uncompletedItems + ' item left';
    }
    else {
        toggleAll.hidden = false;
        itemsLeft.textContent = uncompletedItems + ' items left';
    }
}

function displayClearAllButton() {
    if (completedItems > 0) {
        clearAllButton.hidden = false;
    }
    else if (completedItems === 0) {
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
    filters.style.display = 'flex';

    liRemoveButton.onclick = event => {
        if (!liCheckbox.checked) {
            uncompletedItems--;
        }
        else {
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
        }
        else {
            completedItems--;
            uncompletedItems++;
            liElement.removeAttribute("class");
        }
        displayItemsLeft();
        displayClearAllButton();
    }
}