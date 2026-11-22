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
<br><br>// Render status filter pills and live counters<br>const statusFilters = ['To Do', 'In Progress', 'Completed'];<br>statusFilters.forEach(filter => {<br>  const pill = document.createElement('span');<br>  pill.textContent = filter;<br>  pill.classList.add('status-pill');<br>  document.getElementById('status-filters').appendChild(pill);<br>});<br><br>function updateLiveCounters() {<br>  const liveCounts = {<br>    'To Do': 0,<br>    'In Progress': 0,<br>    'Completed': 0<br>  };<br><br>  taskItems.forEach(item => {<br>    liveCounts[item.status]++;<br>  });<br><br>  liveCounts.forEach((count, status) => {<br>    const counter = document.getElementById(`${status}-counter`);<br>    counter.textContent = count;<br>  });<br>};<br><br>updateLiveCounters();
