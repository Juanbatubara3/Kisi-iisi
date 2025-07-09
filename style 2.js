const input = document.querySelector('input');
const addButton = document.querySelector('button.add');
const clearButton = document.querySelector('button.clear');
const list = document.querySelector('ul');

function createTask(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';

  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Mark as done on click
  span.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Delete on button click
  deleteBtn.addEventListener('click', () => {
    li.classList.add('fade-out');
    setTimeout(() => li.remove(), 500);
  });

  return li;
}

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const task = createTask(text);
  list.appendChild(task);
  input.value = '';
}

addButton.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Clear all tasks
clearButton.addEventListener('click', () => {
  if (confirm('Clear all tasks?')) {
    list.innerHTML = '';
  }
});

// Save to localStorage
window.addEventListener('beforeunload', () => {
  const tasks = Array.from(list.querySelectorAll('li span')).map(span => ({
    text: span.textContent,
    done: span.parentElement.classList.contains('done')
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

// Load from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.forEach(task => {
    const li = createTask(task.text);
    if (task.done) li.classList.add('done');
    list.appendChild(li);
  });
});
