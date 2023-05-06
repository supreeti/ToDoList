import './style.css';
import addDoList from './modules/AddList.js';
import deleteList from './modules/DeleteList.js';
import {
  getList, addList, removeList, updateList,
} from './modules/UpdateList.js';
import completedList from './modules/CompletedList.js';

const doList = () => {
  const todos = getList() || [];
  if (todos) {
    todos.map((task) => addDoList(task));
  }
};
doList();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getList();
  const toAdd = document.getElementById('addTasks').value;
  const todoTask = {
    index: todos.length,
    description: toAdd,
    completed: false,
  };

  if (toAdd !== '') {
    addDoList(todoTask);
    addList(todoTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((task, index) => {
  task.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    task[index].description = updateInput;
    updateList(index, task[index].description);
    window.location.reload();
  });
});
inputField.forEach((task, index) => {
  task.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      task[index].desciption = updateInput;
      updateList(index, task[index].description);
      window.location.reload();
    }
  });
});

window.remove = (index) => {
  deleteList(index);
  removeList(index);
};

window.completedTodo = (index) => {
  completedList(index);
};

document.getElementById('clearAll').addEventListener('click', () => {
  const todos = getList();
  const clearAll = todos.filter((todo) => !todo.completed);
  clearAll.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(clearAll));
  window.location.reload();
});