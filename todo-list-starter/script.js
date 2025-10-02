const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value){
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
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

    // Apply a CSS class to the completed items
    if(todoTaskStatus[index] == true){
        newTodoTaskTextElement.classList.add("complete");
    }

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // Adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function(){
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);
    return newTodoTaskElement;

};

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

let todoTasks = ["Walk Scotch", "Make Dinner"];
let todoTaskStatus = [false, true];
updateTodoList();

const todoList = document.getElementById("todo-list");

for (const [index, task] of todoTasks.entries()){

    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
}
