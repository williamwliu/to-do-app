
function onReady(){
    let toDos = [];
    let id = 0;
    const addToDoForm = document.getElementById('addToDoForm');

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

            newLi.appendChild(checkbox);
            newLi.appendChild(delButton);
            toDoList.appendChild(newLi);

            delButton.addEventListener("click", () => {
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
                })
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