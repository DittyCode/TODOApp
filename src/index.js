import './scss/style.scss';
import { addTodo } from './components/addTodoItem';
import { filterTodoItems, clearCompletedTodos } from './components/filterTodos';
import { changeTheme } from './components/theme';

(function () {
	const todoForm = document.querySelector('[data-todoForm]');
	const filterButtons = document.querySelectorAll('.other__filters-btn');
	const clearCompleted = document.querySelector('[data-clearComplete]');
	const theme = document.querySelector('[data-themeBtn]');

	document.body.dataset.theme = localStorage.getItem('theme');

	theme.addEventListener('click', e => changeTheme(e));

	clearCompleted.addEventListener('click', clearCompletedTodos);

	filterButtons.forEach(button => {
		button.addEventListener('click', e => filterTodoItems(e));
	});

	todoForm.addEventListener('submit', e => {
		e.preventDefault();
		addTodo(e);
	});
})();
