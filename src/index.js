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
    todos.map((todo) => addDoList(todo));
  }
};

doList();
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getList();
  const todoInput = document.getElementById('addTasks').value;
  const todoTask = {
    index: todos.length,
    description: todoInput,
    completed: false,
  };

  if (todoInput !== '') {
    addDoList(todoTask);
    addList(todoTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((todo, index) => {
  todo.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const todos = getList();
    todos[index].description = updateInput;
    updateList(index, todos[index].description);
    window.location.reload();
  });
});
inputField.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const todos = getList();
      todos[index].desciption = updateInput;
      updateList(index, todos[index].description);
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