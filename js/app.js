document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  
  // const deleteAll = document.querySelector('#deleteAll');
  // form.addEventListener('click', handleDeleteButton);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  const newListItem = document.createElement('li');
  newListItem.textContent = `${this.title.value} ${this.author.value} ${this.category.value}`
  newListItem.classList.add('item')
  // newListItem.textContent = `${this.title.value}`
  // newListItem.author = `${this.author.value}`
  // newListItem.category = `${this.category.value}`
  const list = document.querySelector('ul');
  list.appendChild(newListItem)

  document.getElementById('new-item-form').reset();
