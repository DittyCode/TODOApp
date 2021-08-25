import { showError, hideError, isErrorActive } from './error';
import { deleteTodo } from './deleteTodoItem';
import { itemsLeft } from './todoItemsLeft';
import { changeTodoStatusComplete, toggleItemClass } from './statusTodo';
import {
	addTodoToStorage,
	deleteTodoFromStorage,
	changeTodoStatusStorage,
} from './storage';
import { dragable } from './dragable';

const clearInput = todoInput => {
	todoInput.value = '';
};

export const renderTodoItem = (value, status) => {
	const todoTemplate = document
		.querySelector('#todoTemplate')
		.content.cloneNode(true);
	const todoItem = document.createElement('div');
	todoItem.classList.add('todo', 'draggable');
	todoItem.setAttribute('draggable', 'true');
	todoItem.dataset.complete = status;
	todoItem.appendChild(todoTemplate);

	todoItem.querySelector('.todo__item-value').innerText = value;

	if (status === 'yes') {
		const btn = todoItem.querySelector('.todo__btn');
		toggleItemClass(btn, 'active');
		changeTodoStatusComplete(btn);
	}

	todoItem
		.querySelector('.todo__btn')
		.addEventListener('click', ({ target }) => {
			toggleItemClass(target, 'active');
			changeTodoStatusStorage(target);
			changeTodoStatusComplete(target);
		});

	todoItem
		.querySelector('.todo__delete')
		.addEventListener('click', ({ target }) => {
			deleteTodoFromStorage(target);
			deleteTodo(target);
		});

	dragable();

	return todoItem;
};

export const addTodo = (todoValue, todoInput, status) => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	todoValue ? hideError() : showError();
	if (!isErrorActive()) {
		todoContainer.append(renderTodoItem(todoValue, status));
		addTodoToStorage(todoValue, status);
		clearInput(todoInput);
		itemsLeft();
	}
};
