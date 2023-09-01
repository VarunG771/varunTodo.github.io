const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});