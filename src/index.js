import './style.css';
import addDoList from './modules/AddList.js';
import deleteList from './modules/DeleteList.js';
import {
  getList, addList, removeList, updateList,
} from './modules/UpdateList.js';

const display = () => {
  const todos = getList() || [];
  if (todos) {
    todos.map((todo) => addDoList(todo));
  }
};

display();
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

document.getElementById('allCompleted').addEventListener('click', () => {
  const todos = getList();
  const allCompleted = todos.filter((todo) => !todo.completed);
  allCompleted.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(allCompleted));
  window.location.reload();
});
