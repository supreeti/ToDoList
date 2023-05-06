import { getList } from './UpdateList.js';

const completedList = (index) => {
  const toDoList = document.getElementById(`check${index}`).toggleAttribute('checked');
  const todos = getList();

  todos[index].toDoList = toDoList;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default completedList;