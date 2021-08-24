import { itemsLeft } from './todoItemsLeft';

export const deleteTodo = ({ target }) => {
	const todoContainer = document.querySelector('[data-todoContainer]');
	target.closest('.todo').remove();
	itemsLeft(todoContainer);
};
