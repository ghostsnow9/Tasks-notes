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

document.getElementById('submit-button').addEventListener('click', function() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    // Your form submission logic here
  }
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




// Refine edge cases for empty inputs and duplicate titles

function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    // Your form submission logic here
    // Example: clear form fields
    form.reset();
  }
}

// Add event listener for form submission
document.getElementById('submit-button').addEventListener('click', handleFormSubmit);

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

// Add event listener for input change on search input
document.getElementById('search-input').addEventListener('input', renderApp);

// Ensure all tasks are initially displayed
renderApp();

document.getElementById('submit-button').addEventListener('click', handleFormSubmit);

function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    // Your form submission logic here
    // Example: clear form fields
    form.reset();
  }
}

function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    // Your form submission logic here
    // Example: clear form fields
    form.reset();
  }
}

// Add event listener for form submission
document.getElementById('submit-button').addEventListener('click', handleFormSubmit);

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

// Add event listener for input change on search input
document.getElementById('search-input').addEventListener('input', renderApp);

// Ensure all tasks are initially displayed
renderApp();

// Add event listener for form submission
document.getElementById('submit-button').addEventListener('click', handleFormSubmit);

function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    // Your form submission logic here
    // Example: clear form fields
    form.reset();
  }
}

// Ensure all tasks are initially displayed
renderApp();
document.getElementById('search-input').addEventListener('input', renderApp);
function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    form.reset();
  }
}

// Ensure all tasks are initially displayed
renderApp();
document.getElementById('submit-button').addEventListener('click', handleFormSubmit);


function handleFormSubmit() {
  const form = document.getElementById('quick-notes-form');
  if (form) {
    form.reset();
  }
}

// Ensure all tasks are initially displayed
renderApp();

// Add event listener for form submission
document.getElementById('submit-button').addEventListener('click', handleFormSubmit);

document.getElementById('search-input').addEventListener('input', renderApp);
