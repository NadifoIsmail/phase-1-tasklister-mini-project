document.addEventListener("DOMContentLoaded", () => {
  const todoApp = document.getElementById("main-content");
  const taskInput = document.getElementById("input");
  const taskPriority = document.getElementById("priority");
  const task = document.getElementById("tasks");
  const date = document.getElementById("date");

  todoApp.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = taskInput.value;
    const priority = taskPriority.value;
    const dueDate = date.value;

    const taskList = document.createElement("li");
    taskList.innerHTML = `${text} -Due:${dueDate}`;

    if (priority === "high") {
      taskList.classList.add("high-priority");
    } else if (priority === "medium") {
      taskList.classList.add("medium-priority");
    } else {
      taskList.classList.add("low-priority");
    }

    let span = document.createElement("span");
    span.innerHTML = "Delete";
    taskList.appendChild(span);

    task.appendChild(taskList);

    taskInput.value = "";
    taskPriority.value = "";
    date.value = "";
  });
  task.addEventListener( "click", (e) => {
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    },
    false
  );
});
