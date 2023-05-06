function clearCompleted() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((box, i) => {
    box.addEventListener('change', () => {
      if (checkboxes[i].checked) {
        checkboxes[i].style.textDecoration = 'line-through';
      } else {
        checkboxes[i].style.textDecoration = 'none';
      }
    });
  });
}

const list = document.getElementById('taskList');
const addDoList = (task) => {
  list.innerHTML += `
    <li id="${task.index}" class="listTask">
      <div class="taskToDO"><input type="checkbox" name="" class="checkbox" id=check${task.index} onclick="completedTodo(${task.index})" ${task.completed ? 'checked' : ''}></div>
      <input type="text" value="${task.description}" class="description edit">
      <button type="button" class="delete-button" onclick="remove(${task.index})">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/></svg>
      </button>
    </li>
  `;
  clearCompleted();
};

export default addDoList;
