const newTask = document.getElementById("input");
const addTask = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addTask.addEventListener("click", () => {
    addToList();
});

newTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addToList();
    }
});

function addToList() {
    let text = newTask.value.trim();
    if (text) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        const completeBtn = document.createElement("button");
        completeBtn.className = "btn-check";
        completeBtn.textContent = "Complete";

        const span = document.createElement("span");
        span.className = "text";
        span.textContent = text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-close";
        deleteBtn.textContent = "Delete";

        listItem.appendChild(completeBtn);
        listItem.appendChild(span);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        newTask.value = "";

        completeBtn.addEventListener("click", () => {
            listItem.classList.toggle("active");
        });

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });
    }
}
