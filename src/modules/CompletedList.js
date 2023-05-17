import { getList } from './UpdateList.js';

const completedList = (index) => {
  const toDoList = document.getElementById(`check${index}`);
  const completeTask = getList();

  completeTask[index].toDoList = toDoList.checked;
  if (toDoList.checked) {
    completeTask.splice(index, 1);
  }
  localStorage.setItem('completeTask', JSON.stringify(completeTask));
};

export default completedList;