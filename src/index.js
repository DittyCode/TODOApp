import './scss/style.scss';
import { addTodo } from './components/addTodoItem';
import { filterTodoItems, clearCompletedTodos } from './components/filterTodos';
import { changeTheme } from './components/theme';
import { renderTodoItem } from './components/addTodoItem';
import { itemsLeft } from './components/todoItemsLeft';
import {
	addTodoStatus,
	changePressedBtnStatus,
	toggleTodoBtnStatus,
} from './components/statusTodo';

(function () {
	const todoContainer = document.querySelector('[data-todoContainer]');
	const todoForm = document.querySelector('[data-todoForm]');
	const todoInput = document.querySelector('[data-todoInput]');
	const filterButtons = document.querySelectorAll('.other__filters-btn');
	const clearCompleted = document.querySelector('[data-clearComplete]');
	const theme = document.querySelector('[data-themeBtn]');
	const todoBtnComplete = document.querySelector('.form__btn');
	const todos = JSON.parse(localStorage.getItem('todos')) || [];

	todos.forEach(todo => {
		const [todoValue, todoStatus] = todo.split(':');
		todoContainer.append(renderTodoItem(todoValue, todoStatus));
	});

	document.body.dataset.theme = localStorage.getItem('theme') || 'dark';

	theme.addEventListener('click', e => changeTheme(e));

	clearCompleted.addEventListener('click', clearCompletedTodos);

	filterButtons.forEach(button => {
		button.addEventListener('click', ({ target }) => filterTodoItems(target));
	});

	todoBtnComplete.addEventListener('click', ({ target }) => {
		const btn = target.closest('.form__btn');
		toggleTodoBtnStatus(btn);
	});

	todoForm.addEventListener('submit', e => {
		e.preventDefault();
		const {
			dataset: { pressed: status },
		} = todoBtnComplete;
		addTodo(todoInput.value, todoInput, status);
	});
	itemsLeft();
})();
