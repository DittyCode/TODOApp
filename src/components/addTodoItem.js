import { showError, hideError, isErrorActive } from './error';
import { deleteTodo } from './deleteTodoItem';
import { itemsLeft } from './todoItemsLeft';
import { changeTodoStatus } from './statusTodo';

const renderTodoItem = ({ value }) => {
	const todoTemplate = document
		.querySelector('#todoTemplate')
		.content.cloneNode(true);
	const todoItem = document.createElement('div');
	todoItem.classList.add('todo');
	todoItem.dataset.complete = 'no';

	todoItem.appendChild(todoTemplate);

	todoItem.querySelector('.todo__item-value').innerText = value;

	todoItem
		.querySelector('.todo__btn')
		.addEventListener('click', e => changeTodoStatus(e));

	todoItem
		.querySelector('.todo__delete')
		.addEventListener('click', e => deleteTodo(e));

	return todoItem;
};

const clearInput = todoInput => {
	todoInput.value = '';
};

export const addTodo = e => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	const todoInput = document.querySelector('[data-todoInput]');
	todoInput.value ? hideError() : showError();
	if (!isErrorActive()) {
		const todoItem = renderTodoItem(todoInput);
		clearInput(todoInput);
		todoContainer.prepend(todoItem);
		itemsLeft();
	}
};
