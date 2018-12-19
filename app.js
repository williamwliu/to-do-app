function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    
    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');
        
        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";
        
        // set the title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        
        // create a delete button
        let delButton = document.createElement('button');

        // attach the delete button to the li
        newLi.appendChild(delButton);
       
        // set the delete button's text
        delButton.textContent = "Delete Task";

        // attach the li to the ul
        toDoList.appendChild(newLi);    

        //empty the input
        newToDoText.value = '';
        
        //delete button functionality
        delButton.addEventListener("click", event => {
        toDoList.removeChild(newLi);
        });   
        
    });
}
window.onload = function() {
    alert("The window has loaded!");
    onReady();
  };