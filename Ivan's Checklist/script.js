const addition = document.querySelector('#addition');
const list = document.querySelector('#tasks');
const search = document.querySelector('#searchbar');
const searchForm = document.querySelector('.search');

// generates HTML code to be injected into ul
const generateTemplate = (todo) => {
  const newTodo = `
  <li>
    <div class="wrapper">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </div>
  </li>
  `;

  list.innerHTML += newTodo;
};

// cleans user input, checks if input is empty and clears input upon submission
addition.addEventListener('submit', e => {
  e.preventDefault();

  const userInput = addition.add.value.trim();

  if(userInput.length > 0) generateTemplate(userInput);

  addition.reset();
});

// deletes todo's
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) e.target.parentElement.parentElement.remove();
});

// creates array from existing list and disables display if text content does not match
const filter = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

// keyup event
search.addEventListener('keyup', e => {
  const term = search.value.trim().toLowerCase();
  filter(term);
});

searchForm.addEventListener('submit', e => e.preventDefault());
