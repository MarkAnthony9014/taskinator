//Establishing the button element object representation by using query selector to find the id in the button element.
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);