export const addTodoToStorage = (value, status) => {
	const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
	todoStorage.push(`${value}:${status}`);
	localStorage.setItem('todos', JSON.stringify(todoStorage));
};

export const deleteTodoFromStorage = target => {
	const todoStorage = JSON.parse(localStorage.getItem('todos'));
	const closestItem = target
		.closest('.todo')
		.querySelector('.todo__item-value').innerHTML;

	const storageValues = todoStorage.map(todo => todo.split(':')[0]);

	todoStorage.splice(storageValues.indexOf(closestItem), 1); 
	localStorage.setItem('todos', JSON.stringify(todoStorage));
};

export const changeTodoStatusStorage = target => {
	const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
	const closestItem = target
		.closest('.todo')
		.querySelector('.todo__item-value').innerHTML;

	const storageValues = todoStorage.map(todo => todo.split(':'));

	const status = {
		no: 'yes',
		yes: 'no',
	};
	storageValues.forEach(value => {
		if (value[0] === closestItem) {
			value[1] = status[value[1]];
		}
	});

	const newStorageValues = storageValues.map(value => value.join(':'));

	localStorage.setItem('todos', JSON.stringify(newStorageValues));
};
