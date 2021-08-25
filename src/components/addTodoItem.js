import { showError, hideError, isErrorActive } from './error';
import { deleteTodo } from './deleteTodoItem';
import { itemsLeft } from './todoItemsLeft';
import { changeTodoStatus } from './statusTodo';
import { addTodoToStorage, deleteTodoFromStorage } from './storage';

export const renderTodoItem = (value, complete) => {
	console.log(complete);
	const todoTemplate = document
		.querySelector('#todoTemplate')
		.content.cloneNode(true);
	const todoItem = document.createElement('div');
	todoItem.classList.add('todo');
	todoItem.dataset.complete = 'no';
	todoItem.dataset.pressed = complete.dataset.pressed;

	todoItem.appendChild(todoTemplate);

	if (complete.dataset.pressed === 'yes') {
		const btn = todoItem.querySelector('.todo__btn');
		todoItem.dataset.complete = 'yes';
		changeTodoStatus(btn);
		btn.classList.toggle('active');
	}

	todoItem.querySelector('.todo__item-value').innerText = value;

	todoItem.querySelector('.todo__btn').addEventListener('click', e => {
		console.log(e);
		const { target } = e;
		changeTodoStatus(target);
		target.classList.toggle('active');
	});

	todoItem.querySelector('.todo__delete').addEventListener('click', e => {
		deleteTodoFromStorage(e);
		deleteTodo(e);
	});

	return todoItem;
};

const clearInput = todoInput => {
	todoInput.value = '';
};

export const addTodo = (todoValue, todoInput, complete) => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	todoValue ? hideError() : showError();
	if (!isErrorActive()) {
		addTodoToStorage(todoValue, complete);
		clearInput(todoInput);
		todoContainer.prepend(renderTodoItem(todoValue, complete));
		itemsLeft();
	}
};
