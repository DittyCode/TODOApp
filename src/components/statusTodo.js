const renderStatusImage = todoStatus => {
	const todoItem = todoStatus.closest('.todo') || todoStatus;
	if (todoItem.querySelector('.todo__item-value')) {
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
	} else {
		if (!todoStatus.children.length) {
			todoStatus.innerHTML = `
        <img
					class="todo__btn-img"
					src="./images/icon-check.svg"
					alt="dark theme icon"
				/>
        `;
			todoItem.dataset.complete = 'yes';
			todoItem.classList.add('active');
		} else {
			todoStatus.innerHTML = '';
			todoItem.dataset.complete = 'no';
			todoItem.classList.remove('active');
		}
	}
};

export const checkTodoStatus = target => {
	if (target.dataset.pressed === 'no') {
		target.dataset.pressed = 'yes';
	} else {
		target.dataset.pressed = 'no';
	}
	return target.dataset.pressed;
};

export const changeTodoStatus = item => {
	renderStatusImage(item);
};
