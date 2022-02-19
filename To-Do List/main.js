addDeleteTaskEventToInitialButtons();

let ul = document.getElementById("task-list");

// Add a task and delete task
let addTaskBtn = document.getElementById("add-task-button");
addTaskBtn.addEventListener("click", function(){

    let ul = document.getElementById("task-list");
    let inputString = document.getElementById("input-task");
    let li = document.createElement("li");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");

    input.setAttribute("type", "checkbox");

    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", deleteTask);
  
    span.className = "task";
    span.innerHTML = inputString.value;

    if (inputString.value != ""){
        li.append(input);
        li.append(span);
        li.append(deleteBtn);
        ul.append(li);
        inputString.value = "";
    }
  
});

// Delete a task
function addDeleteTaskEventToInitialButtons() {
let deleteTaskBtns = document.getElementsByClassName("delete-btn");
  for(btn of deleteTaskBtns) {
   btn.addEventListener("click", deleteTask);
  }
}

// function to delete task
function deleteTask (e) {
      let btnElement = e.target;
      let parentLiContainer = btnElement.parentElement;
      ul.removeChild(parentLiContainer);
}

function saveAndLoadInStorage() {
  let taskList = {
    
  }
}


// Delete a task
// function deleteTaskInit() {
// let deleteTaskBtns = document.getElementsByClassName("delete-btn");
//   for(btn of deleteTaskBtns) {
//    btn.addEventListener("click", function(e) {
//       let btnElement = e.target;
//       let parentLiContainer = btnElement.parentElement;
//       ul.removeChild(parentLiContainer);
//     });
//   }
// }








// Delete a task
// let deleteTaskBtns = document.getElementsByClassName("delete-btn");
// for(btn of deleteTaskBtns) {
//   btn.addEventListener("click", function(e) {
//     let btnElement = e.target;
//     let parentLiContainer = btnElement.parentElement;
//     ul.removeChild(parentLiContainer);
//   });
// }

