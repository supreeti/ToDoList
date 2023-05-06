import { getList } from './UpdateList.js';

const completedList = (index) => {
  const toDoList = document.getElementById(`check${index}`).toggleAttribute('checked');
  const completeTask = getList();

  completeTask[index].toDoList = toDoList;
  localStorage.setItem('todos', JSON.stringify(completeTask));
};

export default completedList;