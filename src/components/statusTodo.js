const completeStatusImage = item => {
	return (item.innerHTML = `
		<img
			class="todo__btn-img"
			src="./images/icon-check.svg"
			alt="icon todo complete"
		/>
	`);
};
export const changePressedBtnStatus = target => {
	if (target.dataset.pressed === 'no') {
		target.dataset.pressed = 'yes';
	} else {
		target.dataset.pressed = 'no';
	}
	return target.dataset.pressed;
};

export const toggleTodoBtnStatus = todoStatus => {
	changePressedBtnStatus(todoStatus);
	const {
		dataset: { pressed: status },
	} = todoStatus;
	todoStatus.innerHTML = `${
		status === 'yes' ? completeStatusImage(todoStatus) : ''
	}`;
	toggleItemClass(todoStatus, 'active');
};

export const toggleItemClass = (item, className) => {
	return item.classList.toggle(className);
};

export const changeTodoStatusComplete = item => {
	const todoItem = item.closest('.todo');
	const todoValue = todoItem.querySelector('.todo__item-value');
	if (!item.children.length) {
		completeStatusImage(item);
		todoItem.dataset.complete = 'yes';
	} else {
		item.innerHTML = '';
		todoItem.dataset.complete = 'no';
	}
	toggleItemClass(todoValue, 'complete');
};
