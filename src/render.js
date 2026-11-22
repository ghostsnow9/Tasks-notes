const taskList = document.getElementById('task-list');

// Check if taskList is null to prevent errors
if (taskList) {
  taskList.innerHTML = ''; // Clear existing content

  // Render task list items
  taskItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    taskList.appendChild(li);
  });
}

// Render empty state markup if taskItems is empty
if (taskItems.length === 0) {
  const emptyState = document.createElement('div');
  emptyState.textContent = 'No tasks to display';
  taskList.appendChild(emptyState);
}
