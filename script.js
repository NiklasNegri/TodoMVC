let form = document.querySelector('.new-todo');
let todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('.add-todo-input');
let arrowDownButton = document.querySelector('.arrow-button');
let itemsLeftText = document.querySelector('.items-left');
let itemsLeftNumber = 0;
let liCheckboxList = [];
let allChecked = true;




form.onsubmit = event => {
    event.preventDefault();
    
    
    if (todoInput.value != '') {
        addTodo(todoInput.value)
    }
    
}

function addTodo(todoText) {
    itemsLeftNumber++;
    itemsLeftText.hidden = false;
    
    ItemsLeftOutput(itemsLeftNumber);

    let liCheckbox = document.createElement('input');
    liCheckbox.type = 'checkbox';
    liCheckboxList[liCheckboxList.length] = liCheckbox;

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
        if (liCheckbox.checked == false) {
            if (itemsLeftNumber > 0) {
                itemsLeftNumber--;
            }
            ItemsLeftOutput(itemsLeftNumber);
        }
    }
    todoInput.value = '';

    liCheckbox.onchange = event => {
        if (liCheckbox.checked) {
            if (itemsLeftNumber > 0) {
                itemsLeftNumber--;
            }
            
            ItemsLeftOutput(itemsLeftNumber);
        }
        else {
            itemsLeftNumber++;
            ItemsLeftOutput(itemsLeftNumber);
        }
    }

    arrowDownButton.onclick = event => {
        allChecked = true;
        liCheckboxList.forEach(liCheckbox => {
            if (liCheckbox.checked == false) {
                allChecked = false;
            }
        });

        if (allChecked == true) {
            liCheckboxList.forEach(liCheckbox => {
                liCheckbox.checked = false;
                itemsLeftNumber++;
    
            });
        }
        else if (allChecked == false) {
            liCheckboxList.forEach(liCheckbox => {
                liCheckbox.checked = true;
                itemsLeftNumber = 0;
    
            });
        }
        
        ItemsLeftOutput(itemsLeftNumber);
    }
    
}

function ItemsLeftOutput (itemsLeftNumber){
    
    itemsLeftText.textContent = itemsLeftNumber + " items left";
}


