const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
const newTask = document.querySelector('.todoInstr');
const ToD = document.querySelector('.todo');
const trashIcon = document.querySelector('.trash-icon');

function addItem() {
  const itemdiv = document.createElement('div');
  const item = document.createElement('ii');
  const trash = document.createElement('img');
  const checkbox = document.createElement('input');
  item.textContent = tasksArray[tasksArray.length - 1].description;
  itemdiv.classList.add('todoli');
  trash.classList.add('trash');
  trash.src = trashIcon.src;
  checkbox.type = 'checkbox';
  checkbox.contentEditable = true;
  checkbox.checked = tasksArray[tasksArray.length - 1].completed;
  itemdiv.append(checkbox, item, trash);
  checkbox.value = tasksArray[tasksArray.length - 1].completed;
  ToD.append(itemdiv);
  window.location.reload();
}

const populateListItem = () => {
  tasksArray.sort((a, b) => (a.index - b.index));
  for (let i = 0; i < tasksArray.length; i += 1) {
    const itemdiv = document.createElement('div');
    const item = document.createElement('ii');
    const trash = document.createElement('img');
    item.id = tasksArray[i].index;
    const checkbox = document.createElement('input');
    trash.src = trashIcon.src;
    trash.classList.add('trash');
    item.textContent = tasksArray[i].description;
    itemdiv.classList.add('todoli');
    checkbox.type = 'checkbox';
    item.contentEditable = true;
    checkbox.checked = tasksArray[i].completed;
    itemdiv.append(checkbox, item, trash);
    checkbox.value = tasksArray[i].completed;
    checkbox.onchange = () => {
      if (tasksArray[i].completed === false) {
        tasksArray[i].completed = true;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
      } else {
        tasksArray[i].completed = false;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
      }
    };
    trash.onclick = () => {
      let j = 1;

      tasksArray.splice(tasksArray[i].index - 1, 1);
      tasksArray.forEach((task) => { task.index = j; j += 1; });
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      window.location.reload();
    };
    ToD.append(itemdiv);
  }
};

const clearTodo = () => {
  const tasksArrayy = tasksArray.filter((tasks) => tasks.completed === false);
  let i = 1;
  tasksArrayy.forEach((task) => {
    task.index = i;
    i += 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksArrayy));
  window.location.reload();
};

export {
  tasksArray, newTask, addItem, populateListItem, clearTodo,
};