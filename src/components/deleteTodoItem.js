import { itemsLeft } from './todoItemsLeft';

export const deleteTodo = target => {
	target.closest('.todo').style.setProperty('animation-name', 'remove');
	setTimeout(() => {
		target.closest('.todo').remove();
		itemsLeft();
	}, 300);
};
