let form = document.querySelector('.new-todo');
let todo = document.querySelector('.todo-list');
let todoInput = document.querySelector('.add-todo-input');
let arrowDownButton = document.querySelector('.arrow-button');
let itemsLeftText = document.querySelector('.items-left');
let bottomBarList = document.querySelector('.bottom-bar-list');
let allButton = document.querySelector('.all-button');
let activeButton = document.querySelector('.active-button');
let completedButton = document.querySelector('.completed-button');
let elementList = [];
let todoAmount = 0;
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
    todoAmount++;

    bottomBarList.hidden = false;
    
    

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
    elementList[elementList.length] = liElement;

    

    todo.append(liElement);
    

    liRemoveButton.onclick = event => {
        liElement.remove();
        todoAmount--;
        liCheckboxList.pop();
        if (liCheckbox.checked == false) {
            if (itemsLeftNumber > 0) {
                itemsLeftNumber--;
            }
            
            ItemsLeftOutput(itemsLeftNumber);
        }
        if (todoAmount == 0) {
            bottomBarList.hidden = true;
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
                
                itemsLeftNumber = 0;
                liCheckbox.checked = true;
            });
        }
        
        ItemsLeftOutput(itemsLeftNumber);
    }
    
    allButton.onclick = event => {
        elementList.forEach(liElement => {
            liElement.hidden = false;
        });
        
    }

    activeButton.onclick = event => {
        elementList.forEach(element => {
            if (element.liCheckbox.checked == true) {
                element.hidden = true;
            }
        });
    }

    completedButton.onclick = event => {
        
    }
}

function ItemsLeftOutput (itemsLeftNumber){
    
    itemsLeftText.textContent = itemsLeftNumber + " items left";
}


