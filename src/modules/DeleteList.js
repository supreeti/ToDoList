const deleteList = (index) => {
  const toDoList = document.getElementById(`todo${index}`);
  if (toDoList !== null) {
    toDoList.remove();
  }
};

export default deleteList;