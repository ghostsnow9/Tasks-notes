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


// Render status filter pills and live counters
const statusFilters = ['To Do', 'In Progress', 'Completed'];
statusFilters.forEach(filter => {
  const pill = document.createElement('span');
  pill.textContent = filter;
  pill.classList.add('status-pill');
  document.getElementById('status-filters').appendChild(pill);
});

function updateLiveCounters() {
  const liveCounts = {
    'To Do': 0,
    'In Progress': 0,
    'Completed': 0
  };

  taskItems.forEach(item => {
    liveCounts[item.status]++;
  });

  liveCounts.forEach((count, status) => {
    const counter = document.getElementById(`${status}-counter`);
    counter.textContent = count;
  });
};

updateLiveCounters();



// Render status filter pills and live counters
const statusFilters = ['To Do', 'In Progress', 'Completed'];
statusFilters.forEach(filter => {
  const pill = document.createElement('span');
  pill.textContent = filter;
  pill.classList.add('status-pill');
  document.getElementById('status-filters').appendChild(pill);
});

function updateLiveCounters() {
  const liveCounts = {
    'To Do': 0,
    'In Progress': 0,
    'Completed': 0
  };

  taskItems.forEach(item => {
    liveCounts[item.status]++;
  });

  liveCounts.forEach((count, status) => {
    const counter = document.getElementById(`${status}-counter`);
    counter.textContent = count;
  });
};

updateLiveCounters();


// Render task list items and empty state markup
if (taskItems.length === 0) {
  const emptyState = document.createElement('div');
  emptyState.textContent = 'No tasks to display';
  taskList.appendChild(emptyState);
} else {
  taskItems.forEach(item => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `Task: ${item.title}<br>Status: ${item.status}`;
    taskList.appendChild(taskItem);
  });
}


```

```


function renderTaskList() {
  if (taskItems.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.textContent = 'No tasks to display';
    taskList.appendChild(emptyState);
  } else {
    taskItems.forEach(item => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `Task: ${item.title}<br>Status: ${item.status}`;
      taskList.appendChild(taskItem);
    });
  }
}

updateLiveCounters();
renderTaskList();
const taskList = document.getElementById('task-list');
