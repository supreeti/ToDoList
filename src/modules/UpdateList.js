const getList = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

const addList = (todo) => {
  const todos = getList();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeList = (index) => {
  const todos = getList();
  const deletedTodos = todos.filter((todo) => todo.index !== index);
  deletedTodos.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(deletedTodos));
  window.location.reload();
};

const updateList = (index, description) => {
  const todos = getList();
  const todo = todos.find((todoTask) => todoTask.index === index);
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  getList, addList, removeList, updateList,
};