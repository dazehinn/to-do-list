import './style.css';
import {
  newTask, tasksArray, addItem, populateListItem, clearTodo,
} from './crud.js';

const removeBtn = document.querySelector('button');
const todoInstr = document.querySelector('.todoInstr');

window.addEventListener('load', populateListItem);
newTask.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && todoInstr.value.length > 0) {
    e.preventDefault();
    tasksArray.push({
      description: this.value,
      completed: false,
      index: tasksArray.length + 1,
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    addItem();
    newTask.value = '';
  }
});

removeBtn.onclick = clearTodo;
