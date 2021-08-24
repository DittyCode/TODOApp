import { itemsLeft } from './todoItemsLeft';

export const filterTodoItems = ({ target }) => {
	const todos = [...document.querySelectorAll('.todo')];
	const status = {
		all: ['yes', 'no'],
		active: ['no'],
		completed: ['yes'],
	};
	todos.forEach(todo => {
		if (status[target.dataset.filter].includes(todo.dataset.complete)) {
			todo.style.setProperty('display', '');
		} else {
			todo.style.setProperty('display', 'none');
		}
	});
};

export const clearCompletedTodos = () => {
	const todos = [...document.querySelectorAll('.todo')];
	todos.forEach(todo => {
		if (todo.dataset.complete === 'yes') todo.remove();
	});
	itemsLeft();
};
