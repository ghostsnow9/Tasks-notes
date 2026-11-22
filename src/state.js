

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
