function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;

    function renderTheUI (){
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';

        toDos.forEach(function(toDo){
            const newLi = document.createElement ('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";

            const delButton = document.createElement('button');
            delButton.textContent = "Delete Task";

            delButton.addEventListener('click', event => {
                toDos = toDos.filter(function(item){
                    return item.id !==toDo.id;
                })
                renderTheUI();
                });

            newLi.textContent = toDo.title;
            
            newLi.appendChild(checkbox);
            toDoList.appendChild(newLi);
            newLi.appendChild(delButton);
        });
    }

    function createNewToDo(){
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) { return; }
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        });

        id++;

        newToDoText.value = '';
        renderTheUI();
    }

    addToDoForm.addEventListener('submit', event =>{
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI();
}

window.onload = function() {
    onReady();
  };