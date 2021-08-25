import './scss/style.scss';
import { addTodo } from './components/addTodoItem';
import { filterTodoItems, clearCompletedTodos } from './components/filterTodos';
import { changeTheme } from './components/theme';
import { renderTodoItem } from './components/addTodoItem';
import { itemsLeft } from './components/todoItemsLeft';
import { changeTodoStatus, checkTodoStatus } from './components/statusTodo';
(function () {
	const todoContainer = document.querySelector('[data-todoContainer]');
	const todoForm = document.querySelector('[data-todoForm]');
	const todoInput = document.querySelector('[data-todoInput]');
	const filterButtons = document.querySelectorAll('.other__filters-btn');
	const clearCompleted = document.querySelector('[data-clearComplete]');
	const theme = document.querySelector('[data-themeBtn]');
	const todoBtnComplete = document.querySelector('.form__btn');
	const todos = JSON.parse(localStorage.getItem('todosTasksListening')) || [];

	// changeTodoStatus(todoBtnComplete);

	todos.forEach(todo => {
		const [todoValue, completeValue] = todo.split(':');
		todoBtnComplete.dataset.pressed = completeValue;
		todoContainer.prepend(renderTodoItem(todoValue, todoBtnComplete));
	});

	itemsLeft();

	document.body.dataset.theme = localStorage.getItem('theme') || 'dark';

	theme.addEventListener('click', e => changeTheme(e));

	clearCompleted.addEventListener('click', clearCompletedTodos);

	filterButtons.forEach(button => {
		button.addEventListener('click', e => filterTodoItems(e));
	});

	todoBtnComplete.addEventListener('click', ({ target }) => {
		checkTodoStatus(target);
		changeTodoStatus(target);
	});

	todoForm.addEventListener('submit', e => {
		e.preventDefault();
		addTodo(todoInput.value, todoInput, todoBtnComplete);
	});
})();
