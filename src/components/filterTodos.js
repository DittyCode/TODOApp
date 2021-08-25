import { deleteTodo } from './deleteTodoItem';
import { deleteTodoFromStorage } from './storage';
import { itemsLeft } from './todoItemsLeft';

export const filterTodoItems = target => {
	const todos = [...document.querySelectorAll('.todo')];
	const targetFilter = target.dataset.filter;
	const status = {
		all: ['yes', 'no'],
		active: ['no'],
		completed: ['yes'],
	};
	todos.forEach(todo => {
		const {
			dataset: { complete: todoStatus },
		} = todo;
		todo.style.setProperty(
			'display',
			`${status[targetFilter].includes(todoStatus) ? '' : 'none'}`
		);
	});
	itemsLeft();
};

export const clearCompletedTodos = () => {
	const todos = [...document.querySelectorAll('.todo')];
	todos.forEach(todo => {
		const {
			dataset: { complete: todoStatus },
		} = todo;

		if (todoStatus === 'yes') {
			deleteTodoFromStorage(todo);
			deleteTodo(todo);
		}
	});
	itemsLeft();
};
