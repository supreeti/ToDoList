import './style.css';

const list = document.querySelector('.taskList');
const doTask = [
  {
    description: 'Washing Dish',
    completed: false,
    index: 0,
  },
  {
    description: 'Learning Javascript',
    completed: false,
    index: 1,
  },
  {
    description: 'Doing project',
    completed: false,
    index: 2,
  },
];
const updateData = () => {
  let html = '';
  for (let i = 0; i < doTask.length; i += 1) {
    if (doTask[i].completed === false) {
      html += `<div class="item">
        <div class="item-detail">
            <input type="checkbox" class="item-check">
            <h5>${doTask[i].description}</h5>
        </div>
        <img src="./action.png" id="${i}" alt="" class="dot">
    </div>`;
    }
  }
  list.innerHTML = html;
  list.classList.add('text-gray');
};

window.onload = () => updateData();