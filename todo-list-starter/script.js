const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    const newTaskDate = document.getElementById("new-task-date");
    if (newTask.value){
        todoTasks.push(newTask.value);
        todoTaskStatus.push(false);
        todoTaskImportance.push(false);
        todoTaskDates.push(newTaskDate.value);
        newTask.value = "";
        newTaskDate.value = "";
        updateTodoList();
    }
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()){
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }
};

const createNewTodoItemElement = (task, index) => {
    // Create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    //Create a date input field for each task
    const dateInputElement = document.createElement("input");
    dateInputElement.type = "date";
    dateInputElement.value = todoTaskDates[index] || "";
    dateInputElement.onchange = function() {
        todoTaskDates[index] = dateInputElement.value;
    };
    
    // Apply a CSS class to the completed items
    if(todoTaskStatus[index] == true){
        newTodoTaskTextElement.classList.add("complete");
    }

    // Apply a CSS class to important items
    if(todoTaskImportance[index] == true){
        newTodoTaskTextElement.classList.add("important");
    }

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    
    // Adding a button to mark each item as importance
    const importanceButtonElement = document.createElement("input");
    importanceButtonElement.type = "button";
    importanceButtonElement.value = "Important";
    importanceButtonElement.onclick = function(){
        toggleImportant(index);
    };

    // Adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function(){
        toggleComplete(index);
    };

    newTodoTaskElement.appendChild(dateInputElement);
    newTodoTaskElement.appendChild(importanceButtonElement);
    newTodoTaskElement.appendChild(completeButtonElement);
    return newTodoTaskElement;

}

const toggleComplete = (index) => {
    // If it is complete, set it to incomplete. 
    // If it is incomplete, set it to complete.
    if (todoTaskStatus[index] == false){
        todoTaskStatus[index] = true;
    } else {
        todoTaskStatus[index] = false;
    }
    updateTodoList();
};

const toggleImportant = (index) => {
    if (todoTaskImportance[index] == false){
        todoTaskImportance[index] = true;
    } else {
        todoTaskImportance[index] = false;
    }
    updateTodoList();
};

let todoTasks = ["Walk Scotch", "Make dinner"];
let todoTaskDates = ["", ""];
let todoTaskStatus = [false, true];
let todoTaskImportance = [false, false];
updateTodoList();

const todoList = document.getElementById("todo-list");

for (const [index, task] of todoTasks.entries()){

    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
}
