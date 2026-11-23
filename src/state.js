

// Initialize state store with tasks, filters, and notes
const initialState = {
  tasks: [],
  filters: [],
  notes: [],
};

let state = initialState;

// Function to save state to localStorage
function saveState() {
  localStorage.setItem('state', JSON.stringify(state));
}

// Function to load state from localStorage
function loadState() {
  const storedState = localStorage.getItem('state');
  if (storedState) {
    state = JSON.parse(storedState);
  }
}

// Function to update state
function updateState(newState) {
  state = { ...state, ...newState };
  saveState();
}

export { state, loadState, updateState };
function createTask(taskName) {
  state.tasks.push({ name: taskName, completed: false });
  saveState();
}

function toggleComplete(taskIndex) {
  state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
  saveState();
}

function deleteTask(taskIndex) {
  state.tasks.splice(taskIndex, 1);
  saveState();
}

export { createTask, toggleComplete, deleteTask };
export { createTask, toggleComplete, deleteTask, loadState, updateState };
export { createTask, toggleComplete, deleteTask, loadState, updateState };
function createTask(taskName) {
  if (taskName.trim() !== '') {
    state.tasks.push({ name: taskName, completed: false });
    saveState();
  } else {
    console.error('Task name cannot be empty');
  }
}



function createTask(taskName) {
  if (taskName.trim() !== '') {
    state.tasks.push({ name: taskName, completed: false });
    saveState();
  } else {
    console.error('Task name cannot be empty');
  }
}

function toggleComplete(taskIndex) {
  if (taskIndex >= 0 && taskIndex < state.tasks.length) {
    state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
    saveState();
  } else {
    console.error('Invalid task index');
  }
}

function deleteTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < state.tasks.length) {
    state.tasks.splice(taskIndex, 1);
    saveState();
  } else {
    console.error('Invalid task index');
  }
}

export { createTask, toggleComplete, deleteTask, loadState, updateState };
function createTask(taskName) {
  if (taskName.trim() !== '') {
    state.tasks.push({ name: taskName, completed: false });
    saveState();
  } else {
    console.error('Task name cannot be empty');
  }
}

function toggleComplete(taskIndex) {
  if (taskIndex >= 0 && taskIndex < state.tasks.length) {
    state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
    saveState();
  } else {
    console.error('Invalid task index');
  }
}

function deleteTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < state.tasks.length) {
    state.tasks.splice(taskIndex, 1);
    saveState();
  } else {
    console.error('Invalid task index');
  }
}

export { createTask, toggleComplete, deleteTask, loadState, updateState };

function saveState() {
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
}

function loadState() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    state.tasks = JSON.parse(storedTasks);
  } else {
    state.tasks = [];
  }
}

function updateState() {
  saveState();
}

export { createTask, toggleComplete, deleteTask, loadState, updateState };
