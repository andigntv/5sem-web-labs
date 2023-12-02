function generateTask(event) {
    event.preventDefault(); // Отменить перезагрузку страницы

    const taskName = document.getElementById("taskName").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskDeadline = document.getElementById("taskDeadline").value;

    const task = {
        name: taskName,
        priority: taskPriority,
        deadline: taskDeadline
    };

    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        savedTasks = JSON.parse(savedTasks);
    } else {
        savedTasks = [];
    }

    savedTasks.push(task);

    savedTasks.sort((a, b) => {
        if (a.priority !== b.priority) {
            return a.priority.localeCompare(b.priority);
        } else {
            return new Date(a.deadline) - new Date(b.deadline);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    showResults(savedTasks);

    document.getElementById("taskForm").reset();
}

function showResults(tasks) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Очистить контейнер

    const table = document.createElement("table");
    table.innerHTML = `
    <thead>
      <tr>
        <th style="color: #444444; text-shadow: none">Название задачи</th>
        <th style="color: #444444; text-shadow: none">Приоритет</th>
        <th style="color: #444444; text-shadow: none">Дедлайн</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

    const tbody = table.querySelector("tbody");

    tasks.forEach(task => {
        const taskRow = document.createElement("tr");
        taskRow.innerHTML = `
      <td>${task.name}</td>
      <td>${task.priority}</td>
      <td>${task.deadline}</td>
    `;
        tbody.appendChild(taskRow);
    });

    resultsContainer.appendChild(table);
}

window.onload = function() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        showResults(tasks);
    }
}