let counter = 0;
function onReady(){
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo(){
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) { return; }

        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: counter
          });
          counter++;
          newToDoText.value = '';
              renderTheUI();          
    }

    function renderTheUI(){
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            let delButton = document.createElement('button');
            delButton.id = counter;
            checkbox.type = "checkbox";
            delButton.type = "button";
            delButton.textContent = "Delete Task";

            newLi.textContent = toDo.title;

            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(delButton);
            
            delButton.addEventListener("click", () => {
                toDos = toDos.filter(toDos => toDos.counter != toDos.counter);
                renderTheUI();
                });   

        });
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI();

}
window.onload = function() {
    alert("The window has loaded!");
    onReady();
  };