const deleteList = (index) => {
  const delList = document.getElementById(`task${index}`);
  do delList.remove();
  while (delList !== null);
};

export default deleteList;