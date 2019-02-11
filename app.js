function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
 event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    let deleteBtn = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.innerHTML = title;

   // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
     toDoList.appendChild(newLi);



    newLi.appendChild(deleteBtn);



    //empty the input
    newToDoText.value = '';

    deleteBtn.innerHTML = '<span>Delete<span>';

    deleteBtn.addEventListener('click', event => {

      newLi.remove();

      deleteBtn.remove();

      checkbox.remove();
    });
  });
}


window.onload = function() {
  onReady();
};
