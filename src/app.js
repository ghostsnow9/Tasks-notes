document.getElementById('submit-button').addEventListener('click', function() {
  // Your form submission logic here
});

function renderApp() {
  // Your render logic here
}
document.getElementById('search-input').addEventListener('input', function() {
    renderApp();
  });

function renderApp() {
  const filter = document.getElementById('search-input').value.toLowerCase();
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    const taskText = task.textContent.toLowerCase();
    if (taskText.includes(filter)) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

  const priorityOrder = ['High', 'Medium', 'Low'];
  const priorityTasks = document.querySelectorAll('.task').sort((a, b) => {
    const priorityA = a.getAttribute('data-priority') || 'Low';
    const priorityB = b.getAttribute('data-priority') || 'Low';
    return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
  });

  priorityTasks.forEach(task => {
    task.style.display = 'block';
  });
}

