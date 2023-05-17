const deleteList = (index) => {
  const delList = document.getElementById(`task${index}`);
  if (delList) {
    delList.remove();
  }
};

export default deleteList;