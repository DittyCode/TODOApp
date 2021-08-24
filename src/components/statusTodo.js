import { itemsLeft } from './todoItemsLeft';

const renderStatusImage = todoStatus => {
	const todoItem = todoStatus.closest('.todo');
	if (!todoStatus.children.length) {
		todoStatus.innerHTML = `
        <img
					class="todo__btn-img"
					src="./images/icon-check.svg"
					alt="dark theme icon"
				/>
        `;
		todoItem.dataset.complete = 'yes';
		todoItem.querySelector('.todo__item-value').classList.add('complete');
	} else {
		todoStatus.innerHTML = '';
		todoItem.dataset.complete = 'no';
		todoItem.querySelector('.todo__item-value').classList.remove('complete');
	}
};

export const changeTodoStatus = ({ target }) => {
	renderStatusImage(target);
};
