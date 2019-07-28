//Creating start Page
// let startDiv = document.createElement('div');
// startDiv.className = 'startPage alignItems';
// let heading = document.createElement('h1');
// heading.innerHTML('Simple TODO application')
// startDiv.appendChild(heading);
// let input = document.createElement('input');
// input.setAttribute('type', 'button');
// input.setAttribute('value', 'Add new Task');
// input.className('addTask');
const rootNode = document.getElementById('root');
let startBlock = document.querySelector('.startPage');
let addTskBlock = document.querySelector('.addNewTask');
let modifyBlock = document.querySelector('.modifyItem');

let addTask = document.querySelector('.addTask');
let saveTask = document.querySelector('.saveTask');
let taskValue = document.querySelector('.newTask');
let saveModify = document.querySelector('.saveModify');
let cancel = document.querySelector('.cancel');
let taskBox = document.getElementById('taskBox');
let modifyItem = document.querySelector('.modifyTask');

let todoItems = [];

if(localStorage.getItem('Tasks')){
    todoItems = JSON.parse(localStorage.getItem('Tasks'));
}

window.addEventListener('load', function() {
    location.hash = '#start';
    rootNode.appendChild(startBlock);
    rootNode.removeChild(addTskBlock);
    rootNode.removeChild(modifyBlock);
    
    if(todoItems.length !== 0){
        for(let i = 0; i < todoItems.length; i++){
            let newLi = document.createElement('li');
            newLi.className = 'liStyles';

            let checkbox = document.createElement('img');
            checkbox.style.cursor = 'pointer';
            checkbox.setAttribute('src', './assets/img/todo-s.png');
            checkbox.setAttribute('alt', 'checkbox');

            checkbox.addEventListener('click', function () {
                location.hash = '#change';
            });

            let text = document.createElement('p');
            text.textContent = todoItems[i].description;

            let remove = document.createElement('img');
            remove.style.cursor = 'pointer';
            remove.setAttribute('src', './assets/img/remove-s.jpg');
            remove.setAttribute('alt', 'remove');

            newLi.appendChild(checkbox);
            newLi.appendChild(text);
            newLi.appendChild(remove);

            taskBox.appendChild(newLi);
        }
    }
    
});

window.addEventListener('hashchange', function(){

    if(location.hash === '#start'){
        rootNode.appendChild(startBlock);
        let check = document.querySelector('.modifyItem')
        if(check !== null){
            rootNode.removeChild(modifyBlock);
        }
        rootNode.appendChild(startBlock);

        let check2 = document.querySelector('.addNewTask')
        if(check2 !== null){
            rootNode.removeChild(addTskBlock);
        }
    }

    else if(location.hash === '#add'){
        rootNode.removeChild(startBlock);
        rootNode.appendChild(addTskBlock);
    }

    else if(location.hash === '#change'){
        rootNode.appendChild(modifyBlock);
        let check = document.querySelector('.startPage');

        if(check !== null){
            rootNode.removeChild(startBlock);
        }

        let check2 = document.querySelector('.addNewTask')
        if(check2 !== null){
            rootNode.removeChild(addTskBlock);
        }
    }

});

    addTask.addEventListener('click', function() {
        location.hash = '#add';
        taskValue.value = '';
    });

    cancel.addEventListener('click', function () {
        location.hash = '#start';
    });

    saveTask.addEventListener('click', function () {
        createItem();
        location.hash = '#start';
    });

    saveModify.addEventListener('click', function () {
        localStorage.setItem('modify', modifyItem.value);
        location.hash = '#start';
        alert(this.className);
    });

function createItem () {
    let obj = new Object;
    obj.isDone = false;
    obj.id = 1;
    obj.description = taskValue.value;
    todoItems.push(obj);
    
    localStorage.setItem('Tasks', JSON.stringify(todoItems));
    let newLi = document.createElement('li');
    newLi.className = 'liStyles';

    let checkbox = document.createElement('img');
    checkbox.style.cursor = 'pointer';
    checkbox.setAttribute('src', './assets/img/todo-s.png');
    checkbox.setAttribute('alt', 'checkbox');
    checkbox.addEventListener('click', function () {
        location.hash = '#change';
    });

    let text = document.createElement('p');
    text.textContent = obj.description;

    let remove = document.createElement('img');
    remove.style.cursor = 'pointer';
    remove.setAttribute('src', './assets/img/remove-s.jpg');
    remove.setAttribute('alt', 'remove');
    remove.addEventListener('click', () => {
        alert(this.tagName);
    });

    newLi.appendChild(checkbox);
    newLi.appendChild(text);
    newLi.appendChild(remove);
    taskBox.appendChild(newLi);
}
