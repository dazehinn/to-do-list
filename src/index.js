import './style.css';

const ToD = document.querySelector('.todo');
const tasks = [
  {
    description: 'Wash dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'Double-tap to edit',
    completed: false,
    index: 5,
  },
  {
    description: 'Build ToDo list structure',
    completed: true,
    index: 2,
  },
  {
    description: 'Manage all your list in one place',
    completed: false,
    index: 3,
  },
  {
    description: 'Resync to cleasr out the old',
    completed: false,
    index: 4,
  },
  {
    description: 'Visit family',
    completed: true,
    index: 4,
  },
  {
    description: 'Complete ToDo List project',
    completed: false,
    index: 8,
  },
];

const todoTitle = document.createElement('ii');
const todoInstr = document.createElement('ii');
todoTitle.textContent = 'Today\'s To Do';
todoInstr.textContent = 'Add to your list...';
todoTitle.classList.add('todoli');
todoInstr.classList.add('todoli');
todoInstr.style.fontStyle = 'italic';
ToD.append(todoTitle, todoInstr);

function populateListItem() {
  tasks.sort((a, b) => (a.index - b.index));
  for (let i = 0; i < tasks.length; i += 1) {
    const itemdiv = document.createElement('div');
    const item = document.createElement('ii');
    const checkbox = document.createElement('input');
    item.textContent = tasks[i].description;
    itemdiv.classList.add('todoli');
    checkbox.type = 'checkbox';
    checkbox.checked = tasks[i].completed;
    itemdiv.append(checkbox, item);
    checkbox.value = tasks[i].completed;
    ToD.append(itemdiv);
  }
}

window.addEventListener('load', populateListItem);
