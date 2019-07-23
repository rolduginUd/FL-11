let rootNode = document.getElementById('root');
let mainInput = document.querySelector('.addAction');
let addButton = document.querySelector('.button');
let addIcon = document.querySelector('.addIcon');
let errorNotification = document.querySelector('.error');
let containerLength = 11;
inputCheck();

mainInput.addEventListener('input', inputCheck);

function inputCheck () {
    if(!mainInput.value){
        addIcon.style.color = '#c8d0d8';
    }else{
        addIcon.style.color = '#41b5fe';
    }
}

addButton.addEventListener('click', addNewNote);

function addNewNote(event) {
    if(!mainInput.value) {
        event.preventDefault();
    }else{
        if(rootNode.childNodes.length === containerLength) {
            errorNotification.style.display = 'block';
            addIcon.style.color = '#c8d0d8';
            addIcon.disabled = true;
            mainInput.disabled = true;
        } else{
            let itemContainer = document.createElement('div');
            itemContainer.setAttribute('draggable', 'true');

            let newItem = document.createElement('input');
            newItem.setAttribute('type', 'text');
            newItem.value = mainInput.value;
            newItem.id = 'itemId';
            newItem.style.display = 'none';

            let checkBox = document.createElement('i');
            checkBox.className = 'material-icons added_ico_checkbox';
            checkBox.textContent = 'check_box_outline_blank';
            checkBox.addEventListener('click', unclick)

            checkBox.addEventListener('click', () => {
                checkBox.textContent = 'check_box';
            });


            let labelForItem = document.createElement('label');
            labelForItem.textContent = newItem.value;
            labelForItem.className = 'itemsLabel';
            labelForItem.setAttribute('for', newItem.id);

            let editIcon = document.createElement('i');
            editIcon.className = 'material-icons';
            editIcon.textContent = 'create';
            editIcon.addEventListener('click', () => {
                itemContainer.removeAttribute('draggable');
            
                checkBox.style.display = 'none';
                newItem.style.display = 'inline-block';
                labelForItem.style.display = 'none';
                editIcon.style.display = 'none';
                removeIcon.style.display = 'none';
                saveChangesIcon.style.display = 'inline-block';
            });

            let removeIcon = document.createElement('i');
            removeIcon.className = 'material-icons removeIcn';
            removeIcon.textContent = 'delete';
            removeIcon.addEventListener('click', removeItem)

            let saveChangesIcon = document.createElement('i');
            saveChangesIcon.className = 'material-icons';
            saveChangesIcon.textContent = 'save';
            saveChangesIcon.style.display = 'none';

            saveChangesIcon.addEventListener('click', () => {         
                labelForItem.textContent = newItem.value;
            
                checkBox.style.display = 'inline-block';
                newItem.style.display = 'none';
                labelForItem.style.display = 'inline-block';
                editIcon.style.display = 'inline-block';
                removeIcon.style.display = 'inline-block';
                saveChangesIcon.style.display = 'none';
            
                itemContainer.setAttribute('draggable', 'true');                
            });

            itemContainer.appendChild(checkBox);
            itemContainer.appendChild(newItem);
            itemContainer.appendChild(labelForItem);
            itemContainer.appendChild(editIcon);
            itemContainer.appendChild(saveChangesIcon);
            itemContainer.appendChild(removeIcon);
            rootNode.appendChild(itemContainer);

            mainInput.value = '';
            addIcon.style.color = '#c8d0d8';

            if(rootNode.childNodes.length === containerLength) {
                errorNotification.style.display = 'block';
                addIcon.style.color = '#c8d0d8';
                addIcon.disabled = true;
                mainInput.disabled = true;
            }
        }
    }
}

function unclick () {
    this.disabled = true;
}

function removeItem () {
    let parrent = this.parentNode;
    rootNode.removeChild(parrent);
    addIcon.disabled = false;
    mainInput.disabled = false;
    errorNotification.style.display = 'none';
    addIcon.style.color = '#41b5fe';
    mainInput.value = '';
    addIcon.style.color = '#c8d0d8';
}


let dragging = null;

rootNode.addEventListener('dragstart', function(event) {
		dragging = event.target;
    event.dataTransfer.setData('text/html', dragging);
});

rootNode.addEventListener('dragover', function(event) {
    event.preventDefault();
});

rootNode.addEventListener('dragenter', function(event) {
    if(event.target.tagName === 'DIV'){
        event.target.style['border-bottom'] = 'solid 3px #41b5fe';
    }
});

rootNode.addEventListener('dragleave', function(event) {
    if(event.target.tagName === 'DIV'){
        event.target.style['border-bottom'] = '';
    }
});

rootNode.addEventListener('drop', function(event) {
    event.preventDefault();
    if(event.target.tagName === 'DIV'){
        event.target.style['border-bottom'] = '';
        event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
    }
});